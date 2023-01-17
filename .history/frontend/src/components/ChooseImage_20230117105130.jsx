import {React,useState,useEffect} from 'react'
import {  } from 'react-boo'

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
