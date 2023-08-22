import React, { useContext } from "react";
import { Row, Col, Button, Table } from "react-bootstrap";
import CartContext from "../store/CartContext";


const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const total = cartCtx.total;
  console.log(cartCtx.cart, "Inside cart");

  return (
    <div
      className="modal-body mt-2"
      style={{
        position: "fixed",
        right: "0",
        width: "450px",
        background: "white",
        height: "800px",
        border: "1px solid red",
        float: "right",
        overflow: "hidden",
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

      <Table>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
          </tr>
        </thead>
        <tbody>
          {cartCtx.cart.map((item) => (
            <tr key={item.title}>
              <td>
                <img src={item.imageUrl} width="50px" alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <Button onClick={cartCtx.addtoCart.bind(null, item)}>
                  {" "}
                  add{" "}
                </Button>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={cartCtx.removeFromCart.bind(null, item)}
                >
                  {" "}
                  remove{" "}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="fw-bold fs-3 d-flex justify-content-end p-2">
        Total ${total}
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
