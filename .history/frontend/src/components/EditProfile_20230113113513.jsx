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

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [validationError, setValidationError] = useState({});

  return (
    <div>EditProfile</div>
  )
}

export default EditProfile