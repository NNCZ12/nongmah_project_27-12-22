import { React, useState, } from "react";
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
import { Form, FloatingLabel, Button, Modal } from "react-bootstrap";

function Maps(props) {
  let markerIcon = L.icon({
    iconUrl: image,
    iconSize: [40, 40],
  });
  const {addPosition} 
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
    return position == null ? null : (
      <Marker icon={markerIcon} position={position}></Marker>
    );
  };

  return (
    <div >
      {" "}
      {position == null ? null : (
        <>
          <p>Lat : {position.lat}</p>
          <p>Lon : {position.lng}</p>
        </>
      )}
      <div className="p-1 h-[90%]">
      <MapContainer
        style={{ height: "80vh" }}
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></TileLayer>
        <HandleClickMap />
      </MapContainer></div>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onClick}>
          Close
        </Button>
        <Button variant="success" type="submit" onClick={() => {}}>OK</Button>
      </Modal.Footer>
    </div>
  );
}

export default Maps;
// ReactDOM.render(<Maps/>, document.getElementById('maps'));
