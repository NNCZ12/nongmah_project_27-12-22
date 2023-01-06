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
        <FloatingLabel controlId="floatingSelect" label="การรับยาหยดป้องกันปรสิต">
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
        
<div class="flex">
    <div class="flex items-center mr-4">
        <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="inline-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inline 1</label>
    </div>
    <div class="flex items-center mr-4">
        <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="inline-2-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inline 2</label>
    </div>
    <div class="flex items-center mr-4">
        <input checked id="inline-checked-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="inline-checked-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inline checked</label>
    </div>
    <div class="flex items-center">
        <input disabled id="inline-disabled-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="inline-disabled-radio" class="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">Inline disabled</label>
    </div>
</div>

      </Form.Group>
    </Form>
  );
}

export default ProfileForm;
