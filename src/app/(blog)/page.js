import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { CATEGORIES } from '../../config/categories';

export default async function HomePage() {
  // 暫時使用 MOCK 資料直到 Payload CMS Schema 和 Config 設定完成
  let posts = [
    {
      id: 1,
      title: '即將推出：更多精彩內容',
      slug: '#',
      excerpt: '這個部落格正在建置中。未來這裡將會分享攝影作品、科技見解以及各地的旅遊點滴。我們致力於提供深度且具啟發性的內容。',
      category: '公告',
      publishedAt: new Date().toISOString()
    },
    {
      id: 2,
      title: '攝影棚拍入門：光線運用與鏡頭選擇',
      slug: '#',
      excerpt: '探討在攝影棚內如何完美掌握光線佈局，並根據不同的拍攝主題選擇最適合的定焦或變焦鏡頭。',
      category: '攝影',
      publishedAt: new Date(Date.now() - 86400000).toISOString()
    },
    {
      id: 3,
      title: '2026 前端技術回顧與未來展望',
      slug: '#',
      excerpt: '回顧今年前端生態系的重大變革，包含 Next.js 15 的進化、React 19 以及各種構建工具的新趨勢。',
      category: '科技',
      publishedAt: new Date(Date.now() - 172800000).toISOString()
    },
    {
      id: 4,
      title: '京都深度遊：避開人潮的私房景點',
      slug: '#',
      excerpt: '漫步於古都的小巷弄中，探索那些不被旅遊書大篇幅報導的秘境，感受最純粹的日式風情。',
      category: '旅遊',
      publishedAt: new Date(Date.now() - 259200000).toISOString()
    }
  ];

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={styles.homeContainer}>
      
      {/* 頂部標題與分類導覽 */}
      <header className={styles.pageHeader}>
        <h1 className={styles.mainTitle}>Latest Updates</h1>
        <nav className={styles.categoryNav}>
          {CATEGORIES.map((category) => (
            <Link 
              key={category.id} 
              href={category.slug} 
              className={styles.categoryLink}
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </header>

      {/* 首篇焦點文章 (類似 OpenAI 首頁首篇的大佈局) */}
      {featuredPost && (
        <section className={styles.featuredSection}>
          <Link href={featuredPost.slug === '#' ? '#' : `/posts/${featuredPost.slug}`} className={styles.featuredLink}>
            <div className={styles.featuredGrid}>
              <div className={styles.featuredContent}>
                <div className={styles.postMeta}>
                  <span className={styles.postCategory}>{featuredPost.category}</span>
                  <time className={styles.postDate}>{formatDate(featuredPost.publishedAt)}</time>
                </div>
                <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
              </div>
              
              <div className={styles.featuredMedia}>
                {featuredPost.heroImage?.url ? (
                  <Image 
                    src={featuredPost.heroImage.url} 
                    alt={featuredPost.heroImage.alt || featuredPost.title} 
                    fill
                    className={styles.postImage}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                ) : (
                  <div className={styles.placeholderMedia}></div>
                )}
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* 分隔線 */}
      <hr className={styles.divider} />

      {/* 其他文章列表 (網格佈局) */}
      <section className={styles.postsSection}>
        <div className={styles.postsGrid}>
          {otherPosts.map((post) => (
            <article key={post.id} className={styles.postCard}>
              <Link href={post.slug === '#' ? '#' : `/posts/${post.slug}`} className={styles.postLink}>
                <div className={styles.cardMedia}>
                  {post.heroImage?.url ? (
                    <Image 
                      src={post.heroImage.url} 
                      alt={post.heroImage.alt || post.title} 
                      fill
                      className={styles.postImage}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className={styles.placeholderMediaSmall}></div>
                  )}
                </div>
                
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <div className={styles.postMeta}>
                    <span className={styles.postCategory}>{post.category}</span>
                    <time className={styles.cardDate}>{formatDate(post.publishedAt)}</time>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}