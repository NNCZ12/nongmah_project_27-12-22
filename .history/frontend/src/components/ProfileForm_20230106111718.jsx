import { React, useState } from "react";
import { Form, FloatingLabel, Button, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function ProfileForm(props) {
  const navigate = useNavigate();
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
  const [selectVaccineDate, setSelectVaccineDate] = useState(
    new Date(- (new Date().getTimezoneOffset() * 60000)).toISOString().replace('T', ' ').replace('Z', ' ')
  );
  const [selectSpotOnDate, setSelectSpotOnDate] = useState(
    new Date(- (new Date().getTimezoneOffset() * 60000)).toISOString().replace('T', ' ').replace('Z', ' ')
  );
  const [validationError, setValidationError] = useState({});

  const convert = (selected) => {
    const day = selected.getDate();
    const month =
      selected.getMonth() >= 10
        ? selected.getMonth() + 1
        : `0${selected.getMonth() + 1}`;
    const year = selected.getFullYear();

    return `${year}-${month}-${day}`;
  };

  const [show_map, setShowMap] = useState(false);
  const handleCloseMap = () => setShowMap(false);
  const handleShowMap = () => setShowMap(true);

  const changeHandler = (event) => {
    setImage(event.target.files[0]);
  };

  const createProfile = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("vaccination", vaccine);
    formData.append("vaccine_date", selectVaccineDate);
    formData.append("spot_on", spot_on);
    formData.append("spot_on_date", selectSpotOnDate);
    formData.append("neuter", neuter);
    formData.append("gender", gender);
    formData.append("dog_character", dog_character);
    formData.append("appearance", appearance);
    formData.append("location_name", location);
    formData.append("color", color);
    formData.append("image", image);
    formData.append("note", note);

    await axios
      .post(`http://localhost:8000/api/dog_profiles`, formData)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        navigate("/profilelist");
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        } else {
          Swal.fire({
            text: response.data.message,
            icon: "error",
          });
        }
      });
  };

  // console.log(selectVaccineDate);
  // console.log(selectSpotOnDate);

  return (
    // Dog Profile Form
    <div className="form-wrapper">
      {Object.keys(validationError).length > 0 && (
        <div className="alert alert-danger">
          {Object.entries(validationError).map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
        </div>
      )} <br />
      <Form onSubmit={createProfile}>
        {/* Choose Location */}
        <Button onClick={handleShowMap} className="text-black">
          เลือกตำแหน่งที่น้องหมาชอบอยู่
        </Button>

        <Modal
          show={show_map}
          onHide={handleCloseMap}
          backdrop="static"
          keyboard={false}
          fullscreen={true}
        >
          <Modal.Header closeButton>
            <Modal.Title>เลือกตำแหน่งในแผนที่</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d61693.732755014666!2d102.0165!3d14.8892!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sth!2sth!4v1671588919621!5m2!1sth!2sth"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseMap}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
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
              dateFormat="yyyy-MM-dd"
              // selected={selectVaccineDate}
              value={selectVaccineDate}
              onChange={(date) => {
                const vaccine_date = new Date(date - (new Date().getTimezoneOffset() * 60000)).toISOString().replace('T', ' ').replace('Z', ' ');
                setSelectVaccineDate(vaccine_date);
              }}
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
              dateFormat="yyyy-MM-dd"
              value={selectSpotOnDate}
              // selected={selectSpotOnDate}

              onChange={(date) => {
                const spot_on_date = new Date(date - (new Date().getTimezoneOffset() * 60000)).toISOString().replace('T', ' ').replace('Z', ' ');
                setSelectSpotOnDate(spot_on_date);
              }}
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
        <p className="pb-3">
          สีเขียว : ใจดี ไม่ดุ ไม่กัด <br />
          สีเหลือง : ดุบ้างบางครั้ง <br />
          สีแดง : ดุ กัดคน ห้ามเข้าใกล้
        </p>
        <Modal.Footer>
          <Button
            className="bg-red-500 hover:bg-red-400 border-none"
            onClick={props.onClick}
          >
            ยกเลิก
          </Button>
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 border-none"
            onClick={props.onClick}
          >
            บันทึก
          </Button>
        </Modal.Footer>
      </Form>
    </div>
  );
}

export default ProfileForm;
