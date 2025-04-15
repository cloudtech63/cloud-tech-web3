"use client";

import { useState, useEffect } from 'react';

interface WalletConnectProps {
  className?: string;
}

export default function WalletConnect({ className }: WalletConnectProps) {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 檢查是否有MetaMask
  const checkIfWalletIsInstalled = () => {
    return typeof window !== 'undefined' && typeof window.ethereum !== 'undefined';
  };

  // 連接錢包
  const connectWallet = async () => {
    if (!checkIfWalletIsInstalled()) {
      setError('請安裝MetaMask錢包');
      return;
    }

    try {
      setIsConnecting(true);
      setError(null);
      
      // 請求帳戶訪問
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      
      if (accounts.length > 0) {
        setAccount(accounts[0]);
      }
    } catch (err) {
      console.error('連接錢包時出錯:', err);
      setError('連接錢包失敗');
    } finally {
      setIsConnecting(false);
    }
  };

  // 斷開錢包連接
  const disconnectWallet = () => {
    setAccount(null);
  };

  // 監聽帳戶變更
  useEffect(() => {
    if (checkIfWalletIsInstalled()) {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          setAccount(null);
        }
      };

      // 檢查是否已連接
      window.ethereum.request({ method: 'eth_accounts' })
        .then(handleAccountsChanged)
        .catch((err: Error) => console.error(err));

      // 監聽帳戶變更
      window.ethereum.on('accountsChanged', handleAccountsChanged);

      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      };
    }
  }, []);

  // 格式化地址顯示
  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <div className={className}>
      {account ? (
        <div className="flex items-center">
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300 mr-2">
            已連接
          </span>
          <span className="text-sm text-gray-700 dark:text-gray-300 mr-2">
            {formatAddress(account)}
          </span>
          <button
            onClick={disconnectWallet}
            className="text-xs text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
          >
            斷開
          </button>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          disabled={isConnecting}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-medium rounded-md shadow hover:shadow-lg transition-all duration-300 disabled:opacity-70"
        >
          {isConnecting ? '連接中...' : '連接錢包'}
        </button>
      )}
      {error && (
        <p className="text-xs text-red-600 mt-1">{error}</p >
      )}
    </div>
  );
}
