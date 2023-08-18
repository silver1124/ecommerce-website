import { Button, Container, Nav, Navbar, Col } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
        <Col className="col-1 "></Col>
        <Col>
            <Nav className="me-auto d-flex justify-content-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#store">Store</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Col>
          <Col  className="col-1 d-flex justify-content-center ">
            <Nav>
              <Button>Cart</Button>
              <span className="badge text-info">0</span>
            </Nav>
          </Col>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
