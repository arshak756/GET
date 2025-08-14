import { Row, Col } from "react-bootstrap";

export default function Research() {
  return (
    <div className="pt-2">
      <section className="py-5">
        <div className="container">
          <h1 className=" text-danger text-center mb-5">
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
              <h3 className=" text-primary">Innovating for a Sustainable Future</h3>
              <p className="mt-3" style={{ textAlign: "justify" }}>
                Guru Enviro Tech (GET) drives innovation with eco-friendly microbial formulations for agriculture, poultry, and environmental management. Our scientifically engineered strains, such as Adult Fly Target Fungi S1 and Fly Larvae Target Bacteria S3, address fly control, odor suppression, efficient waste decomposition, soil fertility restoration, and pest/disease management. By combining in-house research with practical field insights, we create safe, scalable solutions tailored to farmers' and industries' unique challenges.
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
                  
                  color: "#6c757d",
                }}
              >
                Image Coming Soon
              </div>
            </Col>
            <Col md={6}>
              <h3 className=" text-primary">Future Developments</h3>
              <p className="mt-3" style={{ textAlign: "justify" }}>
                Our innovation journey continues with projects focused on microbial solutions for dairy farm waste treatment, aquaculture hygiene, and organic farming pest control to reduce chemical dependency and enhance productivity. With a clear vision to be a global leader in sustainable agricultural technology, GET invests in advanced biotech research, expert collaborations, and farmer-centric innovations to meet tomorrow’s environmental challenges.
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}
