import styles from './Renderlist05.module.css';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface IDealItem {
  id: number;
  image: string;
  title: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  sold: number;
  rating: number;
}

interface DealItemProps {
  data: IDealItem;
}

const DealItem = ({ data }: DealItemProps) => {
  const {
    image,
    title,
    price,
    originalPrice,
    discountPercent,
    sold,
    rating,
  } = data;

  return (
    <div className={styles.item}>
      <div className={styles.image_wrapper}>
        {discountPercent > 0 && (
          <span className={styles.discount_badge}>-{discountPercent}%</span>
        )}
        <img src={image} alt={title} />
      </div>

      <h4 className={styles.shop_name}>YOUNG SHOP</h4>

      <div className={styles.price}>
        <span className={styles.sale_price}>${price}</span>
        <del className={styles.original_price}>${originalPrice}</del>
        <span className={styles.off}>{discountPercent}% off</span>
      </div>

      <h3 className={styles.title}>{title}</h3>

      <div className={styles.rating}>
        {[...Array(5)].map((_, i) =>
          i < rating ? (
            <FaStar key={i} color="orange" size={14} />
          ) : (
            <FaRegStar key={i} color="#ccc" size={14} />
          )
        )}
      </div>

      <div className={styles.sold}>Sold: {sold}</div>
    </div>
  );
};

export default DealItem;
