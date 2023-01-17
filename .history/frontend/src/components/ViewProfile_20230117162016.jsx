import {React,useState} from 'react'

function ViewProfile({sentProfile}) {

   const [profile, setProfile] = useState([]);
 const handlerGetProfile =()=>{
    setProfile(sentProfile)
 }
  return (
    <div>
       ASD
    </div>
  )
}

export default ViewProfile
