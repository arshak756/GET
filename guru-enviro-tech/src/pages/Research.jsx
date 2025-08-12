import { Row, Col } from "react-bootstrap";

export default function Research() {
  return (
    <div className="pt-2">
      <section className="py-5">
        <div className="container">
          <h1 className="fw-bold text-danger text-center mb-5">
            Research & Development
          </h1>

          
          <Row className="align-items-center mb-5">
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
            <Col md={6}>
              <h3 className="fw-bold text-primary">
                Innovating for a Sustainable Future
              </h3>
              <p className="mt-3">
                At <strong>Guru Enviro Tech (GET)</strong>, innovation is at the
                heart of everything we do. Our R&D division focuses on creating{" "}
                <strong>eco-friendly microbial formulations</strong> for
                agriculture, poultry, and environmental management. Each strain
                we develop — including <em>Adult Fly Target Fungi S1</em> and{" "}
                <em>Fly Larvae Target Bacteria S3</em> — is scientifically
                engineered to solve real-world problems such as{" "}
                <strong>fly control, odour suppression, efficient waste
                decomposition, soil fertility restoration, and pest/disease
                management</strong>.
              </p>
              <p>
                By combining <strong>in-house laboratory research</strong> with{" "}
                <strong>practical field insights</strong>, we deliver solutions
                that are safe, scalable, and tailored to the unique challenges
                faced by farmers and industries.
              </p>
            </Col>
          </Row>

          
          <Row className="align-items-center mb-5 flex-md-row-reverse">
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
            <Col md={6}>
              <h3 className="fw-bold text-primary">
                Field Testing & Proven Performance
              </h3>
              <p className="mt-3">
                Every GET product undergoes{" "}
                <strong>extensive field trials</strong> before launch. We partner
                with poultry farms and crop fields across{" "}
                <strong>
                  Tamil Nadu, Karnataka, Andhra Pradesh, Kerala, Telangana,
                  Odisha, and West Bengal
                </strong>{" "}
                to evaluate product performance under practical farming
                conditions.
              </p>
              <p>
                Our technical team closely monitors{" "}
                <strong>
                  fly population changes, odour levels (NH₃, H₂S), waste
                  breakdown rates
                </strong>{" "}
                and overall hygiene improvements. Continuous feedback from these
                trials fuels rapid refinement, ensuring{" "}
                <em>98.6% fly control efficiency</em> and{" "}
                <em>96% eco-friendliness</em> in farm environments.
              </p>
            </Col>
          </Row>

          
          <Row className="align-items-center mb-5">
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
            <Col md={6}>
              <h3 className="fw-bold text-primary">Future Developments</h3>
              <p className="mt-3">
                Our journey of innovation is far from over. Current projects in
                the pipeline include{" "}
                <strong>
                  microbial solutions for dairy farm waste treatment, aquaculture
                  hygiene management, and organic farming pest control
                </strong>
                . These new products aim to further reduce chemical dependency
                while boosting farm productivity.
              </p>
              <p>
                With a clear vision to become a{" "}
                <strong>global leader in sustainable agricultural technology</strong>,
                GET continues to invest in{" "}
                <strong>
                  advanced biotech research, expert collaborations, and
                  farmer‑centric innovation
                </strong>{" "}
                to tackle tomorrow’s environmental challenges.
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}
