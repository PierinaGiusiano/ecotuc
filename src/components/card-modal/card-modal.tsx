import React, { ReactNode } from "react";
import close from "../../assets/images/icons/icon-close.svg";
import styles from "./card-modal.module.scss";

import styled from 'styled-components';

type ModalProps = {
  title: string;
  description: string;
  image?: string;
  children: ReactNode;
  isOpen?: boolean;
  showHeader: boolean;
  showImage: boolean;
  showDescription: boolean;
  imagenSize?: string,
  onClose?: () => void;
};

const CardModal = ({ 
  title, 
  description,  
  image, 
  children, 
  imagenSize,
  showHeader,
  showImage,
  showDescription,
  isOpen, 
  onClose 
  }: ModalProps) => {
  
  const applyBoldStyle = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }; // applica negrita a lo que esta dentro de **  ** 

  const descriptionLines = description.split('\n').map((line, index) => (
    <p key={index} dangerouslySetInnerHTML={{ __html: applyBoldStyle(line) }}></p>
  )); // realiza salto de linea luego del \n

  return (
    <div
      className={styles.modalWrapper}
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div className={styles.modalContent}>

        <img src={close} width={24} height={24} className={styles.closeButton} onClick={onClose} alt="close"/>
        
        {showHeader &&
          <h3 className={styles.title}>{title}</h3>
        }
        {showImage &&
          <StyledImage src={image} alt={title} imagenSize={imagenSize} />
        }
        {showDescription &&
          <>
          {descriptionLines}
          </>
        }

        <div>
          <p>{children}</p>
        </div>

      </div>
    </div>
  );
};

export default CardModal;


const StyledImage = styled.img<{ imagenSize?: string }>`
width: 100%;
height: 100%;
max-height: ${props => props.imagenSize ? props.imagenSize : '600px'};
object-fit: contain;
border-radius: 8px;
@media (max-width: 768px) {max-height: 300px;}
`;










