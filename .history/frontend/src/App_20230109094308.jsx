import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from "./pages/Welcome";
import {  Routes, Route} from 'react-router-dom';
import ProfileList from './pages/ProfileList';
import { Wrapper, Status } from "@googlemaps/react-wrapper";


function App() {
  const render = (status: Status): ReactElement => {
    if (status === Status.FAILURE) return <ErrorComponent />;
    return <Spinner />;
  };
  return (
    <>
    <Routes>
      <Route index element={<Welcome />} />
          <Route path="/profilelist" element={<ProfileList />} />
      </Routes>
    </>
    <Wrapper apiKey={"AIzaSyDB0mpQP-2ZRabGNQgHxtx457MIUeFU6JM"} render={render}>
    <MyMapComponent />
  </Wrapper>
  )
}

export default App
