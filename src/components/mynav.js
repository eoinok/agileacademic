import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Mynav() {
  
        return (
          <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary">

              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link p-6 href="/about">About</Nav.Link>
                  <Nav.Link p-6 href="home">Blog</Nav.Link>
                  <Nav.Link p-6 href="#deets">More deets</Nav.Link>
                  <Nav.Link p-6 eventKey={2} href="#memes">
                    Dank memes
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>

          </Navbar>
        );
      }
      


export default Mynav