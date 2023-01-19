import { React, useState } from "react";

function ViewProfile(props) {
  const { profileData } = props;

  const vaccineText = () => {
    if ((profileData.vaccination = "received")) {
      return "ได้รับแล้ว";
    } else if ((profileData.vaccination = "have_not_received")) {
      return "ยังไม่ได้รับ";
    } else {
      return "ไม่ระบุ";
    }
  };

  return (
    <div>
      <div className="fixed top-0 h-32 bg-black z-0 relative">
        <div className="pt-10">
          <div
            className="rounded-full mx-auto h-52 w-52 d-flex justify-content-center align-items-center z-0 relative"
            style={{ backgroundColor: profileData.color }}
          >
            <img
              src={`http://localhost:8000/storage/dog_profiles/image/${profileData.image}`}
              alt=""
              className="h-44 rounded-full item-center"
            />
          </div>
        </div>
      </div>
      <div className="pt-32"></div>
      <div className="pl-8">
        <p>ชื่อ : {profileData.name}</p> <hr />
        <p>การรับวัคซีน : {vaccineText()}</p>
      </div>
    </div>
  );
}

export default ViewProfile;
