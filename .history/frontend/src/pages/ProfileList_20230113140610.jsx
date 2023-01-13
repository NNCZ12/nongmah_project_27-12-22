import React, { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Container, Form, Row, Col } from "react-bootstrap";
import ProfileForm from "../components/ProfileForm";
import axios from "axios";
import Swal from "sweetalert2";

function ProfileList() {
  const [show_map, setShowMap] = useState(false);
  const handleCloseMap = () => setShowMap(false);
  const handleShowMap = () => setShowMap(true);

  const [show_form, setShowForm] = useState(false);
  const handleCloseForm = () => setShowForm(false);
  const handleShowForm = () => setShowForm(true);

  const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        fetchProfiles();
    }, []);

    const fetchProfiles = async () => {
        await axios.get(`http://localhost:8000/api/dog_profiles`).then(({data}) => {
            setProfiles(data);
        })
    }
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
          size='xl'
          dialogClassName="modal-90w"
          
        >
          <Modal.Header closeButton>
            <Modal.Title>อัปโหลดข้อมูลน้องหมา</Modal.Title>
          </Modal.Header>

          <Modal.Body >
            <ProfileForm onClick={handleCloseForm}/>
          </Modal.Body>
        </Modal>
      </div>
      {/* Dog List */}
      <Container>{profiles.length > 0?(profiles.map((row, key)=> (
        <tr key={key}>
        <td>{row.name}</Col>
      </tr>
      ))):(<p>No Dogs Found</p>)}
      
      </Container>

    </>
  );
}

export default ProfileList;
