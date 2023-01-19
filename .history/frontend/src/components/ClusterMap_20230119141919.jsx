import { React, useState} from "react";
import {
  MapContainer,
  TileLayer,
  Marker,

  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {Button} from 'react-bootstrap';
import image from "../assets/marker.png";



function Maps( {handleGetLatLon}) {
  
   return latlon == null? null : <Marker position={latlon} icon={markerIcon}></Marker>
  };

  
  return (
    <div>
        <Button></Button>
      
      
    </div>
  );
}

export default ClusterMap;
// ReactDOM.render(<Maps/>, document.getElementById('maps'));
