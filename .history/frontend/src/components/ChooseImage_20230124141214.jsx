import { React, useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'
import { base64 } from 'base64-js'

function ChooseImage({ handleGetImage }) {
  const [images, setImages] = useState([])
  const [imageURL, setImageURL] = useState([])
  const [detectedImage, setDetectedImage] = useState([]) //image from detected

  const onImageChange = (event) => {
    setImages(event.target.files[0])
    handleGetImage(images)
  }

  const createDetectImg = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('images', images)
    
    try {
      const res = await axios
        .post(`http://localhost:5000/image`, formData)
        .then((res) => {
          // decode image from API response
          const img_decoded = new TextDecoder('utf-8').decode(
            new Uint8Array(res.data.image),
          )
          // create an object URL from the image
          const img_url = URL.createObjectURL(
            new Blob([img_decoded], { type: 'image/png' }),
          )
          // set the image object to state
          setDetectedImage(img_url)
          console.log(detectedImage)
          console
          // access additional information
          Swal.fire({
            icon: 'success',
            text: res.data.message,
          })
        })
    } catch (err) {
      console.error(err)
      console.log(data.getAllResponseHeaders())
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
        {detectedImage ? (
          <img src={detectedImage} alt="" />
        ) : (
          <p>ไม่พบรูปภาพ</p>
        )}
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
