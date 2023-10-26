import React from "react";
import { Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";
import iconLocation from "../../assets/images/icons/icon-location.svg";
import locations from "../../JSON/location.json";
import styles from "./marker.module.scss";

const Markers: React.FC = () => {
  const customIcon = icon({
    iconUrl: iconLocation,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
  
  return (
    <>{locations.map((location, index) => (
        <Marker
          key={index}
          position={[location.lat, location.lng]}
          icon={customIcon}>
          <Popup className={styles.popup}>
            <div>
              <h3>{location.name}</h3>
              <p>{location.address}</p>
              <p>{location.schedule}</p>
              <p>{location.description}</p>
              <img src={require(`../../assets/images/${location.image}`)}
                className={styles.image}
                alt="Place"/>
            </div>
          </Popup>
        </Marker>
      ))}</>
  );
};
export default Markers;
