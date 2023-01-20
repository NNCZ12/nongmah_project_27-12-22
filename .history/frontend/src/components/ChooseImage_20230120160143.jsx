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

  await axios
      .post(`http://localhost:8000/api/dog_profiles`, formData)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        navigate("/main");
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        } else {
          Swal.fire({
            text: response.data.message,
            icon: "error",
          });
        }
      });
  };

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
