import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import ProfileForm from "../components/ProfileForm";
import ProfileList from "../components/ProfileList";
import ClusterMap from "../components/ClusterMap";
import imbg from "../assets/littledog.png";
import ImgDetect from "../";

function MainScreen() {
  const [show_form, setShowForm] = useState(false);
  const handleCloseForm = () => setShowForm(false);
  const handleShowForm = () => setShowForm(true);
  return (
    <div>
      {/* Top Gradient */}
      <div className="h-[200px]">
        <div
          className="top-0 position-fixed w-[100%] h-[200px]  bg-repeat shadow-sm mx-auto relative"
          style={{
            backgroundImage: `url(${imbg})`,
            opacity: 0.5,
          }}
        >
          <div className="flex items-center justify-center mx-auto  my-20">
            <ClusterMap
              style={{ position: "absolute", zIndex: 1 }}
            ></ClusterMap>
          </div>
        </div>
      </div>
      {/* Profile List */}
      <ProfileList />

      <ImgDetect/>
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
