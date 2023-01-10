import React from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import { statesData } from "./data";


const center = [14.88493546272212, 102.02016156595998];
function Maps() {
  return (
    <MapContainer center = {center} zoom={15}
    style={{ width: '100vw', height: '100vh' }}>
        <TileLayer url="https://api.maptiler.com/maps/bfe7a124-b8f7-4ee9-8567-d24506796012/?key=4zMBmqW6B4rfQvK5O66m#1.0/0.00000/0.00000" attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'/>
    </MapContainer>
  );
}

export default Maps;
