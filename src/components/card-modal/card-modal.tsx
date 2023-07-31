import React, { ReactNode } from "react";

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
      className={styles.modalOverlay}
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <span className={styles.closeButton} onClick={onClose}>
        &times;
      </span>
      <h3>{title}</h3>
      <div className={styles.modalContent}>
        <img src={image} alt="title" />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CardModal;
