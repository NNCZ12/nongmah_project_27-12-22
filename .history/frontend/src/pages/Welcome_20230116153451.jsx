import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/doglogo.png";
import { Col, Row } from "react-bootstrap";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-center h-screen w-screen"
      onClick={() => navigate("/profilelist")}
    >
      <Col>
        <Row>
          <img src={image} className="w-48 mx-auto" alt="Logo" />{" "}
        </Row>
        <Row>
          <div className="text-3xl font-bold text-center mx-auto">NONGMAH</div>{" "}
        </Row>
        <Row className="h-20"></Row>
        {/* <Row> <button className='w-72 mx-auto bg-yellow-600'>Login with Google</button></Row> */}
        <Row >div Tap Anywhere to Continue</Row>
      </Col>
    </div>
  );
}

export default Welcome;
