import { Container, Row, Col } from "react-bootstrap";

export default function WhoWeAreSection() {
  return (
    <section className="py-5" >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 style={{ color: "var(--primary-blue)", fontWeight: "700" }}>
              Who We Are
            </h2>
            <p style={{ textAlign: "justify" }}>
              Founded in April 2018 in Sathiyamangalam, <strong>Guru Enviro Tech</strong> began
              as a small biofertilizer manufacturing unit with a mission to
              deliver sustainable solutions for <strong>agriculture, poultry farms, and waste management</strong>.
              Over the years, we have evolved into a leader in <strong>innovative microbial technology</strong>,
              revolutionizing fly control, sanitation, and environmental health in farming communities.
            </p>
            <p style={{ textAlign: "justify" }}>
              Guided by our motto <strong>“GET – Pollution’s Solution”</strong>, we are committed
              to improving public sanitation, safeguarding livestock health, and helping
              farmers enhance productivity through safe, eco-friendly, and scientifically
              proven solutions. Our focus areas include <em>biofertilizers, EM solutions,
              decomposers, nutrient enhancers, pest control, growth promotors, disease
              management, and complete waste treatment systems</em>.
            </p>
            <p style={{ textAlign: "justify" }}>
              Today, our services have been successfully implemented in states including
              Tamil Nadu, Karnataka, Andhra Pradesh, Kerala, Telangana, Odisha, and West Bengal —
              positively impacting hundreds of farms while creating local employment and
              promoting sustainable agriculture.
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
