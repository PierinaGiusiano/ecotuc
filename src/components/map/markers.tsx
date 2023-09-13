import React from "react";
import { Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";

import iconLocation from "../../assets/images/icons/icon-location.svg";
import logo from "../../assets/images/contenedor.jpg";

import styles from "./marker.module.scss";

const Markers: React.FC = () => {
  const locations = [
    // San Miguel de Tucuman
    { lat: -26.81923903249609, lng: -65.20276780022984, 
      name: 'Plaza Urquiza', 
      address: 'Av. Sarmiento y 25 de Mayo', 
      schedule: 'Miércoles 13:00 a 15:00 y Viernes de 17:00 a 20:00',
      descripcion:"Residuos Secos: Papel, cartón, plástico, vidrios,latas y ecobotellas"},

    { lat: -26.836655557238018, lng: -65.20531235883719, 
      name: 'Plaza Yrigoyen', 
      address: 'General Paz y 9 de Julio', 
      schedule: "Lunes de 9:00 a 12:00 y Viernes de 8:30 a 12:00",
      descripcion:"Residuos Secos: Papel, cartón, plástico, vidrios,latas y ecobotellas"},

    { lat: -26.838906900547897, lng: -65.2107546934997, 
      name: 'Plaza San Martín', 
      address: 'Lavalle y Chacabuco', 
      schedule: "Miércoles de 9:00 a 12:00",
      descripcion:"Residuos Secos: Papel, cartón, plástico, vidrios,latas y ecobotellas"},
      
    { lat: -26.82144901866136, lng: -65.21129693011511, 
      name: 'Plaza Alberdi', 
      address: 'Santiago del Estero y Catamarca', 
      schedule: "Viernes de 9:00 a 12:00",
      descripcion:"Residuos Secos: Papel, cartón, plástico, vidrios,latas y ecobotellas"},

    { lat: -26.827131131703762, lng: -65.22246153297797, 
      name: 'Ecopunto en Parque Avellaneda', 
      address: 'Esq. Mate de Luna y Asuncion ', 
      schedule: "Lunes de 14:00 a 17:00",
      descripcion:"Residuos Secos: Papel, cartón, plástico, vidrios,latas y ecobotellas"},

    { lat: -26.824237966020043, lng: -65.19303081064902, 
      name: 'Direccion General de Salud Ambiental', 
      address: 'Honduras 138', 
      schedule: "Lunes a Jueves de 7:00 a 16:00 y Viernes de 7:00 a 13:00",
      descripcion:"Residuos Secos: Papel, cartón, plástico, vidrios,latas y ecobotellas"},

    { lat: -26.828944199561462, lng: -65.19612386708849, 
      name: 'Plaza San Miguel', 
      address: 'Av. Avellaneda 295', 
      schedule: "Lunes a Viernes de 8:30 a 12:30",
      descripcion:"Residuos Secos: Papel, cartón, plástico, vidrios,latas y ecobotellas"},

    { lat: -26.81750958119629, lng: -65.20658689386556, 
      name: 'Seminario Mayor', 
      address: 'Av. Sarmiento 841', 
      schedule: "Lunes a Viernes de 9:00 a 16:00",
      descripcion:"Residuos Secos: Papel, cartón, plástico, vidrios,latas y ecobotellas"},

    { lat: -26.81536612562889, lng: -65.2246126965584,  
      name: 'Nave Tierra', 
      address: 'Santa Fe 1974', 
      schedule: "Lunes a Viernes de 9:00 a 14:00 hs.",
      descripcion:"Residuos Electrónicos: aquellos aparátos eléctricos y electrónicos que dejan de funcionar o simplemente se volvieron obsoletos "},

    //Yerba Buena
    { lat: -26.806684469543082, lng: -65.2684208487819, 
      name: 'Reciclaje Yerba Buena', 
      address: 'Republica del Libano 810', 
      schedule: "Lunes a Viernes de 8:30 a 12:00 y de 15:30 a 18:30",
      descripcion:"Residuos Secos: Papel, cartón, plástico, vidrios,latas y ecobotellas / Aceite Usado"},
      
    { lat: -26.807686552186905, lng: -65.30500172681228, 
      name: 'Reciclaje Yerba Buena', 
      address: 'Imbaud y Fleming', 
      schedule: "Todos los dias de 8:00 a 20:00",
      descripcion:"Residuos Secos: Papel, cartón, plástico, vidrios,latas y ecobotellas"},

    // Tafi Viejo
    { lat: -26.77665552834702, lng: -65.22585157709673, 
      name: 'Punto Verde Lomas de Tafí', 
      address: 'Av. Raya y Cabo Quipildor', 
      schedule: "24 hs",
      descripcion:"Residuos Secos: Papel, cartón, plástico, vidrios,latas y ecobotellas / Aceite Usado"},

    { lat: -26.732109940225474, lng: -65.25697876354783,
      name: 'Casco Fundacional de la Ciudad de Tafí Viejo', 
      address: 'Uttinger y 9 de Julio', 
      schedule: "24 hs",
      descripcion:"Residuos Secos: Papel, cartón, plástico, vidrios,latas y ecobotellas / Aceite Usado"},

    { lat: -26.738185358306453, lng: -65.26770263176967,
      name: 'Sector oeste del Casco Fundacional', 
      address: 'Paraguay y San Juan', 
      schedule: "24 hs",
      descripcion:"Residuos Secos: Papel, cartón, plástico, vidrios,latas y ecobotellas"},

    { lat: -26.721445141106113, lng: -65.25344917026206, 
      name: 'Sector norte del Casco Fundacional', 
      address: 'Laprida y Jose Colombres', 
      schedule: "24 hs",
      descripcion:"Residuos Secos: Papel, cartón, plástico, vidrios,latas y ecobotellas / Aceite Usado"},
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
        <Marker
          key={index}
          position={[location.lat, location.lng]}
          icon={customIcon}
        >
          <Popup className={styles.popup}>
            <div>
              <h3>{location.name}</h3>
              <p>{location.address}</p>
              <p>{location.schedule}</p>
              <p>{location.descripcion}</p>
              <img src={logo} style={{ maxWidth: '100%', height: 'auto' }} alt='Container' />
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default Markers;
