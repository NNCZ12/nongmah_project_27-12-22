import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import { statesData } from "./data";

const center = [14.877592755191614, 102.01399067562456];
const position = [14.880579055067223, 102.01853970199674]
function Maps() {
  return (
    <MapContainer center={center} zoom={15} scrollWheelZoom={true} style={{height:'100vh'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  );
}

export default Maps;
