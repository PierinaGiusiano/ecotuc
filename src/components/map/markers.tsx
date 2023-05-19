import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { IconLocation } from './icon-location';

const Markers: React.FC = () => {
  return (
    <>
      <Marker position={[-26.814948577781838, -65.25984861480238]} icon={IconLocation}>
        <Popup>
          Contenedor 1. <br/> Esteban Echeverria 346
        </Popup>
      </Marker>
    </>
  );
};

export default Markers;