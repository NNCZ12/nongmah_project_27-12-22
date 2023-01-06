import React from 'react'
import {  useNavigate } from "react-router-dom";


function Welcome() {
 const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <img src={"../assets/doglogo.png"} className="h-16 w-16" alt="Logo" /> <br />
      <h1 className="text-2xl font-bold text-center">Welcome to my site!</h1>  <br />
      <button className='bg-orange-200 text-black' onClick={()=> navigate("/profilel")}>go to profile</button>
    </div>
      
    
  )
}

export default Welcome
