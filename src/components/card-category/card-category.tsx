import React from "react";

import styles from "./card-category.module.scss";

type CardCategoryProps = {
  title: string;
  image: string;
  onClick?: () => void;
}

const CardCategory = ({ title, image, onClick }: CardCategoryProps) => {
  return (
    <div className={styles.cardCategory} onClick={onClick}>
      <img src={image} alt="category" />
      <p className="title">{title}</p>
    </div>
  );
};

export default CardCategory;
