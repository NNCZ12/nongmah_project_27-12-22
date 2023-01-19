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
      <div className="fixed top-0 h-40 bg-black z-0 relative">
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
      <div className="pt-24"/>
      <ul className="my-4 space-y-3">
            <li className="flex items-center p-2.5 rounded-lg shadow-sm bg-slate-200  ">
                    <span className="ml-4 col-5 text-black">ชื่อ :</span>
                    <span className=" text-black">{profileData.name}</span>
            </li>
            <li className="flex items-center p-2.5 rounded-lg shadow-sm bg-slate-200  ">
                    <span className="ml-4 col-5 text-black">การรับวัคซีน :</span>
                    <span className=" text-black">{vaccineText()}</span>
            </li>
            <li className="flex items-center p-2.5 rounded-lg shadow-sm bg-slate-200  ">
                    <span className="ml-4 col-5 text-black">วันที่รับวัคซีน :</span>
                    <span className=" text-black">{profileData.vaccine_date}</span>
            </li>
            <li className="flex items-center p-2.5 rounded-lg shadow-sm bg-slate-200  ">
                    <span className="ml-4 col-5 text-black">การรับยาหยดป้องกันปรสิต :</span>
                    <span className=" text-black">{spotOnText()}</span>
            </li>
            <li className="flex items-center p-2.5 rounded-lg shadow-sm bg-slate-200  ">
                    <span className="ml-4 col-5 text-black">การรับยาหยดป้องกันปรสิต :</span>
                    <span className=" text-black">{spotOnText()}</span>
            </li>
            <li className="flex items-center p-2.5 rounded-lg shadow-sm bg-slate-200  ">
                    <span className="ml-4 col-5 text-black">วันที่รับยาหยด :</span>
                    <span className=" text-black">{profileData.spot_on_date}</span>
            </li>
            <li className="flex items-center p-2.5 rounded-lg shadow-sm bg-slate-200  ">
                    <span className="ml-4 col-5 text-black">การทำหมัน :</span>
                    <span className=" text-black">{neuterText()}</span>
            </li>
            <li className="flex items-center p-2.5 rounded-lg shadow-sm bg-slate-200  ">
                    <span className="ml-4 col-5 text-black">เพศ :</span>
                    <span className=" text-black">{genderText()}</span>
            </li>
            <li className="flex items-center p-2.5 rounded-lg shadow-sm bg-slate-200  ">
                    <span className="ml-4 col-5 text-black">นิสัยน้องหมา :</span>
                    <span className=" text-black">{profileData.dog_character}</span>
            </li>
            <li className="flex items-center p-2.5 rounded-lg shadow-sm bg-slate-200  ">
                    <span className="ml-4 col-5 text-black">จุดสังเกต,ลักษณะเฉพาะของน้องหมา :</span>
                    <span className=" text-black">{profileData.dog_character}</span>
            </li>
        </ul>
      {/* <div className="pl-8">
       
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
