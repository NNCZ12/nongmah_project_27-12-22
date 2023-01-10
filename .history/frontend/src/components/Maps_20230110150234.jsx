import React from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import { statesData } from "./data";
import style from '../style.json';


const center = [14.88493546272212, 102.02016156595998];
function Maps() {
  return (
    <MapContainer center = {center} zoom={15}
    style={style} ma>
        
    </MapContainer>
  );
}

export default Maps;
