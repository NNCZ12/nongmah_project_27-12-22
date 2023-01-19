import { React, useState } from "react";

function ViewProfile(props) {
  const { profileData } = props;

  console.log(profileData);
  return <div>
    <div><img src={} alt="" /></div>
    <p>Name:{profileData.name}</p></div>;
}

export default ViewProfile;
