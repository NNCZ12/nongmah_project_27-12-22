import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./pages/Welcome";
import { Routes, Route } from "react-router-dom";
import ProfileList from "./pages/ProfileList";
import Maps from "./components/Maps";
import { useRef, useEffect } from "react";


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/profilelist" element={<ProfileList />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
    </>
  );
}

export default App;


exconst AutoComplete = () => {
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
   componentRestrictions: { country: "ng" },
   fields: ["address_components", "geometry", "icon", "name"],
   types: ["establishment"]
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
