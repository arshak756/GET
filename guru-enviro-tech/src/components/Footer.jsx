import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
    return (
        <footer className="bg-dark text-white">
            <Container fluid className="py-4 px-4">
                <Row className="text-center text-md-start gy-4">


                    <Col xs={12} md={4}>
                        <h5 className="fw-bold">Guru Enviro Tech</h5>
                        <p className="small mb-0">
                            Eco-friendly microbial solutions for poultry farms – reducing flies,
                            controlling odor, and improving hygiene.
                        </p>
                    </Col>


                    <Col xs={12} md={4}>
                        <h6 className="fw-bold mb-2">Quick Links</h6>
                        <ul className="list-unstyled small mb-0">
                            <li className="mb-1">
          <span
              onClick={() => navigate("/")}
              className="text-white text-decoration-none"
              style={{ cursor: "pointer" }}
          >
            Home
          </span>
                            </li>
                            <li className="mb-1">
          <span
              onClick={() => navigate("/about")}
              className="text-white text-decoration-none"
              style={{ cursor: "pointer" }}
          >
            About Us
          </span>
                            </li>
                            <li className="mb-1">
          <span
              onClick={() => navigate("/featuredsolutions")}
              className="text-white text-decoration-none"
              style={{ cursor: "pointer" }}
          >
            Featured Solutions
          </span>
                            </li>

                            <li className="mb-1">
          <span
              onClick={() => navigate("/research")}
              className="text-white text-decoration-none"
              style={{ cursor: "pointer" }}
          >
            R&D
          </span>
                            </li>

                            <li className="mb-1">
          <span
              onClick={() => navigate("/testimonials")}
              className="text-white text-decoration-none"
              style={{ cursor: "pointer" }}
          >
            Testimonials
          </span>
                            </li>
                            <li>
          <span
              onClick={() => navigate("/contactus")}
              className="text-white text-decoration-none"
              style={{ cursor: "pointer" }}
          >
            Contact Us
          </span>
                            </li>
                        </ul>
                    </Col>

                    <Col xs={12} md={4}>
                        <h6 className="fw-bold mb-2">Contact Us</h6>
                        <p className="small mb-1">Erode, Tamil Nadu, India</p>
                        <p className="small mb-1">
                            <a href="tel:+918940935333" className="text-white text-decoration-none">
                                +91 89409 35333
                            </a>
                        </p>
                        <p className="small mb-0">
                            <a href="mailto:guruenvirotech@gmail.com" className="text-white text-decoration-none">
                                guruenvirotech@gmail.com
                            </a>
                        </p>
                    </Col>
                </Row>

                <hr className="border-light opacity-25 my-3" />

                <div className="text-center small">
                    © {new Date().getFullYear()} Guru Enviro Tech. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}
