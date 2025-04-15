"use client";

import { useState, useEffect } from 'react';

interface TokenBalanceProps {
  className?: string;
  address?: string;
}

export default function TokenBalance({ className, address }: TokenBalanceProps) {
  const [balance, setBalance] = useState<string>('--');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [connectedAddress, setConnectedAddress] = useState<string | null>(null);

  // 檢查是否有MetaMask
  const checkIfWalletIsInstalled = () => {
    return typeof window !== 'undefined' && typeof window.ethereum !== 'undefined';
  };

  // 獲取ETH餘額
  const fetchBalance = async (accountAddress: string) => {
    if (!checkIfWalletIsInstalled()) {
      setError('請安裝MetaMask錢包以查看餘額');
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      // 獲取ETH餘額
      const balanceHex = await window.ethereum.request({ 
        method: 'eth_getBalance',
        params: [accountAddress, 'latest']
      });
      
      // 轉換為ETH單位
      const balanceInWei = parseInt(balanceHex, 16);
      const balanceInEth = balanceInWei / 1e18;
      
      setBalance(`${balanceInEth.toFixed(4)} ETH`);
    } catch (err) {
      console.error('獲取餘額時出錯:', err);
      setError('無法獲取餘額');
    } finally {
      setIsLoading(false);
    }
  };

  // 獲取當前連接的帳戶
  const getConnectedAccount = async () => {
    if (!checkIfWalletIsInstalled()) {
      setError('請安裝MetaMask錢包以查看餘額');
      setIsLoading(false);
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      if (accounts.length > 0) {
        setConnectedAddress(accounts[0]);
        return accounts[0];
      } else {
        setError('請連接錢包以查看餘額');
        setIsLoading(false);
        return null;
      }
    } catch (err) {
      console.error('獲取帳戶時出錯:', err);
      setError('無法獲取帳戶');
      setIsLoading(false);
      return null;
    }
  };

  useEffect(() => {
    const init = async () => {
      // 如果提供了地址，直接使用該地址
      if (address) {
        setConnectedAddress(address);
        fetchBalance(address);
      } else {
        // 否則獲取當前連接的帳戶
        const account = await getConnectedAccount();
        if (account) {
          fetchBalance(account);
        }
      }
    };

    init();

    // 監聽帳戶變更
    if (checkIfWalletIsInstalled() && !address) {
      const handleAccountsChanged = async (accounts: string[]) => {
        if (accounts.length > 0) {
          setConnectedAddress(accounts[0]);
          fetchBalance(accounts[0]);
        } else {
          setConnectedAddress(null);
          setBalance('--');
          setError('請連接錢包以查看餘額');
        }
      };

      window.ethereum.on('accountsChanged', handleAccountsChanged);
      
      // 定期更新餘額
      const intervalId = setInterval(async () => {
        const account = await getConnectedAccount();
        if (account) {
          fetchBalance(account);
        }
      }, 30000);
      
      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        clearInterval(intervalId);
      };
    }
  }, [address]);

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">代幣餘額</h3>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-24">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="text-center text-red-500 py-4">{error}</div>
      ) : (
        <div className="space-y-4">
          {connectedAddress && (
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">地址</p >
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {connectedAddress}
              </p >
            </div>
          )}
          
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">ETH 餘額</p >
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{balance}</p >
          </div>
        </div>
      )}
    </div>
  );
}
