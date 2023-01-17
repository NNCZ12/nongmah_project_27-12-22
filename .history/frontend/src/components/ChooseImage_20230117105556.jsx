import {React,useState,useEffect} from 'react'
import { Form } from 'react-bootstrap'

function ChooseImage() {
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
  }
  return (
    <div>
      <Form.Control
            type="file"
            onChange={onImageChange}
            required
          />
    </div>
  )
}

export default ChooseImage
