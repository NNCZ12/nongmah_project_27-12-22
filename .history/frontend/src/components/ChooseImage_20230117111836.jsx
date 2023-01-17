import { React, useState, useEffect } from "react";
import { Form } from "react-bootstrap";

function ChooseImage({handleGetImage}) {
  const [images, setImages] = useState([]);
  const [imageURL, setImageURL] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrl = [];
    images.forEach((image) => newImageUrl.push(URL.createObjectURL(image)));
    setImageURL(newImageUrl);
  }, [images]);

  function onImageChange(e) {
    const images = e.target.files[
    setImages([...e.target.files]);
    handleGetImage(images);
  }

  console.log(imageURL);
  return (
    <div>
      <div>
        <Form.Control type="file" onChange={onImageChange} required />
      </div> <br />
      <div>
        {images.length > 0 ? (
          imageURL.map((imageSrc, idx) => (
            <img key={idx} src={imageSrc} alt="" />

            // <img key={idx}  height="360" src={imageSrc} />
          ))
        ) : (
          <p>ไม่พบรูปภาพ</p>
        )}
      </div>
    </div>
  );
}

export default ChooseImage;
