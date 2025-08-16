import {useState} from "react";
import {NavLink} from "react-router-dom";
import {Navbar, Nav, Container, Offcanvas} from "react-bootstrap";
import logo from "../assets/logo.png";

export default function Header() {
    const [show, setShow] = useState(false);

    return (
        <Navbar expand="lg" sticky="top" className="shadow-sm py-2 bg-white">
            <Container>
                {/* Brand Logo */}
                <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
                    <img src={logo} alt="Guru Enviro Tech Logo" height="50" className="me-2"/>
                    <div>
                        <div className="fw-bold fs-4">
                            <span style={{color: "var(--primary-red)"}}>G</span>
                            <span style={{color: "var(--primary-blue)"}}>URU </span>
                            <span style={{color: "var(--primary-red)"}}>E</span>
                            <span style={{color: "var(--primary-blue)"}}>NVIRO </span>
                            <span style={{color: "var(--primary-red)"}}>T</span>
                            <span style={{color: "var(--primary-blue)"}}>ECH</span>
                        </div>
                        <div
                            style={{fontSize: "0.8rem", color: "var(--primary-black)"}}
                            className="fw-semibold"
                        >
                            GET POLLUTION’S SOLUTION
                        </div>
                    </div>
                </Navbar.Brand>

                {/* Toggle button for small screens */}
                <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={() => setShow(true)}/>

                {/* Offcanvas for small screens */}
                <Offcanvas
                    id="offcanvasNavbar"
                    placement="end"
                    show={show}
                    onHide={() => setShow(false)}
                    className="shadow"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="ms-auto fw-semibold">
                            <Nav.Link
                                as={NavLink}
                                to="/"
                                end
                                onClick={() => setShow(false)}
                                className={({isActive}) => (isActive ? "active text-primary" : "")}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="/about"
                                onClick={() => setShow(false)}
                                className={({isActive}) => (isActive ? "active text-primary" : "")}
                            >
                                About Us
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="/featuredsolutions"
                                onClick={() => setShow(false)}
                                className={({isActive}) => (isActive ? "active text-primary" : "")}
                            >
                                Featured Solutions
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="/research"
                                onClick={() => setShow(false)}
                                className={({isActive}) => (isActive ? "active text-primary" : "")}
                            >
                                R&D
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="/testimonials"
                                onClick={() => setShow(false)}
                                className={({isActive}) => (isActive ? "active text-primary" : "")}
                            >
                                Testimonials
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="/contactus"
                                onClick={() => setShow(false)}
                                className={({isActive}) => (isActive ? "active text-primary" : "")}
                            >
                                Contact Us
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>

                {/* Normal nav for large screens */}
                <Navbar.Collapse className="d-none d-lg-flex">
                    <Nav className="ms-auto fw-semibold">
                        <Nav.Link
                            as={NavLink}
                            to="/"
                            end
                            className={({isActive}) => (isActive ? "active text-primary" : "")}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/about"
                            className={({isActive}) => (isActive ? "active text-primary" : "")}
                        >
                            About Us
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/featuredsolutions"
                            className={({isActive}) => (isActive ? "active text-primary" : "")}
                        >
                            Featured Solutions
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/research"
                            className={({isActive}) => (isActive ? "active text-primary" : "")}
                        >
                            R&D
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/testimonials"
                            className={({isActive}) => (isActive ? "active text-primary" : "")}
                        >
                            Testimonials
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/contactus"
                            className={({isActive}) => (isActive ? "active text-primary" : "")}
                        >
                            Contact Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
