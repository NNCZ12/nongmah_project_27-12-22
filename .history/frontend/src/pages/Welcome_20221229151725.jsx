import React from 'react'
import {  useNavigate } from "react-router-dom";
import image from '../assets/doglogo.png'


function Welcome() {
 const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <img src={image} className="w-40" alt="Logo" /> <br />
      <d className="text-2xl font-bold text-center">NONGMAH</h1>  <br />
      <button className='bg-orange-200 text-black' onClick={()=> navigate("/profilelist")}>go to profile</button>
    </div>
      
    
  )
}

export default Welcome
