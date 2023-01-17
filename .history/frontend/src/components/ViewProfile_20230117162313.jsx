import { React, useState } from "react";

function ViewProfile({ sentProfile }) {
  const [profile, setProfile] = useState([]);

  setProfile(sentProfile);
  console.log(profile);
  return <div></div>;
}

export default ViewProfile;
