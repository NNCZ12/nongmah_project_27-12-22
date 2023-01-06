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
          value={name} onChange={(event)=>{
            setName(event.target.value);
          }}
        >
          <Form.Control type="text" placeholder="..." />
        </FloatingLabel>
      </Form.Group>
      <br />
      {/* Vaccination */}
      <Form.Group>
        <Form.Select aria-label="Default select example" className="py-3" value={vaccine} onChange={(e) => setVaccine(e.target.value)}>
          <option>การรับวัคซีน</option>
          <option value="received">ได้รับแล้ว</option>
          <option value="have_not_received">ยังไม่ได้รับ</option>
          <option value="undentify">ไม่ระบุ</option>
        </Form.Select>
      </Form.Group>
      <br />
      {/* Vaccine Date  */}
      
      {(<Form.Group>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={selectVaccineDate}
        onChange={(date) => setSelectVaccineDate(date)}
        placeholderText="ระบุวันที่ฉีดวัคซีน"
        className="bg-white border text-black p-2 w-full rounded-md placeholder:text-gray-500"
      />
    </Form.Group>)} <br />
      {/* Spot On  */}
      <Form.Group>
        <Form.Select aria-label="Default select example" className="py-3">
          <option>การรับยาหยดป้องกันปรสิต</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
      <br />
      {/* Vaccine Date  */}
      <Form.Group>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={selectSpotOnDate}
        onChange={(date) => setSelectSpotOnDate(date)}
        placeholderText="ระบุวันที่รับยาหยด"
        className="bg-white border text-black p-2 w-full rounded-md placeholder:text-gray-500"
      />
    </Form.Group> <br />
      {/* Neuter  */}
      <Form.Group>
        <Form.Select aria-label="Default select example" className="py-3">
          <option>การทำหมัน</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Label className="pr-5 pl-1">เพศ</Form.Label>
        <Form.Check
          inline
          label="ชาย"
          name="group1"
          type="radio"
          id=""
          className="pr-3"
        />
        <Form.Check inline label="หญิง" name="group1" type="radio" id="" />
      </Form.Group>
      <br />
      {/* Dog Character */}
      <Form.Group>
        <FloatingLabel
          controlId="floatingTextarea"
          label="นิสัยน้องหมา"
          className="mb-3"
        >
          <Form.Control as="textarea" placeholder="Leave a comment here" />
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
