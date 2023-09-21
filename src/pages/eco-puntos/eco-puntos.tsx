import React, { useState } from "react";
import cx from "classnames";

import Layout from "../../components/layout/layout";
import MapView from "../../components/map/map-view";

import expand from "../../assets/images/icons/icon-expand.svg";

import styles from "./eco-puntos.module.scss";

const EcoPuntos = () => {
  const [fullscreen, setFullscreen] = useState(false);

  const toggleMap = () => {
    setFullscreen((prevFullscreen) => !prevFullscreen);
  };

  return (
    <Layout>
      <div className={styles.section}>
        <h1>
          ¡Encontrá el punto verde o centro de reciclaje más cercano! 🌏🌱
        </h1>
      </div>
      <div className={cx(styles.mapContainer, fullscreen && styles.fullscreen)}>
        <div className={cx(styles.message, fullscreen && styles.messageFull)}>
          <h2>Pantalla completa para mejor experiencia🪄</h2>
        </div>
        <img
          src={expand}
          className={styles.expand}
          onClick={toggleMap}
          alt="fullScreen"
        />
        <MapView />
      </div>
    </Layout>
  );
};

export default EcoPuntos;
