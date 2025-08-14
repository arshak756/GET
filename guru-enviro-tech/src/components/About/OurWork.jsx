import { Container, Row, Col } from "react-bootstrap";

export default function OurWork() {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center g-5">
          <Col md={6} className="order-md-2">
            <h2 style={{ color: "var(--primary-blue)", fontWeight: "700" }}>
              Our Work
            </h2>
            <p style={{ textAlign: "justify" }}>
              Since 2018, Guru Enviro Tech has been delivering innovative microbial solutions for agriculture and poultry, specializing in fly control, sanitation, and waste management. Our eco-friendly products — including biofertilizers, EM solutions, decomposers, and pest control — restore ecological balance, improve productivity, and safeguard livestock health. Implemented in 200+ farms across multiple states, our solutions achieve 98.6% fly control efficiency and 96% eco-friendliness. Every project is backed by assessment, tailored solutions, training, and ongoing support for long-lasting results.
            </p>
          </Col>
          <Col md={6} className="order-md-1">
            <img
              src="/about-2.png" 
              alt="Our Work"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
                
              }}
              ></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
