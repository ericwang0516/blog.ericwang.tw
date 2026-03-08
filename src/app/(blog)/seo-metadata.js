export const metadata = {
  metadataBase: new URL('https://blog.ericwang.tw'),
  title: {
    default: "Eric's Blog",
    template: "%s | Eric's Blog",
  },
  description: "Eric's personal blog.",
  keywords: ['Eric Wang', 'Blog', '攝影', 'Photography', '科技', 'Tech', '旅遊', 'Travel', 'Sony a7C II'],
  authors: [{ name: 'Eric Wang', url: 'https://blog.ericwang.tw' }],
  creator: 'Eric Wang',
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: 'https://blog.ericwang.tw',
    title: "Eric's Blog",
    description: "Eric's personal blog.",
    siteName: "Eric's Blog",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Eric's Blog",
    description: "Eric's personal blog.",
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