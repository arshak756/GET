import { Container, Row, Col } from "react-bootstrap";

export default function TheTeam() {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 style={{ color: "var(--primary-blue)", fontWeight: "700" }}>
              The Team
            </h2>
            <p style={{ textAlign: "justify" }}>
              At <strong>Guru Enviro Tech</strong>, our strength lies in our people.
              We are a close-knit team of <strong>15 skilled professionals</strong> —
              including microbiologists, agricultural engineers, field technicians,
              and customer service specialists — united by a shared passion for
              sustainable farming and environmental care.
            </p>
            <p style={{ textAlign: "justify" }}>
              Our team’s diverse expertise combines <strong>technical proficiency,
              problem-solving skills, and hands-on field experience</strong>, enabling
              us to design and deliver <em>science-backed, farmer-friendly</em> solutions
              that work in real-world conditions. From product formulation to on-site
              application and aftercare, we provide complete end-to-end support.
            </p>
            <p style={{ textAlign: "justify" }}>
              We believe in building <strong>long-term partnerships with farmers</strong>,
              empowering them with knowledge, practical training, and reliable solutions
              that improve productivity, animal welfare, and environmental health.
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
