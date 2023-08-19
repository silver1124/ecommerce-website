import { Row, Col, Button } from "react-bootstrap";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = (props) => {
  return (
    <div
      className="modal-body mt-2"
      style={{
        position: "fixed",
        right: "0",
        width: "420px",
        background: "white",
        height: "800px",
        border: "1px solid red",
        float: "right",
        overflow: "hidden",
        top: '35px'
      }}
    >
      <Row className="d-flex flex-row-reverse mt-1 mx-2">
        <Button
          className="p-1 bg-secondary"
          style={{ width: "20px" }}
          onClick={props.onClose}
        >
          x
        </Button>
      </Row>
      <Row className="text-center mt-2">
        <Col className="fw-bold fs-1 p-2">Cart</Col>
      </Row>
      <Row className="mt-1 d-flex fw-bold text-center fs-4 ">
        <table>
          <thead className="d-flex justify-content-evenly fs-4">
            <tr>Item</tr>
            <tr>Quantity</tr>
            <tr>Price</tr>
          </thead>
        </table>
      </Row>

      <div className="mt-3 d-flex flex-column list-unstyled">
        {cartElements.map((item) => (
          <div className="d-flex mt-3 justify-content-around">
            <div key={item.title}>{item.title}</div>
            <div>{item.quantity}</div>
            <div>{item.price}</div>
            <Button variant="danger">Remove</Button>
          </div>
        ))}
      </div>

      <div className="fw-bold fs-3 d-flex justify-content-end p-2">
        Total $0
      </div>

      <Row className="d-flex justify-content-center fw-bold mt-3">
        <Button style={{ width: "150px", height: "50px" }} variant="info">
          PURCHASE
        </Button>
      </Row>
    </div>
  );
};

export default Cart;