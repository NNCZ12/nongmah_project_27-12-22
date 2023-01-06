import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Container, Form, Row, Col } from "react-bootstrap";
import ProfileForm from "../components/ProfileForm";

function ProfileList(props) {
  const [show_map, setShowMap] = useState(false);
  const handleCloseMap = () => setShowMap(false);
  const handleShowMap = () => setShowMap(true);

  const [show_form, setShowForm] = useState(false);
  const handleCloseForm = () => setShowForm(false);
  const handleShowForm = () => setShowForm(true);
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
        <Button variant="primary" onClick={handleShowMap}>
          Choose Location
        </Button>

        <Modal
          show={show_map}
          onHide={handleCloseMap}
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
            <Button variant="secondary" onClick={handleCloseMap}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </Container>

      {/* Upload Button */}
      <div>
        <button
          onClick={handleShowForm}
          className="bottom-0 position-fixed w-[100%] rounded-none bg-green-300 py-3 shadow-lg text-black"
        >
          อัปโหลดข้อมูลน้องหมา
        </button>
        <Modal
          show={show_form}
          onHide={handleCloseForm}
          centered
          backdrop="static"
          size=''
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>

          <Modal.Body scrollable={true}>
            <ProfileForm/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseForm}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseForm}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* Dog List */}
      <Container>
      <Row>
        <Col>1</Col>
        <Col>2</Col>
      </Row>
      </Container>
    </>
  );
}

export default ProfileList;
