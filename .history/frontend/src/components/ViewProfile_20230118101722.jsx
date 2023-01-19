import { React, useState } from "react";

function ViewProfile(props) {
  const { profileData } = props;

  return (
    <div>
      <div
        className="rounded-full h-52 w-52"
        style={{ backgroundColor: profileData.color }}
      >
        <img
          src={`http://localhost:8000/storage/dog_profiles/image/${profileData.image}`}
          alt=""
          className="h-48 mx-auto "
        />
      </div>
      <p>Name:{profileData.name}</p>
    </div>
  );
}

export default ViewProfile;
