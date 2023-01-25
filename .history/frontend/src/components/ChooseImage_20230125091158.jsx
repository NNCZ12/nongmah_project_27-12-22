import { React, useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'

import { Base64 } from 'js-base64'

function ChooseImage({ handleGetImage }) {
  const [images, setImages] = useState([])
  const [imageURL, setImageURL] = useState([])
  const [detectImage, setDetectImage] = useState([]) //image from detected


  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrl = [];
    images.forEach((image) => newImageUrl.push(URL.createObjectURL(image)));
    setImageURL(newImageUrl);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
    handleGetImage(e.target.files[0]);
    setDetectImage(e.target.files[0]);
  }

  const createDetectImg = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('images', detectImage)

    try {
      const res = await axios
        .post(`http://localhost:5000/image`, formData)
        .then((res) => {
          console.log(res.data)
          detectedImage(res.data)

          Swal.fire({
            icon: 'success',
            text: res.data.message,
          })
        })
    } catch (err) {
      console.error(err)
    }
  }
  
  
  // console.log(images);
  return (
    <div>
      <div>
        <Form.Control type="file" onChange={onImageChange} required />
      </div>{' '}
      <br />
      <div>
        
      </div>
      <button
        type="submit"
        onClick={createDetectImg}
        className="bg-neutral-600"
      >
        ตรวจสอบรูปภาพ
      </button>
    </div>
  )
}

export default ChooseImage
