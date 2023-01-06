import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";

function ProfileForm() {
  return (
    <Form onSubmit="">
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

      {/* Vaccination */}
      <Form.Group>
        <Form.Label>การรับวัคซีนm.Label>
        <Form.Select aria-label="Default select example">
          
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
}

export default ProfileForm;
