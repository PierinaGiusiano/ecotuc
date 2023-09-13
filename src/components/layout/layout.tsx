import React, { ReactNode } from "react";
import cx from "classnames";

import NavBar from "../nav-bar/nav-bar";
import Footer from "../footer/footer";

import styles from "./layout.module.scss";

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.navbarWrapper}>
        <NavBar />
      </div>
      <div className={cx("container")}>
        <div className={styles.children}>{children}</div>
      </div>
      <div className={styles.footerWrapper}>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
