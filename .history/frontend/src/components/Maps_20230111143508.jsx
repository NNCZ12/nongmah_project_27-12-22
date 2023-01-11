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

function Maps() {
  let markerIcon = L.icon({
    iconUrl:process.env.PUBLIC_URL
  })
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
    return position == null ? null : <Marker  position={position}></Marker>;
  };
  return (
    <div>
      {" "}
      {position == null ? null : (
        <>
          <p>Lat : {position.lat}</p>
          <p>Lon : {position.lng}</p>
        </>
      )}
      <MapContainer
        style={{ height: "100vh" }}
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></TileLayer>
        <HandleClickMap />
      </MapContainer>
    </div>
  );
}

export default Maps;
// ReactDOM.render(<Maps/>, document.getElementById('maps'));
