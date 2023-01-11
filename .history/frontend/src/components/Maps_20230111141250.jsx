import { React,  useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  userMapEvents,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import image from "../assets/marker.png";



function Maps(){

  return(
    <MapContainer style={{height:"100vh"}} center={center} zoom={15} scrollWheelZoom={true}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
      <HandleClickMap/>
      <Marker position={center}>
      <Popup>You are here</Popup>
    </Marker>
    </MapContainer>
  );
}

export default Maps;
// ReactDOM.render(<Maps/>, document.getElementById('maps'));
