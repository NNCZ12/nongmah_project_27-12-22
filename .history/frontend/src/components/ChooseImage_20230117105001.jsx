import {React,useState,useEffect} from 'react'


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
