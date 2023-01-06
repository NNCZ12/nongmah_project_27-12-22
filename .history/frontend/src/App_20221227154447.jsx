import React from "react";
import Welcome from "./pages/Welcome";
import {  Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Welcome />} />
          <Route path="/pro" element={<Main />} />
          
      </Routes>
    </>
  )
}

export default App
