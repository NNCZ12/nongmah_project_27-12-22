import React from "react";
import { useRef, useEffect } from "react";
import{ Au}
// import "./styles.css";

const Maps = () => {
  
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    componentRestrictions: { country: "ng" },
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"],
  };
  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
  }, []);
  return (
    <div>
      <label>enter address :</label>
      <input ref={inputRef} />
    </div>
  );
};
export default Maps;
