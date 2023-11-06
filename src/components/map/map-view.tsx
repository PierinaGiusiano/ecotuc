import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Markers from "./markers";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  return (
    <MapContainer
      center={[-26.81923903249609, -65.20276780022984]}
      zoom={15}
      minZoom={12}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "100%", zIndex: 10 }}
      bounceAtZoomLimits={false}
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