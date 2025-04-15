import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">我們的服務</h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Cloud Technology Holding Limited提供全方位的數碼化解決方案，助力各行業企業實現數碼化轉型
          </p>
        </div>

        {/* 服務概述 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">業務平台開發</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              開發定制化的業務平台，滿足企業特定需求，提升運營效率。
            </p>
            <Link href="#business-platform" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
              了解更多 &rarr;
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Web3 解決方案</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              提供區塊鏈和Web3技術解決方案，幫助企業探索新的商業模式。
            </p>
            <Link href="#web3-solutions" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
              了解更多 &rarr;
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">數據分析與洞察</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              通過數據分析提供業務洞察，幫助企業做出數據驅動的決策。
            </p>
            <Link href="#data-analytics" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
              了解更多 &rarr;
            </Link>
          </div>
        </div>

        {/* 業務平台開發 */}
        <div id="business-platform" className="mb-20 scroll-mt-20">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">業務平台開發</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  我們的業務平台開發服務專注於為企業創建定制化的數碼解決方案，幫助企業優化業務流程，提升運營效率，增強競爭力。
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  我們的開發團隊擁有豐富的經驗和專業知識，能夠根據企業的特定需求，設計和開發高質量、可擴展的業務平台。
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">我們提供的業務平台開發服務包括：</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>企業資源規劃(ERP)系統</li>
                  <li>客戶關係管理(CRM)系統</li>
                  <li>供應鏈管理系統</li>
                  <li>電子商務平台</li>
                  <li>內部協作工具</li>
                  <li>業務流程自動化系統</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">開發流程</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">
                      1
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">需求分析</h4>
                      <p className="text-gray-600 dark:text-gray-400">深入了解企業需求，確定平台功能和目標。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">
                      2
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">設計規劃</h4>
                      <p className="text-gray-600 dark:text-gray-400">制定詳細的設計方案和技術架構。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">
                      3
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">開發實現</h4>
                      <p className="text-gray-600 dark:text-gray-400">按照設計方案進行平台開發和功能實現。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">
                      4
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">測試優化</h4>
                      <p className="text-gray-600 dark:text-gray-400">全面測試平台功能，優化用戶體驗。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">
                      5
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">部署上線</h4>
                      <p className="text-gray-600 dark:text-gray-400">平台部署上線，提供技術支持和培訓。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">
                      6
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">持續維護</h4>
                      <p className="text-gray-600 dark:text-gray-400">提供持續的維護和升級服務。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Web3 解決方案 */}
        <div id="web3-solutions" className="mb-20 scroll-mt-20">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Web3 解決方案</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  我們的Web3解決方案幫助企業探索和利用區塊鏈技術的潛力，創建去中心化的應用和服務，開拓新的商業模式。
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  我們的Web3專家團隊擁有豐富的區塊鏈技術經驗，能夠為企業提供全方位的Web3解決方案，從概念設計到技術實現。
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">我們提供的Web3服務包括：</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>智能合約開發</li>
                  <li>去中心化應用(DApp)開發</li>
                  <li>代幣經濟設計</li>
                  <li>NFT平台開發</li>
                  <li>區塊鏈集成</li>
                  <li>Web3安全審計</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Web3技術優勢</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">去中心化</h4>
                      <p className="text-gray-600 dark:text-gray-400">不依賴中央機構，降低單點故障風險。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">透明性</h4>
                      <p className="text-gray-600 dark:text-gray-400">所有交易公開透明，可追溯。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">安全性</h4>
                      <p className="text-gray-600 dark:text-gray-400">加密技術保障數據安全，防止篡改。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">自動化</h4>
                      <p className="text-gray-600 dark:text-gray-400">智能合約自動執行，減少人為干預。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">創新商業模式</h4>
                      <p className="text-gray-600 dark:text-gray-400">開創新的價值交換和激勵機制。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 數據分析與洞察 */}
        <div id="data-analytics" className="mb-20 scroll-mt-20">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">數據分析與洞察</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  我們的數據分析服務幫助企業從海量數據中提取有價值的信息，發現業務洞察，支持數據驅動的決策。
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  我們的數據分析團隊擁有豐富的數據處理和分析經驗，能夠為企業提供全面的數據分析解決方案。
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">我們提供的數據分析服務包括：</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>業務數據分析</li>
                  <li>市場趨勢分析</li>
                  <li>客戶行為分析</li>
                  <li>預測分析</li>
                  <li>數據可視化</li>
                  <li>數據驅動的決策支持</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">數據分析流程</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">
                      1
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">數據收集</h4>
                      <p className="text-gray-600 dark:text-gray-400">從各種來源收集相關數據。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">
                      2
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">數據清洗</h4>
                      <p className="text-gray-600 dark:text-gray-400">處理和清洗數據，確保數據質量。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">
                      3
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">數據分析</h4>
                      <p className="text-gray-600 dark:text-gray-400">使用統計和機器學習方法分析數據。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">
                      4
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">數據可視化</h4>
                      <p className="text-gray-600 dark:text-gray-400">將分析結果轉化為直觀的視覺呈現。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">
                      5
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">洞察提取</h4>
                      <p className="text-gray-600 dark:text-gray-400">從分析結果中提取有價值的業務洞察。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">
                      6
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">決策支持</h4>
                      <p className="text-gray-600 dark:text-gray-400">提供數據支持的決策建議。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 成功案例 */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">成功案例</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">電子商務平台升級</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  為某電子商務企業開發新一代平台，提升用戶體驗和運營效率，銷售額增長30%。
                </p>
                <Link href="#" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                  查看詳情 &rarr;
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">NFT市場平台開發</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  為藝術機構開發NFT市場平台，實現數字藝術品的創建、展示和交易，月交易額超過100萬美元。
                </p>
                <Link href="#" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                  查看詳情 &rarr;
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">供應鏈數據分析</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  為製造企業提供供應鏈數據分析解決方案，優化庫存管理和物流配送，成本降低15%。
                </p>
                <Link href="#" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                  查看詳情 &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 聯繫我們 */}
        <div className="bg-blue-50 dark:bg-blue-900 rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">準備好開始您的數碼化轉型了嗎？</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            聯繫我們，了解我們如何幫助您的企業實現數碼化轉型，提升競爭力。
          </p>
          <Link href="/contact" className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300">
            立即聯繫
          </Link>
        </div>
      </div>
    </div>
  );
}
