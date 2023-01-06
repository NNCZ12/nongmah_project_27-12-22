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
        <FloatingLabel controlId="floatingSelect" label="การรับวัคซีน">
          <Form.Select aria-label="Floating label select example">
            <option>-----------</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </FloatingLabel>
      </Form.Group>
      <br />
      {/* Spot On  */}
      <Form.Group>
        <FloatingLabel
          controlId="floatingSelect"
          label="การรับยาหยดป้องกันปรสิต"
        >
          <Form.Select aria-label="Floating label select example">
            <option></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </FloatingLabel>
      </Form.Group>
      <br />
      {/* Neuter  */}
      <Form.Group>
        <FloatingLabel controlId="floatingSelect" label="การทำหมัน">
          <Form.Select aria-label="Floating label select example">
            <option></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </FloatingLabel>
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Label>เพศ</Form.Label>
        <Form.Check
            inline
            label="1"
            name="group1"
            type="{type}"
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="2"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
      </Form.Group>
      <br />
      {/* Dog Character */}

    </Form>
  );
}

export default ProfileForm;
