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
      <div>
        <button onClick={getCurrentPosition}>Get Current Position</button>
        {currentPosition && (
          <p>
            Latitude: {currentPosition.latitude}, Longitude:{" "}
            {currentPosition.longitude}
          </p>
        )}
      </div>
    </Container>
  )
}
function handleShow(breakpoint) {
  setFullscreen(breakpoint);
  setShow(true);
}

return (
  <>
    {values.map((v, idx) => (
      <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
        Full screen
      </Button>
    ))}
    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>เลือกตำแหน่งในแผนที่</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d61693.732755014666!2d102.0165!3d14.8892!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sth!2sth!4v1671588919621!5m2!1sth!2sth"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Modal.Body>
    </Modal>
  </>
);

export default ProfileList
