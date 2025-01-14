import { Outlet, Link, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';
import $ from 'jquery';

//Funciones para estilos del menú

if(window.location.pathname=="/"){
  localStorage.setItem("activeItem","/");
}
else{
  localStorage.setItem("activeItem",window.location.pathname);
}
 
function getClass(id){
  var clase="layout-routing";
  if("/"+id===localStorage.getItem("activeItem")){
    clase+=" active";
  }
  else if(id==="home"&&localStorage.getItem("activeItem")==="/"){
    clase+=" active";
  }

  return clase;
}

//Fin funciones para estilos del menú


const Layout = () => {
  return (
    <>

      <div id="nav-center">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
              <Nav className="me-auto">
                <Nav.Link className={getClass("home")} id="home"  href="/">Inicio</Nav.Link>
                <Nav.Link className={getClass("whoim")} id="whoim"  href="/whoim">Quien soy</Nav.Link>
                <Nav.Link className={getClass("services")} id="services"  href="/services">Servicios</Nav.Link>
                <Nav.Link className={getClass("contact")} id="contact" href="/contact">Contacto</Nav.Link>
              </Nav>
          </Container>
        </Navbar>
      </div>
      <div id="body-center">
        <Outlet />
      </div>
    </>
  )
};

export default Layout;