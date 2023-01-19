import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import ProfileForm from "../components/ProfileForm";
import ProfileList from "../components/ProfileList";


function MainScreen() {
  const [show_form, setShowForm] = useState(false);
  const handleCloseForm = () => setShowForm(false);
  const handleShowForm = () => setShowForm(true);
  return (
    <div>
      {/* Top Gradient */}
      <div className="h-[200px]">
        <div className="top-0 position-fixed w-[100%] h-[200px] bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 shadow-sm relative">
          <ClusterMap></ClusterMap>
        </div>
      </div>
      {/* Profile List */}
      <ProfileList />
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

export default MainScreen;
