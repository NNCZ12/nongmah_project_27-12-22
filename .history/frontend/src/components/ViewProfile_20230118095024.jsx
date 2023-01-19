import { React, useState } from "react";

function ViewProfile(props) {
  const { profileData } = props;

  console.log(profileData);
  return <div>
    <div><img  src={`http://localhost:8000/storage/dog_profiles/image/${profileData.image}`} alt="" /></div>
    <p>Name:{profileData.name}</p></div>;
}

export default ViewProfile;
