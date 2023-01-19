import { React, useState } from "react";

function ViewProfile(props) {
  const { profileData } = props;


  return <div>
    <div><img src={`http://localhost:8000/storage/dog_profiles/image/${profileData.image}`} alt="" class /></div>
    <p>Name:{profileData.name}</p></div>;
}

export default ViewProfile;
