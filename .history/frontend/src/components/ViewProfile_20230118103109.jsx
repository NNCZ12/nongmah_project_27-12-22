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
              
      <p>Name:{profileData.name}</p>
    </div>
  );
}

export default ViewProfile;
