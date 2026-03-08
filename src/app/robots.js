// 爬蟲設定生成器
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://blog.ericwang.tw/sitemap.xml',
  };
};