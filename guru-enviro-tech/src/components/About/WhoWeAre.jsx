import { Container, Row, Col } from "react-bootstrap";

export default function WhoWeAreSection() {
  return (
    <section className="py-5">
      <div className="text-center mb-5">
          <h1
            style={{
              color: "var(--primary-red)",
              fontWeight: "700",
              marginBottom: "15px",
            }}
          >
            About Guru Enviro Tech
          </h1>
          </div>
      <Container>
        <Row className="align-items-center g-5">
          <Col md={6}>
            <h2 style={{ color: "var(--primary-blue)", fontWeight: "700" }}>
              Who We Are
            </h2>
            <p style={{ textAlign: "justify" }}>
              Guru Enviro Tech, founded in April 2018 in Sathiyamangalam, began
              as a small biofertilizer unit supporting farmers and poultry farms.
              Guided by our motto “GET – Pollution’s Solution”, we focus on
              sustainable agriculture, waste management, and public sanitation.
              We offer biofertilizers, EM solutions, decomposers, pest control,
              and fly management for poultry farms. Our eco-friendly microbial
              technologies benefit farmers while creating employment for local
              communities.
            </p>
          </Col>
          <Col md={6}>
            <img
              src="/About/about-1.png"
              alt="Who We Are"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
