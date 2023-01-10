import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { statesData } from "./data";

const center = [14.88493546272212, 102.02016156595998];
const position = [14.88493546272212, 102.02016156595998]
function Maps() {
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Maps;
