import { Button, Container, Col, Row } from "react-bootstrap";
import { Fragment } from "react";

const merch = (
    <div style={{marginTop:'100px'}}>{" "}
      <h2
        style={{
          textAlign: "center",
          marginTop: "40px",
          fontFamily: "cursive",
        }}
      >
        {" "}
        Merch
      </h2>
    </div>
  );

  const  Merch = () => {
    return(
      <Container style={{ width: "1000px", marginTop: "20px" }}>
        {merch}
      <Row>
        <Container className="col-6 mt-4 ml-3">
          <Col >
            <div className="d-flex flex-column align-items-center">
              <h2>T-Shirt</h2>
              <div>
                <img
                  src="https://prasadyash2411.github.io/ecom-website/img/Shirt.png"
                  alt="T-shirt"
                  width="250px"
                />
              </div>
              <div className="d-flex justify-content-between" style={{ width: "300px" }}>
                <h6 className="mt-3"> $19.99</h6>
                <Button variant="info">Add to Cart</Button>
              </div>
            </div>
          </Col>
        </Container>
        <Container className="col-6 mt-4 ml-3">
          <Col >
            <div className="d-flex flex-column align-items-center">
              <h2>Coffee</h2>
              <div>
                <img
                  src="https://prasadyash2411.github.io/ecom-website/img/Cofee.png"
                  alt="Coffee"
                  width="250px"
                  height="250px"
                />
              </div>
              <div className="d-flex justify-content-between" style={{ width: "300px" }}>
                <h6 className="mt-3"> $6.99</h6>
                <Button variant="info">Add to Cart</Button>
              </div>
            </div>
          </Col>
        </Container>
      </Row>
      <div className="text-center mt-5 ">
          <Button variant="secondary" className="p-2 text-info fw-bolder">See the Cart</Button>
      </div>
    </Container>
  );
};

export default Merch;