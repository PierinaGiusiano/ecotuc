import React from "react";

import MenuLink from "../menu-link/menu-link";

import ecotuc from "../../assets/images/ecotuc-logo.png";
import home from "../../assets/images/icons/icon-home.svg";
import pin from "../../assets/images/icons/icon-pin.svg";
import book from "../../assets/images/icons/icon-book.svg";

import styles from "./nav-bar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={ecotuc} alt="ecotuc" />
      </div>
      <div className={styles.iconContainer}>
      <div className="inicio">
        <MenuLink url="/home" title="Inicio" iconUrl={home}/>
      </div>
        <MenuLink url="/ecopuntos" title="Ecopuntos" iconUrl={pin}/>
        
        <div className="informacion">
          <MenuLink url="/informacion" title="Información" iconUrl={book}/>
        </div>  
      
      </div>
    </div>
  );
};

export default NavBar;