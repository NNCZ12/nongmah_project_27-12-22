import { React, useState } from "react";
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

function Maps() {
  const [position , setPosition] = useState(null);
  const center = [14.875238941094505, 102.01287487655536];
  const zoom = 15;
  const HandleClickMap = () => {
    const map = useMapEvents({
      click(e) {setPosition(e.latlng)},
    });
    return null;
  };
  return ( <div></div>
    <MapContainer
      style={{ height: "100vh" }}
      center={center}
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></TileLayer>
      <HandleClickMap />
      <Marker position={center}>
        <Popup>You are here</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Maps;
// ReactDOM.render(<Maps/>, document.getElementById('maps'));
