import React from 'react';
import utn from "../../assets/images/utn-logo.png";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.logo}>
            <img className={styles.utn} src={utn} alt="utn logo" />
        </div>
        <div className={styles.name}>
            <p>Giusiano Pierina</p>
            <p>Hero Luis Carlos</p>
        </div>
    </div>
  )
}

export default Footer;