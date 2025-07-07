import AccessoryItem from './AccessoryItem';
import styles from './RenderList04.module.css'

interface IAccessoryProps {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  oldPrice?: number;
  discountPercent?: number;
}

const RenderList04 = ({ data }: { data: IAccessoryProps[] }) => {
  return (
    <div>
      <h2 className={styles.heading}>Phụ kiện tương thích</h2>
      <div className={styles.list_wrapper}>
        {data.map((item) => (
          <AccessoryItem
            key={item.id}
            thumbnail={item.thumbnail}
            title={item.title}
            price={item.price}
            oldPrice={item.oldPrice}
            discountPercent={item.discountPercent}
          />
        ))}
      </div>
    </div>
  );
};

export default RenderList04;
