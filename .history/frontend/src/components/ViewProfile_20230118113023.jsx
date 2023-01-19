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

  const spotOnText = () => {
    if ((profileData.spot_on = "received")) {
      return "ได้รับแล้ว";
    } else if ((profileData.spot_on = "have_not_received")) {
      return "ยังไม่ได้รับ";
    } else {
      return "ไม่ระบุ";
    }
  };

  const neuterText = () => {
    if ((profileData.neuter = "done")) {
      return "ได้รับแล้ว";
    } else if ((profileData.spot_on = "have_not_done")) {
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
        <p>การรับวัคซีน : {vaccineText()}</p> <hr />
        <p>วันที่รับวัคซีน : {profileData.vaccine_date}</p> <hr />
        <p>การรับยาหยดป้องกันปรสิต : {spotOnText()}</p><hr />
        <p>วันที่รับยาหยด : {profileData.spot_on_date}</p> <hr />
        <p>การทำหมัน : {neuterText()}</p> <hr />
        <p>เพศ : {profileData.gender}</p> <hr />
        <p>นิสัยน้องหมา : {profileData.dog_character}</p> <hr />
        <p>จุดสังเกต,ลักษณะเฉพาะของน้องหมา : {profileData.appearance}</p> <hr />

      </div>
    </div>
  );
}

export default ViewProfile;
