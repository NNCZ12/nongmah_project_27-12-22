import { React, useEffect, useCallback, useState, useMemo } from "react";
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

const center = [14.875238941094505, 102.01287487655536];
const zoom = 15;
const HandleClickMap = () => {
  const map = useMapEvents({
    click() {},
  });
  return null;
};

function Maps(){
  return(
    <MapContainer style={{height}}></MapContainer>
  );
}

export default Maps;
// ReactDOM.render(<Maps/>, document.getElementById('maps'));
