import DealItem from './DealItem';
import styles from './Renderlist05.module.css';

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

const deals: IDealItem[] = [
  {
    id: 1,
    title: 'LG White Front Load Steam Washer',
    image: './images/images-list-5/1.jpg',
    price: 1422.7,
    originalPrice: 1025.5,
    discountPercent: 39,
    sold: 10,
    rating: 4,
  },
  {
    id: 2,
    title: 'Edifier Powered Bookshelf Speakers',
    image: './images/images-list-5/2.jpg',
    price: 96,
    originalPrice: 85,
    discountPercent: 13,
    sold: 15,
    rating: 4,
  },
  {
    id: 3,
    title: 'Amcrest Security Camera in White Color',
    image: './images/images-list-5/3.jpg',
    price: 62.99,
    originalPrice: 45.9,
    discountPercent: 37,
    sold: 20,
    rating: 4,
  },
  {
    id: 4,
    title: 'Grand Slam Indoor Of Show Jumping Novel',
    image: './images/images-list-5/4.jpg',
    price: 41.99,
    originalPrice: 32.99,
    discountPercent: 27,
    sold: 22,
    rating: 4,
  },
  {
    id: 5,
    title: 'Sound Intone I65 Earphone White Version',
    image: './images/images-list-5/5.jpg',
    price: 106.96,
    originalPrice: 100.99,
    discountPercent: 6,
    sold: 10,
    rating: 4,
  },
  {
    id: 6,
    title: 'Korea Long Sofa Fabric In Blue Navy Color',
    image: './images/images-list-5/6.jpg',
    price: 670.2,
    originalPrice: 567.8,
    discountPercent: 18,
    sold: 79,
    rating: 4,
  },
];

const RenderList05 = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Deal of the day</h2>
      <div className={styles.grid}>
        {deals.map((deal) => (
          <DealItem key={deal.id} data={deal} />
        ))}
      </div>
    </div>
  );
};

export default RenderList05;
