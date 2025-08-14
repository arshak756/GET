import { Container, Row, Col } from "react-bootstrap";

export default function WhoWeAreSection() {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
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
              communities. Our services span Tamil Nadu, Karnataka, Andhra
              Pradesh, Kerala, Telangana, Odisha, and West Bengal.
            </p>
          </Col>
          <Col md={6}>
            <div
              style={{
                height: "300px",
                backgroundColor: "#e9ecef",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                fontWeight: "bold",
                color: "#6c757d",
              }}
            >
              Image Coming Soon
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
