import * as React from "react";
import { createRoot } from "react-dom/client";
import { Wrapper } from "@googlemaps/react-wrapper";
import { createCustomEqual } from "fast-equals";
import { isLatLngLiteral } from "@googlemaps/typescript-guards";

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
        return <TestMaps />;
    }
  };
  return (
    <>
      <Wrapper
        apiKey={"AIzaSyDB0mpQP-2ZRabGNQgHxtx457MIUeFU6JM"}
        render={render}
      >
        <TestMaps />
      </Wrapper>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/profilelist" element={<ProfileList />} />
      </Routes>
    </>
  );
}

export default App;
