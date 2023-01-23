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
  }D

  const formData = new FormData();
  formData.append("image", images[0]);
  axios
    .post("http://localhost:5000/image", formData)
    .then((res) => {
      Swal.fire({
        title: "Success!",
        text: "Image successfully sent to the API.",
        icon: "success",
      });
    })
    .catch((err) => {
      Swal.fire({
        title: "Error!",
        text: err,
        icon: "error",
      });
    });

  //To get image from the API

  axios
    .get("http://localhost:5000/image") // make a GET request to the API endpoint for image retrieval
    .then((res) => {
      // handle success response from the API call and set the image URL in state using setImageURL() method

      setImageURL(res.data); // res.data will contain the image URL returned by the API call
    })

    .catch((err) => {
      // handle error response from the API call and show an error message using SweetAlert2 library

      Swal.fire({
        // show an error message using SweetAlert2 library if there is an error while retrieving image from the API

        title: "Error!", // set title of SweetAlert2 popup as Error!

        text: err, // set text of SweetAlert2 popup as err which contains error message returned by the API call

        icon: "error", // set icon of SweetAlert2 popup as error icon
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
