import React from 'react'
import {  useNavigate } from "react-router-dom";
function Welcome() {
 const navigate = useNavigate();
  return (
    <div>
      <h1 className='mx-auto'>Welcome</h1>
      <button className='bg-orange-200 text-black' onClick={()=> navigate("/profile")}>go to profile</button>
    
  )
}

export default Welcome
