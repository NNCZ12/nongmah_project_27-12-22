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
    fetchProduct();
}, []);



  return (
    <div>EditProfile</div>
  )
}

export default EditProfile