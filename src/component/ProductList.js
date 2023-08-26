import { Button, Container, Col, Row } from "react-bootstrap";
import { Fragment } from "react";
import CartContext from "../store/CartContext";
import { useContext } from "react";
import { Link } from 'react-router-dom'

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

const merchArr = [
    {
      title: "Album 5",
  
      price: 190,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
    },
    {
      title: "Album 6",
  
      price: 108,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
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


const ProductList = props => {
  const cartCtx = useContext(CartContext)
  return (
    <Fragment>
      {Generic}
      <Container style={{ width: "900px" }}>
        {Music}
        <Row>{productsArr.map((item, index) => (
              <Col key={index} className="col-6 ">
                <div className=" mt-4 d-flex flex-column align-items-center  ">
                  <Link to={`/products/${item.id}`}>
                  <h3>{item.title}</h3>
                  <img src={item.imageUrl} alt={item.title} width="250px" />
                  </Link>
                  <div
                    className="d-flex justify-content-between bg-white mt-4"
                    style={{ width: "300px" }}
                  >
                    <h6 className="mr-3 mt-2">${item.price}</h6>
                    <Button variant="info" className="mr-3" onClick={cartCtx.addtoCart.bind(null, item)}>
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
        </Row>
        {merch}
        <Row>
          {merchArr.map((item, index) => (
            <Col key={index} className="col-6 ">
              <div className=" mt-4 d-flex flex-column align-items-center">
              <Link to={`/products/${item.id}`}>
                <h3>{item.title}</h3>
                <img src={item.imageUrl} alt={item.title} width="250px" />
                </Link>
                <div
                  className="d-flex justify-content-between bg-white mt-4"
                  style={{ width: "300px" }}
                >
                  <h6 className="mr-3 mt-2">${item.price}</h6>
                  <Button
                    variant="info"
                    className="mr-3"
                    onClick={cartCtx.addtoCart.bind(null, item)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5 ">
          <Button variant="secondary" className="p-2 text-info fw-bolder" onClick={props.onShowCart}>
            See the Cart</Button>
        </div>
      </Container>
    </Fragment>
  );
};

export default ProductList;
