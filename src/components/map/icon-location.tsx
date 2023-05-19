import L from 'leaflet'

export const IconLocation = L.icon({
    iconUrl: require('../../assets/images/icon.png'),
    iconRetinaUrl: require('../../assets/images/icon.png'),
    iconAnchor: undefined,
    shadowUrl: undefined,
    shadowSize: undefined,
    iconSize: [35, 35],
    className: "leaflet-venue-icon"
})
