"use client";

import { useState, useEffect } from 'react';

interface BlockchainInfoProps {
  className?: string;
}

export default function BlockchainInfo({ className }: BlockchainInfoProps) {
  const [networkName, setNetworkName] = useState<string>('--');
  const [blockNumber, setBlockNumber] = useState<string>('--');
  const [gasPrice, setGasPrice] = useState<string>('--');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 檢查是否有MetaMask
  const checkIfWalletIsInstalled = () => {
    return typeof window !== 'undefined' && typeof window.ethereum !== 'undefined';
  };

  // 獲取網絡名稱
  const getNetworkName = (chainId: string): string => {
    const networks: { [key: string]: string } = {
      '0x1': 'Ethereum Mainnet',
      '0x3': 'Ropsten Testnet',
      '0x4': 'Rinkeby Testnet',
      '0x5': 'Goerli Testnet',
      '0x2a': 'Kovan Testnet',
      '0x89': 'Polygon Mainnet',
      '0x13881': 'Polygon Mumbai',
      '0xa86a': 'Avalanche Mainnet',
      '0xa869': 'Avalanche Fuji',
      '0x38': 'Binance Smart Chain',
      '0x61': 'BSC Testnet'
    };
    
    return networks[chainId] || `Chain ID: ${parseInt(chainId, 16)}`;
  };

  // 獲取區塊鏈信息
  const fetchBlockchainInfo = async () => {
    if (!checkIfWalletIsInstalled()) {
      setError('請安裝MetaMask錢包以查看區塊鏈信息');
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      // 獲取當前網絡
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      setNetworkName(getNetworkName(chainId));
      
      // 獲取最新區塊號
      const blockNumberHex = await window.ethereum.request({ method: 'eth_blockNumber' });
      setBlockNumber(parseInt(blockNumberHex, 16).toString());
      
      // 獲取Gas價格
      const gasPriceHex = await window.ethereum.request({ method: 'eth_gasPrice' });
      const gasPriceGwei = (parseInt(gasPriceHex, 16) / 1e9).toFixed(2);
      setGasPrice(`${gasPriceGwei} Gwei`);
      
    } catch (err) {
      console.error('獲取區塊鏈信息時出錯:', err);
      setError('無法獲取區塊鏈信息');
    } finally {
      setIsLoading(false);
    }
  };

  // 監聽網絡變更
  useEffect(() => {
    if (checkIfWalletIsInstalled()) {
      fetchBlockchainInfo();
      
      const handleChainChanged = (chainId: string) => {
        setNetworkName(getNetworkName(chainId));
        fetchBlockchainInfo();
      };
      
      window.ethereum.on('chainChanged', handleChainChanged);
      
      // 定期更新區塊鏈信息
      const intervalId = setInterval(fetchBlockchainInfo, 15000);
      
      return () => {
        window.ethereum.removeListener('chainChanged', handleChainChanged);
        clearInterval(intervalId);
      };
    } else {
      setError('請安裝MetaMask錢包以查看區塊鏈信息');
      setIsLoading(false);
    }
  }, []);

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">區塊鏈信息</h3>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="text-center text-red-500 py-4">{error}</div>
      ) : (
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">當前網絡</p >
            <p className="text-lg font-medium text-gray-900 dark:text-white">{networkName}</p >
          </div>
          
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">最新區塊</p >
            <p className="text-lg font-medium text-gray-900 dark:text-white">{blockNumber}</p >
          </div>
          
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Gas 價格</p >
            <p className="text-lg font-medium text-gray-900 dark:text-white">{gasPrice}</p >
          </div>
        </div>
      )}
    </div>
  );
}
