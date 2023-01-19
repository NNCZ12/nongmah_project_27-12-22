import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Container, Form, Row, Col } from "react-bootstrap";
import ProfileForm from "./ProfileForm";
import ViewProfile from "./ViewProfile";
import axios from "axios";

function ProfileList() {

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
      
    </div>
  );
}

export default ProfileList;
