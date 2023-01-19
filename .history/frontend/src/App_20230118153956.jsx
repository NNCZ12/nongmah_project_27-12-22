import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./pages/Welcome";
import { Routes, Route } from "react-router-dom";
import MainScreen from ./pages/MainScreen';


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/main" element={<ProfileList />} />
        {/* <Route path="/maps" element={<Maps />} /> */}
      </Routes>
    </>
  );
}

export default App;
