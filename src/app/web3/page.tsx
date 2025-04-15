"use client";

import WalletConnect from '@/components/WalletConnect';
import BlockchainInfo from '@/components/BlockchainInfo';
import TokenBalance from '@/components/TokenBalance';

export default function Web3Page() {
  return (
    <div className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Web3 功能展示</h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            體驗我們的Web3功能，包括錢包連接、區塊鏈信息查詢和代幣餘額顯示
          </p >
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* 錢包連接卡片 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">錢包連接</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              連接您的Web3錢包（如MetaMask）以體驗完整功能
            </p >
            <WalletConnect />
          </div>

          {/* 區塊鏈信息卡片 */}
          <BlockchainInfo />

          {/* 代幣餘額卡片 */}
          <TokenBalance />
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">什麼是Web3？</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p>
              Web3是互聯網的下一代形態，基於區塊鏈技術，強調去中心化、透明性和用戶擁有權。它使用戶能夠控制自己的數據和數字資產，並參與去中心化的應用和服務。
            </p >
            <p>
              與傳統的Web2（當前的互聯網）相比，Web3具有以下特點：
            </p >
            <ul className="list-disc pl-6 space-y-2">
              <li>去中心化：不依賴於單一實體或服務器</li>
              <li>用戶擁有權：用戶擁有並控制自己的數據和數字資產</li>
              <li>透明性：所有交易和互動都記錄在公共區塊鏈上</li>
              <li>抗審查：內容不易被刪除或審查</li>
              <li>開放性：任何人都可以參與和貢獻</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">我們的Web3服務</h2>
            <ul className="space-y-4">
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">智能合約開發</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    開發安全、高效的智能合約，實現業務邏輯自動化和去中心化
                  </p >
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">代幣經濟設計</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    設計和實施代幣經濟模型，為您的業務創造新的價值和激勵機制
                  </p >
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">區塊鏈安全審計</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    全面審計智能合約和區塊鏈應用，確保安全性和可靠性
                  </p >
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">常見問題</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">什麼是錢包？</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Web3錢包是您進入區塊鏈世界的門戶，它存儲您的私鑰並允許您與區塊鏈應用互動。常見的錢包包括MetaMask、Trust Wallet和Coinbase Wallet。
                </p >
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">如何開始使用Web3？</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  開始使用Web3的第一步是安裝一個錢包（如MetaMask），然後獲取一些加密貨幣，最後探索各種去中心化應用（DApps）。
                </p >
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Web3對企業有什麼好處？</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Web3技術可以幫助企業提高透明度、降低中間成本、創建新的商業模式、增強用戶忠誠度，並實現更安全的數據管理。
                </p >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
