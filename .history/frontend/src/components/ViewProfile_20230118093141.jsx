import { React, useState } from "react";

function ViewProfile(sent) {
  const [profile, setProfile] = useState([]);

  setProfile(sentProfile);
  console.log(profile);
  return <div>{profile.map((item, index) => (
    <div key={index} className="inline-flex p-3">
      <img
        width="200"
        src={`http://localhost:8000/storage/dog_profiles/image/${item.image}`}
        alt="" 
      />
      <p>Name: {item.name}</p>
    </div> 
  )) 
}</div>;
}

export default ViewProfile;
