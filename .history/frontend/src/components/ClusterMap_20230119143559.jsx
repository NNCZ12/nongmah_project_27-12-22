import { React, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "react-bootstrap";
import image from "../assets/marker.png";

function ClusterMap({ handleGetLatLon }) {
  return (
    <div>
      <Button className="bg-orange-600 text-black ">ใช้ตำแหน่งปัจจุบัน</Button>
    </div>
  );
}

export default ClusterMap;
// ReactDOM.render(<Maps/>, document.getElementById('maps'));
