import { React, useState, useContext } from "react";
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

function Maps( {handleCloseMap,handleGetLatLon}) {
  let markerIcon = L.icon({
    iconUrl: image,
    iconSize: [40, 40],
  });
  const center = [14.875238941094505, 102.01287487655536];
  const zoom = 15;


  const HandleGetLatLon = () => {
    const map = useMapEvents({
      click(e) {
        const latlon = e.latlng
        handleGetLatLon(latlon.lat, latlon.lng)
        
      }
    });
    return <Marker position={[latlon.la]}/>
  };

  return (
    <div>
      <div className="p-1 h-[90%]">
        <MapContainer
          style={{ height: "80vh" }}
          center={center}
          zoom={zoom}
          scrollWheelZoom={false}
          
        > 
        <HandleGetLatLon/>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          ></TileLayer>
         
        </MapContainer>
      </div>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseMap}>
          Close
        </Button>
        <Button variant="success"  onClick={()=>{handleCloseMap()}}>
          OK
        </Button>
      </Modal.Footer>
    </div>
  );
}

export default Maps;
// ReactDOM.render(<Maps/>, document.getElementById('maps'));
