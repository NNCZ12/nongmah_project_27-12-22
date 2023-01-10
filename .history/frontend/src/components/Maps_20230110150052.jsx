import React from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import { statesData } from "./data";
import style from './'


const center = [14.88493546272212, 102.02016156595998];
function Maps() {
  return (
    <MapContainer center = {center} zoom={15}
    style={{ width: '100vw', height: '100vh' }}>
        <TileLayer url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=4zMBmqW6B4rfQvK5O66m" attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'/>
    </MapContainer>
  );
}

export default Maps;
