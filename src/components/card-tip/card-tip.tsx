import React, { useRef, useEffect } from "react";
import styles from "./card-tip.module.scss";

type CardTipProps = {
  title: string;
  image: string;
  description: string;
  onClick?: () => void;
}

const CardTip = ({ title, image, description, onClick }: CardTipProps) => {

  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const applyBoldStyle = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }; // applica negrita a lo que esta dentro de **  ** 

  const descriptionLines = description.split('\n').map((line, index) => (
    <p key={index} dangerouslySetInnerHTML={{ __html: applyBoldStyle(line) }}></p>
  )); // realiza salto de linea luego del \n


  return (
    <div className={styles.cardTip}>
      <img src={image} alt="tip" />
      <p className="title">{title}</p>
      <p ref={descriptionRef}>{descriptionLines}</p>
    </div>
  );
};

export default CardTip;
