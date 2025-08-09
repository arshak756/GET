import { Container, Row, Col, Button } from "react-bootstrap";

export default function AboutPreview() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src="/public/who.png" 
              alt="About Us"
              className="img-fluid rounded"
            />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold mb-3">Who We Are</h2>
            <p>
              Guru Enviro Tech delivers eco-friendly microbial solutions focused on fly control, odor reduction,
              and environmental sustainability. Our journey began in 2018, aiming to improve poultry farms and
              agricultural health through biofertilizer innovation.
            </p>
            <Button variant="dark" href="/about">Read More</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
