import React from 'react'
import {  useNavigate } from "react-router-dom";
import image from '../assets/doglogo.png'
import { Col,Row } from 'react-bootstrap';


function Welcome() {
 const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Col >
        <Row>
      <img src={image} className="w-40 items-center" alt="Logo" /> </Row>
      <Row><div className="text-2xl font-bold text-center">NONGMAH</div> </Row>
      <button className='bg-orange-200 text-black' onClick={()=> navigate("/profilelist")}>go to profile</button>
      </Col>
      </div>
   
      
    
  )
}

export default Welcome
