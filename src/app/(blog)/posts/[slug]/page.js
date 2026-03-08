import { getPayload } from 'payload';
import configPromise from '@payload-config';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import RenderBlocks from '@/components/Blocks/RenderBlocks';
import styles from './page.module.css';

export default async function PostDetail({ params }) {
  // 由於 Next.js 15 的修改，params 在伺服器元件中成為了 promise
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // 使用 Payload Local API 高效獲取資料
  const payload = await getPayload({ config: configPromise });
  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    limit: 1,
  });

  const post = docs[0];

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
