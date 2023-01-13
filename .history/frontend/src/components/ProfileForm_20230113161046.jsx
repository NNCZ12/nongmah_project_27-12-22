import { React, useState, useEffect, useRef } from "react";
import {
  Form,
  FloatingLabel,
  Button,
  Modal,
  ToggleButton,
  ButtonGroup,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Maps from "./Maps";

function ProfileForm(props) {
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [validationError, setValidationError] = useState({});
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
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [selectVaccineDate, setSelectVaccineDate] = useState(
    new Date(-(new Date().getTimezoneOffset() * 60000))
      .toISOString()
      .replace("T", " ")
      .replace("Z", " ")
  );
  const [selectSpotOnDate, setSelectSpotOnDate] = useState(
    new Date(-(new Date().getTimezoneOffset() * 60000))
      .toISOString()
      .replace("T", " ")
      .replace("Z", " ")
  );

  const handleGetLatLon = (lat, lon) => {
    setLatitude(lat);
    setLongitude(lon);
  };

  const [show_map, setShowMap] = useState(false);
  const handleCloseMap = () => setShowMap(false);
  const handleShowMap = () => setShowMap(true);

  const changeHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = function (event) {
        setImage(event.target.result);
        setIsUpload(true);
      };

      reader.readAsDataURL(event.target.files[0]);
    }
    // setImage(event.target.files[0]);
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
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);

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

  return (
    // Dog Profile Form
    <div className="form-wrapper">
      {Object.keys(validationError).length > 0 && (
        <div className="alert alert-danger">
          {Object.entries(validationError).map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
        </div>
      )}{" "}
      <Form onSubmit={createProfile}>
        {/* Choose Location */}
        <Form.Group>
          <div>
            <Button
              onClick={handleShowMap}
              className="text-black bg-blue-300 p-3 w-[100%]"
            >
              เลือกตำแหน่งในแผนที่
            </Button>
          </div>
          <Modal
            show={show_map}
            onHide={handleCloseMap}
            backdrop="static"
            keyboard={false}
            fullscreen={true}
          >
            <Modal.Header closeButton>
              <Modal.Title>เลือกตำแหน่งสถานที่ที่น้องหมาชอบอยู่</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Maps
                handleCloseMap={handleCloseMap}
                handleGetLatLon={handleGetLatLon}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseMap}>
                Close
              </Button>
              <Button variant="success" onClick={handleCloseMap}>
                OK
              </Button>
            </Modal.Footer>
          </Modal>{" "}
          <br />
          <div className="mx-auto items-center">
            <Form.Group className="inline-flex">
              <FloatingLabel controlId="floatingInput" label="latitude">
                <Form.Control
                  placeholder="..."
                  readOnly
                  value={latitude}
                  required
                />
              </FloatingLabel>{" "}
              &nbsp; &nbsp;
              <FloatingLabel controlId="floatingInput" label="longitude">
                <Form.Control
                  placeholder="..."
                  readOnly
                  value={longitude}
                  required
                />
              </FloatingLabel>
            </Form.Group>
          </div>
        </Form.Group>{" "}
        <br />
        {/* Upload Image */}
        <Form.Group controlId="Image" className="mb-3">
          <Form.Label>อัปโหลดภาพน้องหมา</Form.Label>
          <Form.Control
            type="file"
            onChange={changeHandler}
            required
          /> <br />{" "}
          {isUpload ? <img src={image} alt="" /> : <p>ยังไม่ได้อัปโหลดรูปภาพ</p>}
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
            required
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
                const vaccine_date = new Date(
                  date - new Date().getTimezoneOffset() * 60000
                )
                  .toISOString()
                  .replace("T", " ")
                  .replace("Z", " ");
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
            required
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
                const spot_on_date = new Date(
                  date - new Date().getTimezoneOffset() * 60000
                )
                  .toISOString()
                  .replace("T", " ")
                  .replace("Z", " ");
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
            required
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
              required
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
        <ButtonGroup>
          <div className="inline-flex ">
            <Form.Label className="py-2.5">กำหนดสีให้น้องหมา</Form.Label>
            <p className="px-2" />
            <div>
              <ToggleButton
                variant="outline-success"
                className="mb-2 rounded-full w-10 h-10 border-8"
                id="green"
                type="checkbox"
                checked={color === "green"}
                value="green"
                onChange={(event) => setColor(event.target.value)}
              />
            </div>{" "}
            <p className="px-2" />
            <div>
              <ToggleButton
                variant="outline-warning"
                className="mb-2 rounded-full w-10 h-10 border-8"
                id="yellow"
                type="checkbox"
                checked={color === "yellow"}
                value="yellow"
                onChange={(event) => setColor(event.target.value)}
              />
            </div>{" "}
            <p className="px-2" />
            <div>
              <ToggleButton
                variant="outline-danger"
                className="mb-2 rounded-full w-10 h-10 border-8"
                id="red"
                type="checkbox"
                checked={color === "red"}
                value="red"
                onChange={(event) => setColor(event.target.value)}
              />
            </div>
          </div>
        </ButtonGroup>{" "}
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
