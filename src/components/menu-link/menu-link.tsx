import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import cx from "classnames";

import styles from "./menu-link.module.scss";

type MenuLinkProps = {
  url: string;
  iconUrl: string;
  title: string;
}

const MenuLink = ({ url, iconUrl, title }: MenuLinkProps) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(location.pathname === url);
  }, [location.pathname, url]);

  return (
    <Link to={url} className={cx(styles.menuLink, isActive && styles.active)}>
      <div className={styles.iconContainer}>
        <img src={iconUrl} alt="icon-menu" />
      </div>
      <p>{title}</p>
    </Link>
  );
};

export default MenuLink;
