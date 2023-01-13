import React,{useEffect,useState} from 'react'
import {
    Form,
    FloatingLabel,
    Button,
  } from "react-bootstrap";
import {useNavigate,useParams} from 'react-router-dom'
import axios from "axios";
import Swal from "sweetalert2";

function EditProfile() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [validationError, setValidationError] = useState({});
  const [vaccine, setVaccine] = useState("");
  const [spot_on, setSpotOn] = useState("");
  const [neuter, setNeuter] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dog_character, setDogCharacter] = useState("");
  const [appearance, setAppearace] = useState("");
  const [location, setLocation] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState();
  const [note, setNote] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [selectVaccineDate, setSelectVaccineDate] = useState(
    new Date(-(new Date().getTimezoneOffset() * 60000))
      .toISOString()
      .replace("T", " ")
      .replace("Z", " ")
  );
  const [selectSpotOnDate, setSelectSpotOnDate] = useState(
    new Date(-(new Date().getTimezoneOffset() * 60000))
      .toISOString()
      .replace("T", " ")
      .replace("Z", " ")
  );

  useEffect(() => {
    fetchProfile();
}, []);

const fetchProduct = async () => {
    await axios.get(`http://localhost:8000/api/dog_profiles/${id}`).then(({data}) => {
        const { title, description } = data.product;
        setTitle(title);
        setDescription(description);
    }).catch(({response:{data}}) => {
        Swal.fire({
            text: data.message,
            icon: "error"
        })
    })
}

const changeHandler = (event) => {
    setImage(event.target.files[0]);
}

const updateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('_method', 'PATCH');
    formData.append('title', title);
    formData.append('description', description);
    if (image !== null) {
        formData.append('image', image);
    }

    await axios.post(`http://localhost:8000/api/products/${id}`, formData).then(({data}) => {
        Swal.fire({
            icon: "success",
            text: data.message
        })
        navigate("/")
    }).catch(({response}) => {
        if (response.status === 422) {
            setValidationError(response.data.erros)
        } else {
            Swal.fire({
                text: response.data.message,
                icon: "error"
            })
        }
    })
}

  return (
    <div>EditProfile</div>
  )
}

export default EditProfile