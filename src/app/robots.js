export default function robots() {
  // 從先前你的專案歷史得知你可能暫時阻擋搜尋引擎爬蟲 (Block Search Engine Crawlers)
  // 因此這裡設定預設為 Disallow: /，若未來要開放，只需將其改為 Allow: / 並開放 index: true
  
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
      // 若要開放 SEO 請在此加 allow: '/' 
      // allow: '/'
    },
    sitemap: 'https://blog.ericwang.tw/sitemap.xml',
  };
}
