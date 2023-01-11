import { React, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import image from "../assets/marker.png";
import ProfileForm from "./ProfileForm";


function Maps() {

  let markerIcon = L.icon({
    iconUrl: image,
    iconSize:[40,40]
  });
  const [position, setPosition] = useState(null);
  const center = [14.875238941094505, 102.01287487655536];
  const zoom = 15;
  const HandleClickMap = () => {
    const map = useMapEvents({
      click(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng);
      },
    });
    return position == null ? null : <Marker icon={markerIcon} position={position}></Marker>;
  };

  return (
    
     
      

    
  );
}

export default Maps;
// ReactDOM.render(<Maps/>, document.getElementById('maps'));
