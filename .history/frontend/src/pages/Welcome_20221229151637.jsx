import React from 'react'
import {  useNavigate } from "react-router-dom";
import image from '../assets/doglogo.png'


function Welcome() {
 const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <img src={image} className="h-30 w-16" alt="Logo" /> <br />
      <h1 className="text-2xl font-bold text-center">NONGMAH</h1>  <br />
      <button className='bg-orange-200 text-black' onClick={()=> navigate("/profilelist")}>go to profile</button>
    </div>
      
    
  )
}

export default Welcome
