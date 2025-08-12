import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container fluid className="py-4 px-5">
        <Row className="text-center text-md-start">
          
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Guru Enviro Tech</h5>
            <p className="small">
              Eco-friendly microbial solutions for poultry farms – reducing flies,
              controlling odor, and improving hygiene.
            </p>
          </Col>

         
          <Col md={4} className="mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled small">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/featuredsolutions" className="text-white text-decoration-none">Featuredsolutions</a></li>
              <li><a href="/contactus" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>

         
          <Col md={4} className="mb-3">
            <h6 className="fw-bold">Contact</h6>
            <p className="small mb-1"> Erode, Tamil Nadu, India</p>
            <p className="small mb-1"> +91 98765 43210</p>
            <p className="small"> info@guruenvirotech.com</p>
          </Col>
        </Row>

        <hr className="border-light opacity-25 my-2" />

        <div className="footer-bottom text-center py-2 small">
          © {new Date().getFullYear()} Guru Enviro Tech. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
