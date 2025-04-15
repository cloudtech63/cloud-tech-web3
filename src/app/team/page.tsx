export default function TeamPage() {
  return (
    <div className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">我們的團隊</h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            認識Cloud Technology Holding Limited背後的專業團隊，我們致力於為客戶提供最佳的數碼化解決方案
          </p>
        </div>

        {/* 領導團隊 */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">領導團隊</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CEO */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">張明</h3>
                <p className="text-blue-500 dark:text-blue-400 font-medium mb-4">創始人兼首席執行官</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  擁有20年科技行業經驗，曾在多家知名科技公司擔任高管職位。專注於企業數碼化轉型和Web3技術應用。
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* CTO */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">李偉</h3>
                <p className="text-blue-500 dark:text-blue-400 font-medium mb-4">首席技術官</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  區塊鏈和Web3技術專家，擁有豐富的系統架構和技術開發經驗。曾領導多個大型技術項目，專注於創新技術應用。
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* COO */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">王麗</h3>
                <p className="text-blue-500 dark:text-blue-400 font-medium mb-4">首席運營官</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  擁有15年企業運營和項目管理經驗，專注於業務流程優化和團隊建設。曾成功領導多個大型項目，確保高質量交付。
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 核心團隊 */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">核心團隊</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* 團隊成員 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">陳傑</h3>
                <p className="text-blue-500 dark:text-blue-400 font-medium mb-2">高級開發工程師</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  專注於Web3和區塊鏈開發，擁有豐富的智能合約開發經驗。
                </p>
              </div>
            </div>

            {/* 團隊成員 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">林小明</h3>
                <p className="text-blue-500 dark:text-blue-400 font-medium mb-2">UI/UX設計師</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  專注於用戶體驗設計，擅長創建直觀、美觀的用戶界面。
                </p>
              </div>
            </div>

            {/* 團隊成員 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">張雨</h3>
                <p className="text-blue-500 dark:text-blue-400 font-medium mb-2">數據分析師</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  專注於數據分析和可視化，擅長從數據中提取有價值的業務洞察。
                </p>
              </div>
            </div>

            {/* 團隊成員 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">劉強</h3>
                <p className="text-blue-500 dark:text-blue-400 font-medium mb-2">項目經理</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  專注於項目管理和客戶溝通，確保項目按時、按質量交付。
                </p>
              </div>
            </div>

            {/* 團隊成員 5 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">趙靜</h3>
                <p className="text-blue-500 dark:text-blue-400 font-medium mb-2">市場營銷經理</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  專注於市場策略和品牌建設，擅長數碼營銷和內容創作。
                </p>
              </div>
            </div>

            {/* 團隊成員 6 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">吳剛</h3>
                <p className="text-blue-500 dark:text-blue-400 font-medium mb-2">後端開發工程師</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  專注於後端系統開發，擅長高性能、可擴展的系統架構設計。
                </p>
              </div>
            </div>

            {/* 團隊成員 7 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">黃麗麗</h3>
                <p className="text-blue-500 dark:text-blue-400 font-medium mb-2">客戶成功經理</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  專注於客戶關係管理，確保客戶獲得最佳服務體驗。
                </p>
              </div>
            </div>

            {/* 團隊成員 8 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">鄭明</h3>
                <p className="text-blue-500 dark:text-blue-400 font-medium mb-2">QA工程師</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  專注於質量保證和測試，確保產品的穩定性和可靠性。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 公司文化 */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">公司文化</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">我們的工作方式</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">協作與溝通</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      我們重視團隊協作和開放溝通，鼓勵成員分享想法和知識。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">創新思維</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      我們鼓勵創新思維和嘗試新方法，不斷探索技術的可能性。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">持續學習</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      我們重視持續學習和專業發展，鼓勵團隊成員不斷提升自己。
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">加入我們的理由</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">前沿技術</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      有機會參與前沿技術項目，不斷學習和成長。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">成長空間</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      提供廣闊的職業發展空間和晉升機會。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">工作生活平衡</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      重視團隊成員的工作生活平衡，提供靈活的工作安排。
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 加入我們 */}
        <div className="bg-blue-50 dark:bg-blue-900 rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">加入我們的團隊</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            我們正在尋找熱愛技術、充滿創造力的人才加入我們的團隊。如果您對Web3和數碼化轉型充滿熱情，歡迎加入我們！
          </p>
          <a href="/contact" className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300">
            查看職位空缺
          </a>
        </div>
      </div>
    </div>
  );
}
