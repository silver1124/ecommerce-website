import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid style={{ height: "100px", background: "#56CCF2" ,marginBottom: "0"}}>
      <Row className="mt-4 p-2">
        <Col className="col-6 mt-2 fw-bolder text-center ">
          <h2 style={{ fontFamily: "sans-serif",color: "white",fontSize: "50px" }}> The Generics</h2>
        </Col>
        <Col className="col-6 mt-4">
          <div className="d-flex justify-content-evenly ml-2 mr-3"> 
          <img src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg" alt="YT"  height="30px" width="30px"  />
          <img src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png" alt= "spotify"  height="30px" width="30px" />
          <img src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png" alt="fb" height="30px" width="30px" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;