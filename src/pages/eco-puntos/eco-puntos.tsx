import React from "react";

import Layout from "../../components/layout/layout";

import MapView from "../../components/map/map-view";
import styles from "./eco-puntos.module.scss";

const EcoPuntos = () => {
  return (
    <Layout>
      <div className={styles.section}>
        <h1>¡Encontrá el punto verde o centro de reciclaje más cercano! 🌏🌱</h1>
      </div>
      <div className={styles.mapContainer}>
        <MapView />
      </div>
    </Layout>
  );
};

export default EcoPuntos;
