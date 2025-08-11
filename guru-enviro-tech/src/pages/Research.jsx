import { Row, Col } from "react-bootstrap";

export default function Research() {
  return (
    <div className="mt-5 pt-4">
      <section className="py-5 ">
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
              <h3 className="fw-bold text-primary">Innovating for a Sustainable Future</h3>
              <p className="mt-3">
                At Guru Enviro Tech, our R&D team is constantly working to develop
                innovative microbial solutions for pollution control, waste
                management, and sustainable farming. Our mission is to create
                eco-friendly products that deliver measurable results while
                reducing environmental impact.
              </p>
              <p>
                We invest heavily in laboratory testing, field trials, and
                collaborative research with agricultural experts to ensure every
                product we launch meets the highest quality standards.
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
              <h3 className="fw-bold text-primary">Field Testing & Real-World Results</h3>
              <p className="mt-3">
                Our research doesn’t end in the lab. We conduct real-world
                field testing on active poultry farms to measure performance
                under practical conditions. This ensures our solutions not only
                work in controlled environments but also deliver consistent
                results for farmers.
              </p>
              <p>
                Each trial is monitored by our technical team, who collect
                detailed data on fly population, odour levels, and farm hygiene
                improvements over time.
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
                We are working on expanding our product range to tackle
                challenges beyond poultry farming — including dairy waste
                treatment, aquaculture hygiene, and organic farming pest
                management.
              </p>
              <p>
                Our long-term goal is to become a global leader in sustainable
                agricultural solutions, empowering farmers to improve productivity
                without harming the planet.
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}


