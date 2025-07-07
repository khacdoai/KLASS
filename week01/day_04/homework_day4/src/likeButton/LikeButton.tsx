import React, { useState } from "react";
import styles from "./likeButton.module.css";
import { BiSolidLike, BiLike } from "react-icons/bi";

type Props = {
  like?: boolean;
};

const LikeButton = ({ like }: Props) => {
  const [isLiked, setIsLiked] = useState(like || false);

  return (
    <button
      className={styles.css}
      onClick={() => {
        setIsLiked((prev) => !prev);
      }}
    >
      {isLiked ? <BiSolidLike /> : <BiLike />}
    </button>
  );
};

export default LikeButton;