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

  window.onload = () => {
    $('#sendbutton').click(() => {
        imagebox = $('#imagebox')
        input = $('#imageinput')[0]
        if (input.files && input.files[0]) {
            let formData = new FormData();
            formData.append('image', input.files[0]);
            $.ajax({
                url: "http://localhost:5000/detectObject", // fix this to your liking
                type: "POST",
                data: formData,
                cache: false,
                processData: false,
                contentType: false,
                error: function(data) {
                    console.log("upload error", data);
                    console.log(data.getAllResponseHeaders());
                },
                success: function(data) {
                    console.log(data);
                    bytestring = data['status']
                    image = bytestring.split('\'')[1]
                    imagebox.attr('src', 'data:image/jpeg;base64,' + image)
                }
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
