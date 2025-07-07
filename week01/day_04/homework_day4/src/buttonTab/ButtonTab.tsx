import React, { useState } from "react";
import styles from "./ButtonTab.module.css";

type Props = {
  tabs: string[];
  desc: string[];
};

const ButtonTab = ({ tabs, desc }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickButton = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {tabs.map((tab, index) => {
          return (
            <span
              className={`${styles.button} ${
                currentIndex === index ? styles.active : ""
              }`}
              onClick={() => {
                handleClickButton(index);
              }}
            >
              {tab}
            </span>
          );
        })}
      </div>
      <div className={styles.bot}>
        <p>{desc[currentIndex]}</p>
      </div>
    </div>
  );
};

export default ButtonTab;