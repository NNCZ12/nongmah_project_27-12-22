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
  const genderText = () => {
    if ((profileData.gender = "male")) {
      return "ชาย";
    } else {
      return "หญิง";
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
              className="h-44 w-44 rounded-full item-center"
            />
          </div>
        </div>
      </div>
      <div className="pt-32"/>
      <ul class="my-4 space-y-3">
            <li>
                <div class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    
                    <span class="flex-1 ml-3 whitespace-nowrap">MetaMask</span>
                    <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                </div>
            </li>
        </ul>
      {/* <div className="pl-8">
        <p>ชื่อ : {profileData.name}</p> <hr />
        <p>การรับวัคซีน : {vaccineText()}</p> <hr />
        <p>วันที่รับวัคซีน : {profileData.vaccine_date}</p> <hr />
        <p>การรับยาหยดป้องกันปรสิต : {spotOnText()}</p>
        <hr />
        <p>วันที่รับยาหยด : {profileData.spot_on_date}</p> <hr />
        <p>การทำหมัน : {neuterText()}</p> <hr />
        <p>เพศ : {genderText()}</p> <hr />
        <p>นิสัยน้องหมา : {profileData.dog_character}</p> <hr />
        <p>จุดสังเกต,ลักษณะเฉพาะของน้องหมา : {profileData.appearance}</p> <hr />
        <p>สถานที่ที่น้องหมาชอบอยู่ : {profileData.name}</p> <hr />
        <p>หมายเหตุ,ข้อมูลเพิ่มเติม : {profileData.note}</p> <hr />
      </div> */}
    </div>
  );
}

export default ViewProfile;
