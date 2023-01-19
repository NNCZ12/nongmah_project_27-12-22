import { React, useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";

function ViewProfile(props) {
  const { profileData } = props;

  return (
    <div>
      <div className="fixed top-0 h-32 bg-black z-1 relative"></div>
      <div className="pt-10">
        <div
          className="rounded-full mx-auto h-52 w-52 d-flex justify-content-center align-items-center z-0 relative"
          style={{ backgroundColor: profileData.color }}
        >
          <img
            src={`http://localhost:8000/storage/dog_profiles/image/${profileData.image}`}
            alt=""
            className="h-44 rounded-full item-center"
          />
        </div>
      </div>

      <p>Name:{profileData.name}</p>
    </div>
  );
}

export default ViewProfile;
