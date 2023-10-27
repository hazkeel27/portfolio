import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="border-bottom border-body" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand>Hazkeel A. Qureshi</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
              Resume
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
