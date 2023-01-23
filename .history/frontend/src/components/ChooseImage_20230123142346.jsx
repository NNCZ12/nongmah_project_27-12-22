import { React, useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

function ChooseImage({ handleGetImage }) {
  const [images, setImages] = useState([]);
  const [imageURL, setImageURL] = useState([]);
  const [detectedImage, setDetectedImage] = useState([]);

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

  const createDetectImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("images", images[0]);
  };

  await axios
    .post(`http://localhost:5000/image`, formData)
    .then((response) => {
      // handle success
      Swal.fire({
        title: "Success!",
        text: "Image successfully posted.",
        icon: "success",
      });
    })
    .catch((error) => {
      // handle error
      Swal.fire({
        title: "Error!",
        text: "There was an error posting the image.",
        icon: "error",
      });
    });

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    await axios.get(API_URL).then(({ data }) => {
      setDetectedImage(data);
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
