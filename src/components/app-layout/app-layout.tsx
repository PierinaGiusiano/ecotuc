import React, { ReactNode } from 'react';

import styles from "./app-layout.module.scss";

type AppLayoutProps = {
    children: ReactNode;
}

const AppLayout = ({children}: AppLayoutProps) => {
  return (
    <div className={styles.appLayout}>{children}</div>
  )
}

export default AppLayout