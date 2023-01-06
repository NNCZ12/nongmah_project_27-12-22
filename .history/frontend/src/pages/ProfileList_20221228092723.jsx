import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {Container} from 'react-bootstrap'
function ProfileList() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function getCurrentPosition() {
    const [currentPosition, setCurrentPosition] = useState(null);

    const getCurrentPosition = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setCurrentPosition({ latitude, longitude });
        },
        (error) => {
          console.error(error);
        }
      );
    };
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
