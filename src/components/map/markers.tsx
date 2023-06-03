import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';
import iconLocation from '../../assets/images/icons/icon-location.svg';
import logo from '../../assets/images/contenedor.jpg';

import './marker.module.scss';

const Markers: React.FC = () => {
  const locations = [
    { lat: -26.81923903249609, lng: -65.20276780022984, name: 'Plaza Urquiza', address: 'avenida Sarmiento y 25 de Mayo', schedule: "miércoles, de 13 a 15; y viernes, de 17 a 20"},
    { lat: -26.836655557238018, lng: -65.20531235883719, name: 'Plaza Yrigoyen', address: 'General Paz y 9 de Julio', schedule: "lunes, de 9 a 12; y viernes de 8.30 a 12"},
    { lat: -26.838906900547897, lng: -65.2107546934997, name: 'Plaza San Martín', address: 'Lavalle y Chacabuco', schedule: "miércoles, de 9 a 12"},
    { lat: -26.82144901866136, lng: -65.21129693011511, name: 'Plaza Alberdi', address: 'Santiago del Estero y Catamarca', schedule: "viernes, de 9 a 12"},
  ];

  const customIcon = icon({
    iconUrl: iconLocation,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <>
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]} icon={customIcon}>
          <Popup>
            <div>
              <h3>{location.name}</h3>
              <p>{location.address}</p>
              <p>{location.schedule}</p>
              <img src={logo} style={{ maxWidth: '100%', height: 'auto' }} alt='Container' />
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default Markers;
