import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UploadForm from "../components/UploadForm";

import { Container } from "react-bootstrap";
function ProfileList() {
  const [show_map, setShowMap] = useState(false);
  // const [show_form, setShowForm] = useState(false);

  const handleClose = () => setShowMap(false);
  const handleShow = () => setShowMap(true);

  return (
    <>
    {/* Gradient Container */}
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
        {/* Map Modal */}
        <Button variant="primary" onClick={handleShow}>
          Choose Location
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          fullscreen={true}
        >
          <Modal.Header closeButton>
            <Modal.Title>Choose Location in Map</Modal.Title>
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
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </Container>
        
      {/* Upload Button */}
      <button  className="bottom-0 position-fixed w-[100%] rounded-none bg-green-300 py-3 shadow-lg text-black">อัปโหลดข้อมูลน้องหมา</button>
    </>
  );
}

export default ProfileList;
