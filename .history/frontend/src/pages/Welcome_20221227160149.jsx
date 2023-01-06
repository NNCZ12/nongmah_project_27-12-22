import React from 'react'
import {  useNavigate } from "react-router-dom";
function Welcome() {
 const navigate = useNavigate();
  return (
    <div>
      <h1 className='mx-auto'>Welcome</h1>
      <button className='bg-white text-black' onClick={()=> navi}>go to profile</button>
    </div>
  )
}

export default Welcome
