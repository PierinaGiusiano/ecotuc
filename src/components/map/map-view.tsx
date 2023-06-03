import React from "react";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Markers from "./markers";

const MapView = () => {
  return (
    <MapContainer
      center={[-26.81923903249609, -65.20276780022984]}
      zoom={16}
      maxZoom={18}
      minZoom={15}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "100%"}}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers />
    </MapContainer>
  );
};

export default MapView;
