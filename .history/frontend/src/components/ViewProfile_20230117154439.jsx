import {React,useState} from 'react'

function ViewProfile({clickedImg,setClickedImg}) {
  return (
    <div>
       <img src={`http://localhost:8000/storage/dog_profiles/image/${clickedImg}`} alt="" />
    </div>
  )
}

export default ViewProfile
