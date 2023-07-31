import React, { useRef, useEffect } from "react";
import styles from "./card-tip.module.scss";

interface CardTipProps {
  title: string;
  image: string;
  description: string;
}

const CardTip = ({ title, image, description }: CardTipProps) => {
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const descriptionElement = descriptionRef.current;
    if (descriptionElement) {
      const maxWords = 18;
      const words = description.split(" ");
      if (words.length > maxWords) {
        const truncatedWords = words.slice(0, maxWords);
        descriptionElement.textContent = truncatedWords.join(" ") + " ...";
      }
    }
  }, [description]);

  return (
    <div className={styles.cardTip}>
      <img src={image} alt="tip" />
      <p className="title">{title}</p>
      <p ref={descriptionRef}>{description}</p>
    </div>
  );
};

export default CardTip;
