import { React, useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'

import { Base64 } from 'js-base64'

function ChooseImage({ handleGetImage }) {
  const [images, setImages] = useState([])
  const [imageURL, setImageURL] = useState([])
  const [detectImage, setDetectImage] = useState([])
  const [detections, setDetections] = useState([])

  useEffect(() => {
    if (images.length < 1) return
    const newImageUrl = []
    images.forEach((image) => newImageUrl.push(URL.createObjectURL(image)))
    setImageURL(newImageUrl)
  }, [images])

  function onImageChange(e) {
    setImages([...e.target.files])
    handleGetImage(e.target.files[0])
    setDetectImage(e.target.files[0])
  }

  const createDetectImg = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('images', detectImage)

    try {
      const res = await axios
        .post(`http://localhost:5000/detections`, formData)
        .then((res) => {
          setDetections(res.data.response[0].detections[0])
          Swal.fire({
            icon: 'success',
            text: res.data.message,
          })
        })
    } catch (err) {
      console.error(err)
    }
  }

  const allowUpload = () => {
    return detections.class === "dog" && confidence > 50 ? "โปรดอั" : "อัปโหลดรูปภาพน้องหมา";
  };

  // console.log(images);
  return (
    <div>
      <div>
        <Form.Control
          type="file"
          onChange={onImageChange}
          onSubmit={createDetectImg}
          required
        />
      </div>{' '}
      <br />
      <div>
        {images.length > 0 ? (
          imageURL.map((imageSrc, idx) => (
            <img key={idx} src={imageSrc} alt="" />
          ))
        ) : (
          <p>ไม่พบรูปภาพ</p>
        )}
        <p>ความเป็นน้องหมา : {detections.confidence}</p>
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
