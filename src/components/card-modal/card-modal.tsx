import React, { ReactNode } from "react";
import Modal from "react-modal";

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
    <div className={styles.modalOverlay} style={{ display: isOpen ? "block" : "none" }}>
      <div className={styles.modalContent}>
        <span className={styles.closeButton} onClick={onClose}>
          &times;
        </span>
        <h3>{title}</h3>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardModal;
