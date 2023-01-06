import React from "react";
import Welcome from "./pages/Welcome";
import {  Routes, Route} from 'react-router-dom';
import ProfileList from './pages/ProfileList';

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Welcome />} />
          <Route path="/profile" element={<ProfileList />} />
      </Routes>
    </>
  )
}

export default App
