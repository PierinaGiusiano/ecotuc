import React, { ReactNode } from "react";
import cx from "classnames";
import close from "../../assets/images/icons/icon-close.svg";
import styles from "./card-modal.module.scss";

type ModalProps = {
  title: string;
  image?: string;
  children: ReactNode;
  isOpen?: boolean;
  category?: boolean;
  onClose?: () => void;
  link?: string | null;
};

const CardModal = ({
  title,
  image,
  children,
  category,
  isOpen,
  onClose,
  link
}: ModalProps) => {
  return (
    <div
      className={styles.modalWrapper}
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div className={cx(styles.modalContent)}>
        <img
          src={close}
          width={24}
          height={24}
          className={styles.closeButton}
          onClick={onClose}
          alt="close"
        />
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.imageWrapper}>
          <img
            src={image}
            className={cx(styles.modalImage, category && styles.categoryImage)}
            alt={title}
          />
        </div>
        <div className={styles.content}>{children}</div>
        {
          link &&
          <span><a className={styles.link} href={link} target="blank">Podes aprender más aquí</a>💫</span>
        }
      </div>
    </div>
  );
};

export default CardModal;
