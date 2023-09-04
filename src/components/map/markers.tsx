import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';
import iconLocation from '../../assets/images/icons/icon-location.svg';
import logo from '../../assets/images/contenedor.jpg';

import './marker.module.scss';

const Markers: React.FC = () => {
  const locations = [
    { lat: -26.81923903249609, lng: -65.20276780022984, 
      name: 'Plaza Urquiza', 
      address: 'Av. Sarmiento y 25 de Mayo', 
      schedule: 'Miércoles 13:00 a 15:00 y Viernes de 17:00 a 20:00'},

    { lat: -26.836655557238018, lng: -65.20531235883719, 
      name: 'Plaza Yrigoyen', 
      address: 'General Paz y 9 de Julio', 
      schedule: "Lunes de 9:00 a 12:00 y Viernes de 8:30 a 12:00"},

    { lat: -26.838906900547897, lng: -65.2107546934997, 
      name: 'Plaza San Martín', 
      address: 'Lavalle y Chacabuco', 
      schedule: "Miércoles de 9:00 a 12:00"},
      
    { lat: -26.82144901866136, lng: -65.21129693011511, 
      name: 'Plaza Alberdi', 
      address: 'Santiago del Estero y Catamarca', 
      schedule: "Viernes de 9:00 a 12:00"},

    { lat: -26.827131131703762, lng: -65.22246153297797, 
      name: 'Ecopunto en Parque Avellaneda', 
      address: 'Esq. Mate de Luna y Asuncion ', 
      schedule: "Lunes de 14:00 a 17:00"},


       
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
