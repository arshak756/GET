import { Container, Row, Col } from "react-bootstrap";

export default function OurWork() {
  return (
    <section className="py-5 ">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="order-md-2">
            <h2 style={{ color: "var(--primary-blue)", fontWeight: "700" }}>
              Our Work
            </h2>
            <p style={{ textAlign: "justify" }}>
              Since our founding in 2018, <strong>Guru Enviro Tech</strong> has been
              dedicated to providing <strong>innovative microbial solutions</strong> that improve
              hygiene, boost productivity, and protect the environment in both agriculture
              and poultry sectors. Guided by our motto <em>"GET – Pollution’s Solution"</em>,
              we focus on the grassroots development of farmers while tackling critical
              challenges in <strong>fly control, sanitation, and waste management</strong>.
            </p>
            <p style={{ textAlign: "justify" }}>
              Our expertise spans <strong>biofertilizer preparation, EM solutions, decomposers,
              nutrient enhancers, pest and disease control, and comprehensive waste
              treatment systems</strong>. These solutions are scientifically designed to restore
              ecological balance, reduce odors, and create healthier environments for livestock
              and crops alike.
            </p>
            <p style={{ textAlign: "justify" }}>
              Over the years, we have successfully implemented our solutions in
              <strong> 200+ farms</strong> across Tamil Nadu, Karnataka, Andhra Pradesh, Kerala,
              Telangana, Odisha, and West Bengal — achieving <strong>98.6% efficiency</strong> in
              fly control and <strong>96% eco-friendliness</strong>. Every project includes site
              assessments, custom solution design, hands-on application training, and
              ongoing performance monitoring to ensure lasting results.
            </p>
          </Col>
          <Col md={6} className="order-md-1">
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
