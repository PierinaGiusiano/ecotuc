import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';
import iconLocation from '../../assets/images/icons/icon-location.svg';

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
        <Popup>
          Contenedor 1. <br/> Esteban Echeverria 346
        </Popup>
      </Marker>
    </>
  );
};

export default Markers;
