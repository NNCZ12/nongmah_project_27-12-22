import {React,useState} from 'react'

function ViewProfile() {


  return (
    <div>
       <img src={`http://localhost:8000/storage/dog_profiles/image/${clickedImg}`} alt="" />
    </div>
  )
}

export default ViewProfile
