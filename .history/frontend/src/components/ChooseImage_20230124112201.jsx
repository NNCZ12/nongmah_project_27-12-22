import { React, useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'

function ChooseImage({ handleGetImage }) {
  const [images, setImages] = useState([])
  const [imageURL, setImageURL] = useState([])
  const [detectedImage, setDetectedImage] = useState([]) //image from detected

  // useEffect(() => {
  //   // make detected img to url for show
  //   if (images.length < 1) return
  //   const newImageUrl = []
  //   images.forEach((image) => newImageUrl.push(URL.createObjectURL(image)))
  //   setImageURL(newImageUrl)
  // }, [images])

  const onImageChange = (event) => {
    setImages(event.target.files[0])
    handleGetImage(images)
  }

  const createDetectImg = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('images', images)
    console.log(formData)
    try {
      const res = await axios
        .post(`http://localhost:5000/image`, formData)
        .then((res) => {
          console.log(res.data)
        })
    } catch (err) {
      console.error(err)
      console.log(eeoe)
    }
  }
  // console.log(images);
  return (
    <div>
      <div>
        <Form onSubmit={createDetectImg}>
          <Form.Control type="file" onChange={onImageChange} required />
        </Form>
      </div>{' '}
      <br />
      <div>
        {/* {images.length > 0 ? (
          imageURL.map((imageSrc, idx) => (
            <img className="h-40" key={idx} src={imageSrc} alt="" />
          ))
        ) : (
          <p>ไม่พบรูปภาพ</p>
        )} */}
      </div>
      <button type="submit" className="bg-neutral-600">
        ตรวจสอบรูปภาพ
      </button>
    </div>
  )
}

export default ChooseImage
