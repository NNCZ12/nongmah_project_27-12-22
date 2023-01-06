import React from 'react'
import {  useNavigate } from "react-router-dom";
import image from '../assets/doglogo.png'
import { Col,Row } from 'react-bootstrap';


function Welcome() {
 const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Col>
      <img src={image} className="w-40" alt="Logo" /> </Col>
      <Col><div className="text-2xl font-bold text-center">NONGMAH</div> 
      <button className='bg-orange-200 text-black' onClick={()=> navigate("/profilelist")}>go to profile</button>
    </div>
      
    
  )
}

export default Welcome
