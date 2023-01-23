import { React, useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

function ChooseImage({ handleGetImage }) {
  const [images, setImages] = useState([]);
  const [imageURL, setImageURL] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrl = [];
    images.forEach((image) => newImageUrl.push(URL.createObjectURL(image)));
    setImageURL(newImageUrl);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
    handleGetImage(e.target.files[0]);
  }

  const formData = new FormData();
formData.append('image', images[0]); // images[0] is the first image selected by the user

axios.post(, formData)
  .then(response => {
    // handle success
    Swal.fire({
      title: 'Success!',
      text: 'Image successfully posted.',
      icon: 'success'
    });

  })
  .catch(error => {
    // handle error 
    Swal.fire({
      title: 'Error!',
      text: 'There was an error posting the image.',
      icon: 'error' 
    });

  });

  return (
    <div>
      <div>
        <Form.Control type="file" onChange={onImageChange} required />
      </div>{" "}
      <br />
      <div>
        {images.length > 0 ? (
          imageURL.map((imageSrc, idx) => (
            <img key={idx} src={imageSrc} alt="" />
          ))
        ) : (
          <p>ไม่พบรูปภาพ</p>
        )}
      </div>
    </div>
  );
}

export default ChooseImage;
