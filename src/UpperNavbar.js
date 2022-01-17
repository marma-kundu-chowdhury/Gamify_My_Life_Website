import React from 'react';
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";

function UpperNavbar()
{
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <b>GAMIFY MY LIFE</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">FEATURES</Nav.Link>
              <Nav.Link href="#mobileapp">MOBILE APP</Nav.Link>
              <NavDropdown title="MORE" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">ABOUT US</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Future Scope 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Future Scope 2
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  FEEDBACK AND CONNECT
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default UpperNavbar;