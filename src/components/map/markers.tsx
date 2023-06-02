import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';
import iconLocation from '../../assets/images/icons/icon-location.svg';
import logo from '../../assets/images/ecotuc-logo.png'

import './marker.module.scss'

const Markers: React.FC = () => {
  const customIcon = icon({
    iconUrl: iconLocation,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <>
      <Marker position={[-26.814948577781838, -65.25984861480238]} icon={customIcon}>
        <Popup >
        <div>
            <h3>Contenedor 1</h3>
            <p>Esteban Echeverria 346</p>
            <img src={logo} />
          </div>
        </Popup>
      </Marker>
    </>
  );
};

export default Markers;
