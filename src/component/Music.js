import { Button, Container, Col, Row } from "react-bootstrap";
import { Fragment } from "react";
import Merch from './Merch'

const productsArr = [
  {
    title: "Album 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Album 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Album 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Album 4",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Generic = (
  <div
    style={{
      background: "grey",
      fontSize: "100px",
      height: "170px",
      color: "white",
      textAlign: "center",
    }}
  >
    {" "}
    The Generics{" "}
  </div>
);

const Music = (
  <div>{" "}
    <h2
      style={{
        textAlign: "center",
        marginTop: "40px",
        fontFamily: "cursive",
      }}
    >
      {" "}
      Music
    </h2>
  </div>
);

const products = productsArr.map((item, index) => (
  <Col key={index} className="col-6 ">
    <div className=" mt-4 d-flex flex-column align-items-center  ">
      <h3>{item.title}</h3>
      <img src={item.imageUrl} alt={item.title} width="250px" />
      <div
        className="d-flex justify-content-between bg-white mt-4"
        style={{ width: "300px" }}
      >
        <h6 className="mr-3 mt-2">${item.price}</h6>
        <Button variant="info" className="mr-3">
          Add to Cart
        </Button>
      </div>
    </div>
  </Col>
));




const ProductList = () => {
  return (
    <Fragment>
      {Generic}
      <Container style={{ width: "900px" }}>
        {Music}
        <Row>{products}</Row>
      </Container>
      <Merch/>
    </Fragment>
  );
};

export default ProductList;
