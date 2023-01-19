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
  let markerIcon = L.icon({
    iconUrl: image,
    iconSize: [40, 40],
  });
  const center = [14.875238941094505, 102.01287487655536];
  const zoom = 15;
  const [latlon,setLatlon] =useState(null);

  const HandleGetLatLon = () => {
    const map = useMapEvents({
      click(e) {
        const latlon = e.latlng
        setLatlon(latlon);
        handleGetLatLon(latlon.lat, latlon.lng)
      }
    });
   return latlon == null? null : <Marker position={latlon} icon={markerIcon}></Marker>
  };

  
  return (
    <div>
        <Button></Button>
      
      
    </div>
  );
}

export default Maps;
// ReactDOM.render(<Maps/>, document.getElementById('maps'));
