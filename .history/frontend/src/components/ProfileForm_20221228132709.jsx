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
      <Form.Group className="relative">
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className=""
        >
          <Form.Control type="email" placeholder="..." />
        </FloatingLabel>
      </Form.Group>
      
    </Form>
  );
}

export default ProfileForm;
