import { React, useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";

function ViewProfile(props) {
  const { profileData } = props;

  return (
    <div>
      <Container
                fluid
                className="fixed top-0 h-32 bg-black z-0 relative"
              ></Container>
      <div className="pt">
      <div
        className="rounded-full mx-auto h-52 w-52 d-flex justify-content-center align-items-center"
        style={{ backgroundColor: profileData.color }}
      >
        <img
          src={`http://localhost:8000/storage/dog_profiles/image/${profileData.image}`}
          alt=""
          className="h-44 rounded-full item-center"
        />
      </div></div>
      <p>Name:{profileData.name}</p>
    </div>
  );
}

export default ViewProfile;
