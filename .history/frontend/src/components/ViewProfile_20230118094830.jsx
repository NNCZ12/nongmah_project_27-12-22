import { React, useState } from "react";

function ViewProfile(props) {
  const { profileData } = props;

  console.log(profileData);
  return <div>
    di
    <p>Name:{profileData.name}</p></div>;
}

export default ViewProfile;
