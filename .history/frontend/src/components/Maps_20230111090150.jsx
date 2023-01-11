import {React,useEffect,useCallback} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import { statesData } from "./data";

const center = [14.875238941094505, 102.01287487655536];
function Maps({map}) {
  const [position, setPosition] = useState(() => map.getCenter())

  const onClick = useCallback(() => {
    map.setView(center, zoom)
  }, [map])

  const onMove = useCallback(() => {
    setPosition(map.getCenter())
  }, [map])

  useEffect(() => {
    map.on('move', onMove)
    return () => {
      map.off('move', onMove)
    }
  }, [map, onMove])
  return (
    <MapContainer center={center} zoom={15} scrollWheelZoom={true} style={{height:'100vh'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Maps;
