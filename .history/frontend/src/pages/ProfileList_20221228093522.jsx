import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {Container} from 'react-bootstrap'
function ProfileList() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container
      fluid
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #4d79ff, #00b0ff)",
      }}
    >

    </Container>
  )
}

export default ProfileList
