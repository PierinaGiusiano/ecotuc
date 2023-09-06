import React from "react";

import styles from "./card-tip.module.scss";

type CardTipProps = {
  title: string;
  image: string;
  description: string;
  onClick?: () => void;
};

const CardTip = ({ title, image, description, onClick }: CardTipProps) => {
  return (
    <div className={styles.cardTip}>
      <div className={styles.imageWrapper}>
        <img src={image} alt="tip" />
      </div>
      <p className="title">{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default CardTip;
