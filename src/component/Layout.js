import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';



const Layout = () => {
  return (
    <>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="whoim">Quien soy</Nav.Link>
              <Nav.Link href="services">Servicios</Nav.Link>
              <Nav.Link href="contact">Contacto</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
};

export default Layout;