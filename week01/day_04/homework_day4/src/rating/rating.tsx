import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./rating.module.css";

type Props = {
  defaultRating?: number;
};

const Rating = ({ defaultRating = 0 }: Props) => {
  const [rating, setRating] = useState(defaultRating);

  const handleClick = (index: number) => {
    setRating(index);
  };

  const ratingTexts = [
    "",
    "Really Bad",
    "Bad",
    "Normal",
    "Amazing",
    "Excellent",
  ];

  return (
    <div
      className={styles.container}
      style={{ display: "flex", alignItems: "center", gap: "10px" }}
    >
      <div>
        {[1, 2, 3, 4, 5].map((item) => (
          <span
            key={item}
            style={{
              cursor: "pointer",
              color: rating >= item ? "orange" : "gray",
            }}
            onClick={() => handleClick(item)}
          >
            <FaStar />
          </span>
        ))}
      </div>
      <div style={{ minWidth: "100px", fontWeight: "bold" }}>
        {ratingTexts[rating]}
      </div>
    </div>
  );
};

export default Rating;