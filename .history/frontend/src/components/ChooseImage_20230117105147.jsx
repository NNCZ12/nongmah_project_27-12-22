import {React,useState,useEffect} from 'react'
import { Form } from 'react-bootstrap'

function ChooseImage() {
  return (
    <div>
      <Form.Control
            type="file"
            // onChange={onImageChange}
            required
          />
    </div>
  )
}

export default ChooseImage
