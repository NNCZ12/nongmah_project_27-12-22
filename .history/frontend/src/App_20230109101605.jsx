import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./pages/Welcome";
import { Routes, Route } from "react-router-dom";
import ProfileList from "./pages/ProfileList";

import TestMaps from "./pages/TestMaps";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/profilelist" element={<ProfileList />} />
        <Route path="/testmaps" element={<ProfileList />} />

      </Routes>
    </>
  );
}

export default App;
