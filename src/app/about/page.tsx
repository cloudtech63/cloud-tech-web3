export default function AboutPage() {
  return (
    <div className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">關於我們</h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            了解Cloud Technology Holding Limited的故事、使命和價值觀
          </p >
        </div>

        {/* 公司介紹 */}
        <div className="mb-20">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">公司介紹</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Cloud Technology Holding Limited成立於2020年，是一家專注於開發商業業務平台和Web3解決方案的科技公司。我們致力於幫助各行業企業實現數碼化轉型，提升競爭力和運營效率。
              </p >
              <p>
                作為技術創新的先驅，我們結合傳統商業智慧與前沿Web3技術，為客戶提供全方位的數碼化解決方案。我們的團隊由經驗豐富的開發人員、設計師、產品經理和顧問組成，擁有豐富的行業知識和技術專長。
              </p >
              <p>
                我們的服務範圍包括業務平台開發、Web3解決方案、數據分析與洞察、雲端服務和數碼化轉型諮詢等。無論您是初創企業還是大型企業，我們都能為您提供量身定制的解決方案，幫助您在數碼時代取得成功。
              </p >
            </div>
          </div>
        </div>

        {/* 願景和使命 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">我們的願景</h2>
            <p className="text-gray-600 dark:text-gray-400">
              成為全球領先的數碼化轉型解決方案提供商，通過創新技術賦能企業，創造更美好的數碼未來。
            </p >
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">我們的使命</h2>
            <p className="text-gray-600 dark:text-gray-400">
              通過提供創新、可靠和高效的數碼化解決方案，幫助企業實現業務轉型，提升競爭力，創造更大的商業價值。
            </p >
          </div>
        </div>

        {/* 核心價值觀 */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">核心價值觀</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">創新</h3>
              <p className="text-gray-600 dark:text-gray-400">
                我們不斷探索新技術和新方法，為客戶提供創新的解決方案。
              </p >
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">誠信</h3>
              <p className="text-gray-600 dark:text-gray-400">
                我們以誠信為本，與客戶建立長期互信的合作關係。
              </p >
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">協作</h3>
              <p className="text-gray-600 dark:text-gray-400">
                我們重視團隊協作，與客戶緊密合作，共同實現目標。
              </p >
            </div>
          </div>
        </div>

        {/* 發展歷程 */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">發展歷程</h2>
          <div className="relative">
            {/* 時間線 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
            
            {/* 2020年 */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              </div>
              <div className="md:w-5/12 md:pr-8 md:text-right md:mr-auto">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">2020年</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Cloud Technology Holding Limited成立，開始提供業務平台開發服務。
                  </p >
                </div>
              </div>
            </div>
            
            {/* 2021年 */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              </div>
              <div className="md:w-5/12 md:pl-8 md:ml-auto">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">2021年</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    擴展服務範圍，增加Web3解決方案和數據分析服務。
                  </p >
                </div>
              </div>
            </div>
            
            {/* 2022年 */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              </div>
              <div className="md:w-5/12 md:pr-8 md:text-right md:mr-auto">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">2022年</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    成功為多家企業提供數碼化轉型解決方案，客戶群擴展到多個行業。
                  </p >
                </div>
              </div>
            </div>
            
            {/* 2023年 */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              </div>
              <div className="md:w-5/12 md:pl-8 md:ml-auto">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">2023年</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    團隊規模擴大，成立研發中心，專注於前沿技術研究和創新。
                  </p >
                </div>
              </div>
            </div>
            
            {/* 2024年 */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              </div>
              <div className="md:w-5/12 md:pr-8 md:text-right md:mr-auto">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">2024年</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    推出新一代Web3解決方案，獲得行業廣泛認可，成為數碼化轉型領域的領導者。
                  </p >
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 合作夥伴 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">合作夥伴</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center justify-center h-24">
              <span className="text-xl font-semibold text-gray-400">Partner 1</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center justify-center h-24">
              <span className="text-xl font-semibold text-gray-400">Partner 2</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center justify-center h-24">
              <span className="text-xl font-semibold text-gray-400">Partner 3</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center justify-center h-24">
              <span className="text-xl font-semibold text-gray-400">Partner 4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
