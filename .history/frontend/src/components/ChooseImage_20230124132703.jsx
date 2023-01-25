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
          // decode image from API response
          const img_decoded = new Buffer.from(res.data.image, 'base64')
          // create an object URL from the image
          const img_url = URL.createObjectURL(
            new Blob([img_decoded], { type: 'image/jpeg' }),
          )
          // set the image object to state
          setDetectedImage(img_url)
          // access additional information
          console.log(res.data.time)
          console.log(res.data.detections)
          Swal.fire({
            icon: 'success',
            text: data.message,
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
        {detectedImage ? (<img/>) : (<p/>)}
        {/* {detectedImage ? (
          imageURL.map((imageSrc, idx) => (
            <img className="h-40" key={idx} src={imageSrc} alt="" />
          ))
        ) : (
          <p>ไม่พบรูปภาพ</p>
        )} */}
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
