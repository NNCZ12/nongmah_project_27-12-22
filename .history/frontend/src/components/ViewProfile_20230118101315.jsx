import { React, useState } from "react";

function ViewProfile(props) {
  const { profileData } = props;


  return <div>
    <div className="rounded-full bg-${}"><img src={`http://localhost:8000/storage/dog_profiles/image/${profileData.image}`} alt="" className="h-52 mx-auto" /></div>
    <p>Name:{profileData.name}</p></div>;
}

export default ViewProfile;
