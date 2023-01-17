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
    {images.length > 0 ? ((imageURL.map((imageSrc, idx) => (
        <Modal centered show={handleShowImage} onHide={handleCloseImage}>
      <Modal.Header closeButton>
        <Modal.Title>ภาพน้องหมา</Modal.Title>
      </Modal.Header>
      <Modal.Body><img key={idx} src={imageSrc} alt=""/></Modal.Body>
      <Modal.Footer>
        
        <Button variant="primary" onClick={handleCloseImage}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
      // <img key={idx}  height="360" src={imageSrc} />
    )))) : (<p>ไม่พบรูปภาพ</p>)}
  )
}

export default ChooseImage
