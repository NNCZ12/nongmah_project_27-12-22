import React from "react";
import {
  Form,
  FloatingLabel,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";

function ProfileForm() {
  return (
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
          className=""
        >
          <Form.Control type="text" placeholder="..." />
        </FloatingLabel>
      </Form.Group>
      <br />
      {/* Vaccination */}
      <Form.Group>
      <Form.Select aria-label="Default select example" className="py-3">
      <option>การรับวัคซีน</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
      </Form.Group>
      <br />
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
        <Form.Label cla>เพศ</Form.Label>
        <Form.Check inline label="ชาย" name="group1" type="radio" id="" />
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
        <Form.Check inline label="เขียว" name="group1" type="radio" value="" style={{ color: 'green' }} />
        <Form.Check inline label="เหลือง" name="group1" type="radio" value="" style={{ color: 'yellow' }}/>
        <Form.Check inline label="แดง" name="group1" type="radio" value="" style={{ color: 'red' }}/>
      </Form.Group> <br />
      

    </Form>
  );
}

export default ProfileForm;
