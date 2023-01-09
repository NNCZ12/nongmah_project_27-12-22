import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./pages/Welcome";
import { Routes, Route } from "react-router-dom";
import ProfileList from "./pages/ProfileList";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import TestMaps from "./pages/TestMaps";

function App() {
  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return <Spinner />;
      case Status.FAILURE:
        return <h1>Error</h1>;
      case Status.SUCCESS:
        return <T />;
    }
  };
  return (
    <>
      <Wrapper apiKey={"YOUR_API_KEY"} render={render} />;
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/profilelist" element={<ProfileList />} />
      </Routes>
    </>
  );
}

export default App;
