import React from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';

const TestMaps = () => {
  const [places, setPlaces] = React.useState([]);

  const searchPlaces = () => {
    const API_KEY = 'AIzaSyA0yTGha-a5-qvZSrKQM1m4yN1WsTneocc';
    const location = '40.730610, -73.935242'; // New York, NY
    const radius = 1000; // 1 km
    const type = 'restaurant';

    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=${type}&key=${API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setPlaces(data.results))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <button onClick={searchPlaces}>Search for places</button>
      {places.map((place) => (
        <div key={place.id}>
          <h2>{place.name}</h2>
          <p>{place.vicinity}</p>
        </div>
      ))}
    </div>
  );
};

export default TestMaps;