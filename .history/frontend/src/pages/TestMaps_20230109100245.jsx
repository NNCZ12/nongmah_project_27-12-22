import React from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import TestMaps from './../../../.history/frontend/src/pages/TestMaps_20230109092237';

function TestMaps({
    center,
    zoom,
  }: {
    center: google.maps.LatLngLiteral;
    zoom: number;
  }) {
    const ref = useRef();
  
    useEffect(() => {
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
    });
  
    return <div ref={ref} id="map" />;
  }