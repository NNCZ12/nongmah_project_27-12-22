import React from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import { statesData } from "./data";


const center = [14.884437759012686, 102.02033322732629];
function Maps() {
  return (
    <MapContainer center = {center} zoom={10}
    style={{ width: '100vw', height: '100vh' }}>
        <TileLayer ></TileLayer>
    </MapContainer>
  );
}

export default Maps;
