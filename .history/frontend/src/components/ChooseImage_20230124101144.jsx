import { React, useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'

function ChooseImage({ handleGetImage }) {
  const [images, setImages] = useState([])
  const [imageURL, setImageURL] = useState([])
  const [detectedImage, setDetectedImage] = useState([]) //image from detected

  useEffect(() => {
    if (images.length < 1) return
    const newImageUrl = []
    images.forEach((image) => newImageUrl.push(URL.createObjectURL(image)))
    setImageURL(newImageUrl)
  }, [images])

  function onImageChange(e) { //ad
    setImages([...e.target.files]) //image from detected
    handleGetImage(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', image)

    try {
      const res = await axios.post(`http://localhost:5000/image`, formData)
      console.log(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <div>
        <Form>
          <Form.Control type="file" onChange={onImageChange} required />
        </Form>
      </div>{' '}
      <br />
      <div>
        {images.length > 0 ? (
          imageURL.map((imageSrc, idx) => (
            <img className="h-40" key={idx} src={imageSrc} alt="" />
          ))
        ) : (
          <p>ไม่พบรูปภาพ</p>
        )}
      </div>
      <button type="submit" className="bg-neutral-600">ตรวจสอบรูปภาพ</button>
    </div>
  )
}

export default ChooseImage
