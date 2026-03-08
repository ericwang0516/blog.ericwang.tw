import Image from 'next/image';
import { notFound } from 'next/navigation';
import RenderBlocks from '@/components/Blocks/RenderBlocks';
import styles from './page.module.css';

export default async function PostDetail({ params }) {
  // 由於 Next.js 15 的修改，params 在伺服器元件中成為了 promise
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // 暫時使用 MOCK 資料直到 Payload CMS Schema 和 Config 設定完成
  const post = {
    title: '攝影・科技・旅遊：探索世界的視角',
    category: { name: '公告' },
    publishedAt: new Date().toISOString(),
    heroImage: null, // 測試無首圖的情境
    layout: [
      {
        blockType: 'richText',
        contentHtml: '<p>這是一篇測試文章，當 Payload CMS 配置完成後，這裡將會被替換為真實資料。</p>',
      }
    ]
  };

  if (!post) {
    notFound();
  }

  const publishDate = new Date(post.publishedAt || post.createdAt).toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <time dateTime={post.publishedAt || post.createdAt}>{publishDate}</time>
          {post.category && <span className={styles.category}>・ {post.category.name || post.category}</span>}
        </div>
      </header>

      {post.heroImage?.url && (
        <div className={styles.heroContainer}>
          <Image 
            src={post.heroImage.url} 
            alt={post.heroImage.alt || post.title} 
            fill 
            className={styles.heroImage}
            sizes="100vw"
            priority
          />
        </div>
      )}

      <div className={styles.content}>
        <RenderBlocks layout={post.layout} />
      </div>
    </article>
  );
}
