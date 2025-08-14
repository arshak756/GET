import { Container, Row, Col } from "react-bootstrap";

export default function TheTeam() {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center g-5">
          <Col md={6}>
            <h2 style={{ color: "var(--primary-blue)", fontWeight: "700" }}>
              The Team
            </h2>
            <p style={{ textAlign: "justify" }}>
              Guru Enviro Tech is powered by 15 skilled professionals including microbiologists, agricultural engineers, field technicians, and customer specialists, united by a passion for sustainable farming and environmental care. Our combined expertise and hands-on field experience enable us to create science-backed, farmer-friendly solutions that deliver real results. We work closely with farmers, offering training, ongoing support, and reliable solutions that enhance productivity, animal welfare, and environmental health.
            </p>
          </Col>
          <Col md={6}>
             <img
              src="/about-3.png" 
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
