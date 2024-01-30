import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
      return (
            <Navbar expand="lg" className="bg-body-tertiary">
                  <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="me-auto">
                                    <Nav.Link href="#home"><Link to='/'>Student</Link></Nav.Link>
                                    <Nav.Link href="#prdi"><Link to='/view'>StudentView</Link></Nav.Link>

                              </Nav>
                        </Navbar.Collapse>
                  </Container>
            </Navbar>
      )
}

export default Header