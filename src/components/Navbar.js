import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from '../assets/logo.png'; // Correct the path based on your project structure

function Collapsible() {
  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="playpen-sans-brand">
          <img
            alt=""
            src={logo}
            width="45"
            height="45"
            className="d-inline-block align-top"
          />{' '}Ambiance Space
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto text-center px-30">
            <Nav.Link href="#about-us">About us</Nav.Link>
            <NavDropdown title="Services" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#services/1">1</NavDropdown.Item>
              <NavDropdown.Item href="#services/2">2</NavDropdown.Item>
              <NavDropdown.Item href="#services/3">3</NavDropdown.Item>
              <NavDropdown.Item href="#services/4">4</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#projects" id="nav-link">Projects</Nav.Link>
            <Nav.Link href="#interior-design">Interior Design</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
          </Nav>
          <Nav className="text-center">
            <Button variant="primary" href="#contact-us" className="mx-auto nav-link-button">
              Contact us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Collapsible;
