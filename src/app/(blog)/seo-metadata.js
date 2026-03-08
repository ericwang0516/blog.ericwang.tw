export const metadata = {
  metadataBase: new URL('https://blog.ericwang.tw'),
  title: {
    default: "Eric's Blog | 攝影・科技・旅遊",
    template: "%s | Eric's Blog",
  },
  description: "Eric's personal blog. 這裡分享關於攝影、科技與旅遊的深度觀點與視覺紀實。",
  keywords: ['Eric Wang', 'Blog', '攝影', 'Photography', '科技', 'Tech', '旅遊', 'Travel', 'Sony a7C II'],
  authors: [{ name: 'Eric Wang', url: 'https://blog.ericwang.tw' }],
  creator: 'Eric Wang',
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: 'https://blog.ericwang.tw',
    title: "Eric's Blog | 攝影・科技・旅遊",
    description: "深入探索攝影視界、科技創新與世界旅遊點滴。",
    siteName: "Eric's Blog",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Eric's Blog | 攝影・科技・旅遊",
    description: "深入探索攝影視界、科技創新與世界旅遊點滴。",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};
