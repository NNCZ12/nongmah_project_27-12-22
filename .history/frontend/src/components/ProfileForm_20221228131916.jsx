import React from "react";
import { Form } from "react-bootstrap";

function ProfileForm() {
  return (
    <Form onSubmit="">
      <Form.Group controlId="Ima" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}

export default ProfileForm;
