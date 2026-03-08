import Link from 'next/link';
import styles from './layout.module.css';
import '../globals.css'; // 全局重置的 CSS
import { metadata as seoMetadata } from './seo-metadata';

export const metadata = Object.assign({}, seoMetadata);

export default function BlogLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body>
        <div className={styles.container}>
          <header className={styles.header}>
            <nav className={styles.navbar}>
              <Link href="/" className={styles.logo}>
                Eric's Blog
              </Link>
              <div className={styles.links}>
                <Link href="/category/photography">攝影</Link>
                <Link href="/category/tech">科技</Link>
                <Link href="/category/travel">旅遊</Link>
              </div>
            </nav>
          </header>
          
          <main className={styles.main}>
            {children}
          </main>

          <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Eric Wang. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
