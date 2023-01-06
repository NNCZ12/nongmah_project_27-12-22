import React from "react";
import { Form } from "react-bootstrap";

function ProfileForm() {
  return (
    <Form onSubmit={createProfile}>
                  <FormGroup controlId="Image">
                    <MDBFile
                      label="อัปโหลดภาพน้องหมา"
                      id="customFile"
                      type="file"
                      onChange={changeHandler}
                    />
                  </FormGroup>

                  <br />

                  <FormGroup controlId="Name">
                    <MDBInput
                      label="ชื่อน้องหมา (ถ้ามี)"
                      id="name"
                      type="text"
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
                  </FormGroup>

                  <FormGroup controlId="Vaccination">
                    <FormLabel>การรับวัคซีน</FormLabel>

                    <FormControl
                      as="select"
                      className="browser-default custom-select"
                      value={vaccine}
                      onChange={(e) => setVaccine(e.target.value)}
                    >
                      <option>-----</option>
                      <option value="received" type="text">
                        ได้รับแล้ว
                      </option>
                      <option value="have_not_received" type="text">
                        ยังไม่ได้รับ
                      </option>
                      <option value="undentify" type="text">
                        ไม่ระบุ
                      </option>
                    </FormControl>
                    {vaccine === "received" && (
                      <FormGroup label="ระบุวันที่ฉีด"><Datepicker
                      
                        className="bg-white text-black"
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="yyyy/MM/dd"
                        showYearDropdown
                        showMonthDropdown
                      /></FormGroup>
                    )}
                  </FormGroup>

                  <FormGroup controlId="SpotOn">
                    <FormLabel>การรับยาหยดป้องกันปรสิต</FormLabel>

                    <FormControl
                      as="select"
                      className="browser-default custom-select"
                      value={spot_on}
                      onChange={(e) => setSpotOn(e.target.value)}
                    >
                      <option>-----</option>
                      <option value="received">ได้รับแล้ว</option>
                      <option value="have_not_received">ยังไม่ได้รับ</option>
                      <option value="undentify">ไม่ระบุ</option>
                    </FormControl>
                    {spot_on === "received" && (
                      <Datepicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="yyyy/MM/dd"
                        showYearDropdown
                        showMonthDropdown
                      />
                    )}
                  </FormGroup>

                  <FormGroup controlId="Neuter">
                    <FormLabel>การทำหมัน</FormLabel>
                    <FormControl
                      as="select"
                      className="browser-default custom-select"
                      value={neuter}
                      onChange={(e) => setNeuter(e.target.value)}
                    >
                      <option>-----</option>
                      <option value="done">ทำแล้ว</option>
                      <option value="have_not_done">ยังไม่ทำ</option>
                      <option value="undentify">ไม่ระบุ</option>
                    </FormControl>
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>เพศ</FormLabel>
                    <MDBRadio
                      checked={gender === "male"}
                      label="ชาย"
                      value="male"
                      onChange={(event) => setGender(event.target.value)}
                    />
                    <MDBRadio
                      checked={gender === "female"}
                      label="หญิง"
                      value="female"
                      onChange={(event) => setGender(event.target.value)}
                    />
                  </FormGroup>
                  <br />
                  <FormGroup controlId="DogCharacter">
                    <MDBInput
                      label="นิสัยน้องหมา"
                      id="form1"
                      type="text"
                      value={dog_character}
                      onChange={(event) => {
                        setDogCharacter(event.target.value);
                      }}
                    />
                  </FormGroup>
                  <br />
                  <FormGroup controlId="Appearance">
                    <MDBInput
                      label="จุดสังเกต,ลักษณะเฉพาะของน้องหมา"
                      id="form1"
                      type="text"
                      value={appearance}
                      onChange={(event) => {
                        setAppearace(event.target.value);
                      }}
                    />
                  </FormGroup>
                  <br />
                  <FormGroup controlId="Location">
                    <MDBInput
                      label="สถานที่ที่น้องหมาชอบอยู่"
                      id="form1"
                      type="text"
                      value={location}
                      onChange={(event) => {
                        setLocation(event.target.value);
                      }}
                    />
                  </FormGroup>
                  <br />
                  <FormGroup controlId="Color">
                    <FormLabel>กำหนดสีให้น้องหมา</FormLabel>

                    <MDBRadio
                      checked={color === "green"}
                      label="สีเขียว"
                      floating
                      color="green"
                      value="green"
                      onChange={(event) => setColor(event.target.value)}
                    ></MDBRadio>
                    <MDBRadio
                      checked={color === "yellow"}
                      label="สีเหลือง"
                      floating
                      color="yellow"
                      value="yellow"
                      onChange={(event) => setColor(event.target.value)}
                    ></MDBRadio>
                    <MDBRadio
                      checked={color === "red"}
                      label="สีแดง"
                      floating
                      color="red"
                      value="red"
                      onChange={(event) => setColor(event.target.value)}
                    ></MDBRadio>
                  </FormGroup>
                  <FormGroup>
                  <MDBTextArea label='หมายเหตุ/ข้อมูลเพิ่มเติม' id='textAreaExample' rows={3} value={note}
                      onChange={(event) => {
                        setNote(event.target.value);
                      }}/>
                  </FormGroup>
                  <FormGroup>
                  <MDBTextArea label='location_id' id='textAreaExample' rows={3} value={location_id}
                      onChange={(event) => {
                        setLocationId(event.target.value);
                      }}/>
                  </FormGroup>
  );
}

export default ProfileForm;
