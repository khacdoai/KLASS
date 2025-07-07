import React, { useState } from "react";
import styles from "./productImage.module.css";

type Props = {
  images: string[];
};

const ProductImage = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainImageWrapper}>
        <button onClick={handlePrev} className={styles.navBtn}>
          ◀
        </button>
        <img
          src={images[currentIndex]}
          alt="Product"
          className={styles.mainImage}
        />
        <button onClick={handleNext} className={styles.navBtn}>
          ▶
        </button>
      </div>

      <div className={styles.thumbnails}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`thumb-${index}`}
            className={
              index === currentIndex
                ? `${styles.thumb} ${styles.active}`
                : styles.thumb
            }
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;