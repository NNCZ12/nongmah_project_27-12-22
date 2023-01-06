import { React, useState } from "react";
import {
  Form,
  FloatingLabel,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ProfileForm() {
  const [vaccine, setVaccine] = useState("");
  const [spot_on, setSpotOn] = useState("");
  const [neuter, setNeuter] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dog_character, setDogCharacter] = useState("");
  const [appearance, setAppearace] = useState("");
  const [location, setLocation] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState();
  const [note, setNote] = useState("");
  const [selectVaccineDate, setSelectVaccineDate] = useState(null);
  const [selectSpotOnDate, setSelectSpotOnDate] = useState(null);
  console.log(dog)
  return (
    // Dog Profile Form

    <Form>
      {/* Upload Image */}
      <Form.Group controlId="Image" className="mb-3">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      {/* Name */}
      <Form.Group className="relative">
        <FloatingLabel
          controlId="floatingInput"
          label="ชื่อน้องหมา(ถ้ามี)"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        >
          <Form.Control type="text" placeholder="..." />
        </FloatingLabel>
      </Form.Group>
      <br />
      {/* Vaccination */}
      <Form.Group>
        <Form.Select
          aria-label="Default select example"
          className="py-3"
          value={vaccine}
          onChange={(e) => setVaccine(e.target.value)}
        >
          <option>การรับวัคซีน</option>
          <option value="received">ได้รับแล้ว</option>
          <option value="have_not_received">ยังไม่ได้รับ</option>
          <option value="undentify">ไม่ระบุ</option>
        </Form.Select>
      </Form.Group>
      <br />
      {/* Vaccine Date  */}
      {vaccine === "received" && (
        <Form.Group>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={selectVaccineDate}
            onChange={(date) => setSelectVaccineDate(date)}
            placeholderText="ระบุวันที่ฉีดวัคซีน"
            className="bg-white border text-black p-3 w-full rounded-md placeholder:text-gray-500"
          />{" "}
          <p className="py-2"></p>
        </Form.Group>
      )}
      {/* Spot On  */}
      <Form.Group>
        <Form.Select
          aria-label="Default select example"
          className="py-3"
          value={spot_on}
          onChange={(e) => setSpotOn(e.target.value)}
        >
          <option>การรับยาหยดป้องกันปรสิต</option>
          <option value="received">ได้รับแล้ว</option>
          <option value="have_not_received">ยังไม่ได้รับ</option>
          <option value="undentify">ไม่ระบุ</option>
        </Form.Select>
      </Form.Group>
      <br />
      {/* Spot On Date  */}
      {spot_on === "received" && (
        <Form.Group>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={selectSpotOnDate}
            onChange={(date) => setSelectSpotOnDate(date)}
            placeholderText="ระบุวันที่รับยาหยด"
            className="bg-white border text-black p-3 w-full rounded-md placeholder:text-gray-500"
          />{" "}
          <p className="py-2"></p>
        </Form.Group>
      )}
      {/* Neuter  */}
      <Form.Group>
        <Form.Select
          aria-label="Default select example"
          className="py-3"
          value={neuter}
          onChange={(e) => setNeuter(e.target.value)}
        >
          <option>การทำหมัน</option>
          <option value="done">ทำแล้ว</option>
          <option value="have_not_done">ยังไม่ทำ</option>
          <option value="undentify">ไม่ระบุ</option>
        </Form.Select>
      </Form.Group>
      <br />
      {/* Gender  */}
      <Form.Group>
        <Form.Label className="pr-5 pl-1">เพศ</Form.Label>
        <Form.Check
          inline
          label="ชาย"
          checked={gender === "male"}
          type="radio"
          value="male"
          onChange={(event) => setGender(event.target.value)}
          className="pr-3"
        />
        <Form.Check
          inline
          label="หญิง"
          checked={gender === "female"}
          type="radio"
          value="female"
          onChange={(event) => setGender(event.target.value)}
        />
      </Form.Group>
      <br />
      {/* Dog Character */}
      <Form.Group>
        <FloatingLabel
          controlId="DogCharacter"
          label="นิสัยน้องหมา" 
          className="mb-3"
        >
          <Form.Control as="textarea" placeholder="Leave a comment here" type="text" value={dog_character}
                      onChange={(event) => {
                        setDogCharacter(event.target.value);
                      }} />
        </FloatingLabel>
      </Form.Group>
      {/* Appearance */}
      <Form.Group>
        <FloatingLabel
          controlId="floatingTextarea"
          label="จุดสังเกต,ลักษณะเฉพาะของน้องหมา"
          className="mb-3"
        >
          <Form.Control as="textarea" placeholder="..." />
        </FloatingLabel>
      </Form.Group>
      <Form.Group>
        {/* Location */}
        <FloatingLabel
          controlId="floatingTextarea"
          label="สถานที่ที่น้องหมาชอบอยู่"
          className="mb-3"
        >
          <Form.Control as="textarea" placeholder="..." />
        </FloatingLabel>
      </Form.Group>
      <Form.Group>
        <FloatingLabel
          controlId="floatingTextarea"
          label="หมายเหตุ"
          className="mb-3"
        >
          <Form.Control as="textarea" placeholder="..." />
        </FloatingLabel>
      </Form.Group>
      {/* Color */}
      <Form.Group>
        <Form.Label>กำหนดสีให้น้องหมา</Form.Label>
        <Form.Check
          inline
          label="เขียว"
          name="group1"
          type="radio"
          value=""
          style={{ color: "green" }}
        />
        <Form.Check
          inline
          label="เหลือง"
          name="group1"
          type="radio"
          value=""
          style={{ color: "yellow" }}
        />
        <Form.Check
          inline
          label="แดง"
          name="group1"
          type="radio"
          value=""
          style={{ color: "red" }}
        />
      </Form.Group>{" "}
      <br />
    </Form>
  );
}

export default ProfileForm;
