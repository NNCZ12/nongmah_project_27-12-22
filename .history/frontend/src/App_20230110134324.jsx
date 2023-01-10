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

 \
}

export default App;
