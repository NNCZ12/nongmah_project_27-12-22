import {React,useState} from 'react'

function ViewProfile({clickedImg,setClickedImg}) {
  return (
    <div>
       <img src={clickedImg} alt="" />
    </div>
  )
}

export default ViewProfile
