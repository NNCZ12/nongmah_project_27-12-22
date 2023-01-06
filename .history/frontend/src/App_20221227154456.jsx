import React from "react";
import Welcome from "./pages/Welcome";
import {  Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Welcome />} />
          <Route path="/profile" element={<Profile />} />
          
      </Routes>
    </>
  )
}

export default App
