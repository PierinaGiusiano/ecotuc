import React from "react";
import styles from "./card-category.module.scss";

type CardCategoryProps = {
  title: string;
  image: string;
  description: string;
  showImage: boolean;
  showDescription: boolean;
  onClick?: () => void;
}

const CardCategory = ({ title, image,description, showImage, showDescription,  onClick }: CardCategoryProps) => {
  
  const applyBoldStyle = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }; // applica negrita a lo que esta dentro de **  ** 

  const descriptionLines = description.split('\n').map((line, index) => (
    <p key={index} dangerouslySetInnerHTML={{ __html: applyBoldStyle(line) }}></p>
  )); // realiza salto de linea luego del \n
  
  return (
    <div className={styles.cardCategory} onClick={onClick}>
      {showImage &&
        <img src={image} alt="category" />
      }

      <p className="title">{title}</p>
      
      {showDescription &&
        <p>{descriptionLines}</p>
      }

    </div>
  );
};

export default CardCategory;
