import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => (
  <Navbar expand="lg" className="bg-transparent">
    <Container fluid>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto justify-content-center gap-5 text-secondary">
          <Nav.Link href="#home">TRENDING</Nav.Link>
          <Nav.Link href="#link">PODCAST</Nav.Link>
          <Nav.Link href="#link">MOODS AND GENRES</Nav.Link>
          <Nav.Link href="#link">NEW RELEASES</Nav.Link>
          <Nav.Link href="#link">DISCOVER</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default NavBar;