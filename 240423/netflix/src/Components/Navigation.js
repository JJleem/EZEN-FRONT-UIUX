import React from "react";
import {
  Button,
  Form,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <img
          src="https://cromidi.cafe24.com/netflix/netflix.png"
          alt="netflix"
          width={100}
        />

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link to="/" className="nav-item">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/movies" className="nav-item">
                Movies
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/" className="nav-item">
                Tv
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/" className="nav-item">
                Animation
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/" className="nav-item">
                Sport
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/" className="nav-item">
                Entertainment
              </Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
