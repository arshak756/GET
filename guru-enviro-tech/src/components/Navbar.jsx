import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.png"; 
import "../styles/Navbar.css";

export default function MyNavbar() {
  return (
    <Navbar expand="lg" variant="light" fixed="top" className="shadow-sm py-2">
      <Container>
    
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          
          <img
            src={logo}
            alt="Guru Enviro Tech Logo"
            height="50"
            className="me-2"
          />

          
          <div>
            <div className="fw-bold fs-4">
              <span style={{ color: "var(--primary-red)" }}>G</span>
              <span style={{ color: "var(--primary-blue)" }}>URU </span>
              <span style={{ color: "var(--primary-red)" }}>E</span>
              <span style={{ color: "var(--primary-blue)" }}>NVIRO </span>
              <span style={{ color: "var(--primary-red)" }}>T</span>
              <span style={{ color: "var(--primary-blue)" }}>ECH</span>
            </div>
            <div style={{ fontSize: "0.8rem", color: "var(--primary-black)" }} className="fw-semibold">
            GET POLLUTION’S SOLUTION
            </div>
          </div>
        </Navbar.Brand>

        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-semibold">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
             <Nav.Link as={Link} to="/research">Research</Nav.Link>
            <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link>
            <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
