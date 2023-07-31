import React from "react";

import styles from "./card-category.module.scss";

interface CardCategoryProps {
  title: string;
  image: string;
}

const CardCategory = ({ title, image }: CardCategoryProps) => {
  return (
    <div className={styles.cardCategory}>
      <img src={image} alt="category" />
      <p className="title">{title}</p>
    </div>
  );
};

export default CardCategory;
