import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default async function HomePage() {
  // 暫時使用 MOCK 資料直到 Payload CMS Schema 和 Config 設定完成
  let posts = [];


  // 若目前還無法從 CMS 拿到資料，使用一些預設的展示區塊
  const displayPosts = posts.length > 0 ? posts : [
    {
      id: 1,
      title: '即將推出：更多精彩內容',
      slug: '#',
      excerpt: '這個部落格正在建置中。未來這裡將會分享攝影作品、科技見解以及各地的旅遊點滴。',
      category: '公告',
      publishedAt: new Date().toISOString()
    }
  ];

  return (
    <div className={styles.homeContainer}>
      {/* 英雄區塊 (Hero Section) */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          探索世界，<br />
          記錄靈感瞬間。
        </h1>
        <p className={styles.heroSubtitle}>
          歡迎來到 Eric's Blog。這裡分享關於攝影、科技與旅遊的深度觀點與視覺紀實。
        </p>
      </section>

      {/* 文章列表區塊 */}
      <section className={styles.postsSection}>
        <h2 className={styles.sectionTitle}>最新文章</h2>
        
        <div className={styles.postsGrid}>
          {displayPosts.map((post) => {
            const date = new Date(post.publishedAt || post.createdAt).toLocaleDateString('zh-TW', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });

            return (
              <article key={post.id} className={styles.postCard}>
                <Link href={post.slug === '#' ? '#' : `/posts/${post.slug}`} className={styles.postLink}>
                  {post.heroImage?.url ? (
                    <div className={styles.postImageContainer}>
                      <Image 
                        src={post.heroImage.url} 
                        alt={post.heroImage.alt || post.title} 
                        fill
                        className={styles.postImage}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className={styles.postImageContainerPlaceholder}>
                       <span className={styles.placeholderIcon}>📸</span>
                    </div>
                  )}
                  
                  <div className={styles.postContent}>
                    {post.category && (
                      <span className={styles.postCategory}>
                        {typeof post.category === 'object' ? post.category.name : post.category}
                      </span>
                    )}
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    {post.excerpt && <p className={styles.postExcerpt}>{post.excerpt}</p>}
                    <time className={styles.postDate}>{date}</time>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
