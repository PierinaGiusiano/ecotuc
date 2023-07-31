import React from "react";

import Layout from "../../components/layout/layout";

import MapView from "../../components/map/map-view";
import styles from "./eco-puntos.module.scss";

const EcoPuntos = () => {
  return (
    <Layout>
      <div className={styles.section}>
        <h1>ECO Puntos</h1>
        <p>
          Aquí encontrarás los puntos verdes o centros de reciclaje que
          funcionan en la ciudad de San Miguel de Tucumán.
        </p>
      </div>
      <div className={styles.mapContainer}>
        <MapView />
      </div>
    </Layout>
  );
};

export default EcoPuntos;
