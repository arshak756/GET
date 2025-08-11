import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <>
     
      <section
        style={{
          backgroundColor: "var(--primary-blue)",
          color: "white",
          padding: "100px 0",
        }}
      >
        <Container>
          <h1 className="fw-bold" style={{ fontSize: "2.5rem" }}>
            About Guru Enviro Tech
          </h1>
          <p style={{ maxWidth: "900px" }}>
            We are committed to transforming poultry farming into a cleaner,
            healthier, and more sustainable industry through advanced,
            science-backed microbial solutions that work with nature — not
            against it.
          </p>
        </Container>
      </section>

     
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 style={{ color: "var(--primary-blue)" }}>Who We Are</h2>
              <p style={{ textAlign: "justify" }}>
                Guru Enviro Tech is a pioneering agro-environmental solutions
                company specializing in advanced microbial technology for poultry
                farms. Our mission is to eliminate flies, control odors, and
                improve hygiene using safe, eco-friendly, and scientifically
                proven products.
              </p>
              <p style={{ textAlign: "justify" }}>
                Founded in Erode, Tamil Nadu, our journey began with a vision to
                empower farmers with solutions that protect livestock, enhance
                productivity, and safeguard the environment. We bridge the gap
                between modern science and practical, farmer-friendly
                applications.
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

     
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="order-md-2">
              <h2 style={{ color: "var(--primary-blue)" }}>Our Work</h2>
              <p style={{ textAlign: "justify" }}>
                Our work focuses on solving poultry farm hygiene problems at the
                root. We design targeted microbial solutions that restore balance
                to the farm environment, ensuring cleaner, healthier, and more
                productive conditions for livestock.
              </p>
              <p style={{ textAlign: "justify" }}>
                We have served over 200 farms, delivering proven results with a
                98.6% efficiency rate in fly control and 96% eco-friendliness.
                Our process includes farm assessments, tailored solutions,
                application training, and ongoing monitoring.
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

     
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 style={{ color: "var(--primary-blue)" }}>The Team</h2>
              <p style={{ textAlign: "justify" }}>
                Our team is made up of microbiologists, agricultural engineers,
                field technicians, and customer service experts — all working
                together to bring science-based solutions to farms. We believe in
                long-term partnerships with farmers, providing support from
                product selection to aftercare.
              </p>
              <p style={{ textAlign: "justify" }}>
                This multi-disciplinary approach ensures that our solutions are
                not only scientifically advanced but also practical, affordable,
                and effective in real-world farm environments.
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

     
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="order-md-2">
              <h2 style={{ color: "var(--primary-blue)" }}>Focused Areas</h2>
              <p style={{ textAlign: "justify" }}>
                We focus on Featured Solutions, Operations Hub, and R&D to
                deliver high-quality, eco-friendly products. Our flagship
                microbial treatments are designed to control pests, improve air
                quality, and reduce waste naturally.
              </p>
              <p style={{ textAlign: "justify" }}>
                With our Erode-based operations hub and dedicated R&D team, we
                ensure fast delivery, continuous product improvement, and
                solutions that meet evolving environmental standards.
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
                Image 
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
