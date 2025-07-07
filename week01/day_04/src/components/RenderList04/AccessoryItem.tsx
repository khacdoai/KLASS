import styles from './RenderList04.module.css';

interface IAccessoryProps {
  thumbnail: string;
  title: string;
  price: number;
  oldPrice?: number;
  discountPercent?: number;
}

const AccessoryItem = ({
  thumbnail,
  title,
  price,
  oldPrice,
  discountPercent
}: IAccessoryProps) => {
  return (
    <div className={styles.accessory_item}>
      <div className={styles.thumbnail_wrapper}>
        {discountPercent && (
          <span className={styles.discount}>-{discountPercent}%</span>
        )}
        <img src={thumbnail} alt={title} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.price_box}>
        <span className={styles.price}>{price.toLocaleString()}đ</span>
        {oldPrice && (
          <span className={styles.old_price}>{oldPrice.toLocaleString()}đ</span>
        )}
      </div>
    </div>
  );
};

export default AccessoryItem;
