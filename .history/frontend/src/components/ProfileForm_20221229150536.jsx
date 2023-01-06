import { React, useState } from "react";
import {
  Form,
  FloatingLabel,
  Button,
  Modal,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function ProfileForm(props) {
  const [vaccine, setVaccine] = useState("");
  const [spot_on, setSpotOn] = useState("");
  const [neuter, setNeuter] = useState("");
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
  const changeHandler = (event) => {
    setImage(event.target.files[0]);
  };

  // console.log(color);

  return (
    // Dog Profile Form

    <Form>
      {/* Upload Image */}
      <Form.Group controlId="Image" className="mb-3">
        <Form.Label>อัปโหลดภาพน้องหมา</Form.Label>
        <Form.Control type="file" onChange={changeHandler} />
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
        <FloatingLabel></FloatingLabel>
        <Form.Select
          aria-label="Default select example"
          className="py-3"
          value={vaccine}
          onChange={(e) => setVaccine(e.target.value)}
        >
          <option >การรับวัคซีน</option>
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
          <Form.Control
            as="textarea"
            placeholder="..."
            type="text"
            value={dog_character}
            onChange={(event) => {
              setDogCharacter(event.target.value);
            }}
          />
        </FloatingLabel>
      </Form.Group>
      {/* Appearance */}
      <Form.Group>
        <FloatingLabel
          controlId="Appearance"
          label="จุดสังเกต,ลักษณะเฉพาะของน้องหมา"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            placeholder="..."
            type="text"
            value={appearance}
            onChange={(event) => {
              setAppearace(event.target.value);
            }}
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group>
        {/* Location */}
        <FloatingLabel
          controlId="Location"
          label="สถานที่ที่น้องหมาชอบอยู่"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            placeholder="..."
            type="text"
            value={location}
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group>
        <FloatingLabel
          controlId="floatingTextarea"
          label="หมายเหตุ/ข้อมูลเพิ่มเติม"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            placeholder="..."
            value={note}
            onChange={(event) => {
              setNote(event.target.value);
            }}
          />
        </FloatingLabel>
      </Form.Group>{" "}
      <br />
      {/* Color */}
      <Form.Group>
        <div className="inline-flex ">
          <Form.Label className="py-2.5">กำหนดสีให้น้องหมา</Form.Label>
          <p className="px-2" />
          <div>
            <input
              type="radio"
              checked={color === "green"}
              id="green"
              name="color"
              value="green"
              onChange={(event) => setColor(event.target.value)}
              className="hidden peer"
              required
            />
            <label
              htmlFor="green"
              className="inline-flex items-center p-2 w-10 h-10 bg-green-800 rounded-full   hover:bg-green-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600"
            ></label>
          </div>{" "}
          <p className="px-2" />
          <div>
            <input
              type="radio"
              checked={color === "yellow"}
              id="yellow"
              name="color"
              value="yellow"
              onChange={(event) => setColor(event.target.value)}
              className="hidden peer"
            />
            <label
              htmlFor="yellow"
              className="inline-flex items-center p-2 w-10 h-10 bg-yellow-400 rounded-full   hover:bg-yellow-300"
            ></label>
          </div>{" "}
          <p className="px-2" />
          <div>
            <input
              type="radio"
              checked={color === "red"}
              id="red"
              name="color"
              value="red"
              onChange={(event) => setColor(event.target.value)}
              className="hidden peer"
            />
            <label
              htmlFor="red"
              className="inline-flex items-center p-2 w-10 h-10 bg-red-600 rounded-full   hover:bg-red-500 "
            ></label>
          </div>
        </div>
      </Form.Group>{" "}
      <p>สีเขียว : ใจดี ไม่ดุ ไม่กัด <br />สีเหลือง : ดุบ้างบางครั้ง <br />สีแดง : ดุมาก กัดคน</p>
      <Modal.Footer>
            <Button className="bg-red-500 hover:bg-red-400 border-none" onClick={props.onClick}>
              Close
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-500 border-none" onClick={props.onClick}>
              Save Changes
            </Button>
          </Modal.Footer>
    </Form>
  );
}

export default ProfileForm;
