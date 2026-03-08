import styles from './FoodTravelBlock.module.css';

export default function FoodTravelBlock({ title, description, rating, locationMapUrl }) {
  const renderStars = () => {
    const stars = [];
    const maxStars = 5;
    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <span key={i} className={i <= rating ? styles.starFilled : styles.starEmpty}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className={styles.foodTravelBlock}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {rating && (
          <div className={styles.rating}>
            {renderStars()}
            <span className={styles.ratingValue}>{rating}/5</span>
          </div>
        )}
        <p className={styles.description}>{description}</p>
        
        {locationMapUrl && (
          <a
            href={locationMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            📍 查看 Google 地圖
          </a>
        )}
      </div>
    </div>
  );
}
