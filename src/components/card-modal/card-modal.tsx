import React, { ReactNode } from "react";

import close from "../../assets/images/icons/icon-close.svg"

import styles from "./card-modal.module.scss";

type ModalProps = {
  title: string;
  image?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
};

const CardModal = ({ title, image, children, isOpen, onClose }: ModalProps) => {
  return (
    <div
      className={styles.modalWrapper}
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div className={styles.modalContent}>
        <img src={close} width={24} height={24} className={styles.closeButton} onClick={onClose} alt="close"/>
        <h3 className={styles.title}>{title}</h3>
        <img src={image} alt="title" />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CardModal;
