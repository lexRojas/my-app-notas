import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <i class="fa-sharp fa-solid fa-book-open-reader"></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Vistas</Nav.Link>
            <Nav.Link href="#link">Sobre App</Nav.Link>
            <NavDropdown title="Acciones" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">Seguridad</NavDropdown.Item>
              
              <NavDropdown title="Catálogos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Estudiantes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Materias</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Periodos</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
