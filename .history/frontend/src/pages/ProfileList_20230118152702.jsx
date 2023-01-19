import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Container, Form, Row, Col } from "react-bootstrap";
import ProfileForm from "../components/ProfileForm";
import ViewProfile from "../components/ViewProfile";
import axios from "axios";

function ProfileList() {
  const [show_form, setShowForm] = useState(false);
  const handleCloseForm = () => setShowForm(false);
  const handleShowForm = () => setShowForm(true);

  const [showProfile, setShowProfile] = useState(false);
  const handleCloseProfile = () => setShowProfile(false);
  const handleShowProfile = () => setShowProfile(true);

  const [profiles, setProfiles] = useState([]);
  const [profileData, setProfileData] = useState({});

  const API_URL = `http://localhost:8000/api/dog_profiles`;

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    await axios.get(API_URL).then(({ data }) => {
      setProfiles(data);
    });
  };

  return (
    <div>
      {/* Gradient Container */}
      <div className="top-0 position-fixed w-[100%] h-[200px] bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 shadow-sm relative"></div>
      {/* Dog List */}{" "}
      {profiles.length > 0 ? (
        profiles.map((item, index) => (
          <div key={index} className="inline-flex p-3 relative">
            <img
              className="w-[40%]"
              src={`http://localhost:8000/storage/dog_profiles/image/${item.image}`}
              alt=""
              onClick={() => {
                handleShowProfile();
                setProfileData(item);
              }}
            />
          </div>
        ))
      ) : (
        <Row>No profiles found</Row>
      )}
      <Modal
        show={showProfile}
        onHide={handleCloseProfile}
        centered
        keyboard={false}
        fullscreen={false}
      >
        <Modal.Body>
          <ViewProfile profileData={profileData} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseProfile}>
            Close
          </Button>
          <Button variant="success" onClick={handleCloseProfile}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
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
          size="xl"
        >
          <Modal.Header closeButton>
            <Modal.Title>อัปโหลดข้อมูลน้องหมา</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <ProfileForm onClick={handleCloseForm} />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default ProfileList;
