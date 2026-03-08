import Image from 'next/image';
import styles from './PhotographyBlock.module.css';

export default function PhotographyBlock({ image, camera, shutterSpeed, aperture, iso, caption }) {
  if (!image?.url) return null;

  return (
    <figure className={styles.photographyBlock}>
      <div className={styles.imageContainer}>
        <Image
          src={image.url}
          alt={image.alt || 'Photography'}
          width={image.width || 1200}
          height={image.height || 800}
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>
      <figcaption className={styles.captionContainer}>
        {caption && <p className={styles.caption}>{caption}</p>}
        <div className={styles.exifData}>
          {camera && <span className={styles.exifItem}>📷 {camera}</span>}
          {shutterSpeed && <span className={styles.exifItem}>⏱️ {shutterSpeed}</span>}
          {aperture && <span className={styles.exifItem}>ƒ/ {aperture}</span>}
          {iso && <span className={styles.exifItem}>ISO {iso}</span>}
        </div>
      </figcaption>
    </figure>
  );
}
