import React from 'react'

import MapView from '../../components/map/map-view'

import styles from './home.module.scss'

const Home = () => {
  return (
    <div className={styles.leaflet}>
      <MapView />
    </div>
  )
}

export default Home