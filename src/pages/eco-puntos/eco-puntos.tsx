import React from "react";

import Layout from "../../components/layout/layout";

import MapView from '../../components/map/map-view'
import styles from './eco-puntos.module.scss'

const EcoPuntos = () => {
  return (
    <Layout>
      <h1>EcoPUNTO</h1>
      <div className={styles.mapContainer}>
        <MapView />
      </div>
    </Layout>
  );
};

export default EcoPuntos;
