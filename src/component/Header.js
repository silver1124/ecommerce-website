import { Button, Container, Nav, Navbar, Col } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import { Link } from 'react-router-dom';

const Header = props => {

  const cartCtx = useContext(CartContext)
  const numberOfItems = cartCtx.cart.reduce((sum, item)=>{
    return sum + item.quantity
  },0)

  return (
    <div>
      <Navbar bg="dark" expand="sm" style={{height: "35px"}} className= "fixed-top" variant="dark">
        <Container>
        <Col className="col-1 "></Col>
        <Col>
            <Nav className="me-auto d-flex justify-content-center">
              <Nav.Link href="Home">Home</Nav.Link>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/About">About</Nav.Link>
            </Nav>
          </Col>
          <Col  className="col-1 d-flex justify-content-center ">
            <Nav>
              <Button onClick={props.onShowCart}>Cart
              </Button>              
              <span className="badge text-info">{numberOfItems}</span>
            </Nav>
          </Col>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
