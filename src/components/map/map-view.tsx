import React from 'react'

import { MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import Markers from './markers'

const MapView = () => {
  return (
    <MapContainer center={[-26.82518565212201, -65.23229581464803]} zoom={16} maxZoom={18} minZoom={15} scrollWheelZoom={true}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    <Markers />

    </MapContainer>
  )
}

export default MapView