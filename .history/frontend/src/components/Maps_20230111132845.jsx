import { React, useEffect, useCallback, useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import image from '../assets/marker.png'

const center = [14.875238941094505, 102.01287487655536];
const zoom = 15;

function DisplayPosition({ map }) {
  const [position, setPosition] = useState(() => map.getCenter());

  const onClick = useCallback(() => {
    map.setView(center, zoom);
  }, [map]);

  const onMove = useCallback(() => {
    setPosition(map.getCenter());
  }, [map]);

  useEffect(() => {
    map.on("move", onMove);
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove]);

  return (
    <div>
      <img src={image} alt="My Image" style={{ position: 'absolute', top: 0, left: 0 }} />
    <p>
      latitude: {position.lat.toFixed(5)}, longitude: {position.lng.toFixed(5)} {" "}
      <button className="bg-blue-400" onClick={onClick}>
        reset
      </button>
    </p>
    </div>
    
  );
}

function Maps() {
  const [map, setMap] = useState(null);
  
  const displayMap = useMemo(
    () => (
      <div>
      <img src={image} alt="My Image" style={{ position: 'absolute', top: 0, left: 0 }} />
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        ref={setMap}
        style={{ height: "100vh", width: "100wh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}></Marker>
      </MapContainer>
    ),
    []
  );

  return (
    <div>
      {map ? <DisplayPosition map={map} /> : null}
      {displayMap}
    </div>
  );
}

export default Maps;
// ReactDOM.render(<Maps/>, document.getElementById('maps'));
