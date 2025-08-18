import { Row, Col } from "react-bootstrap";

export default function Research() {
  return (
    <div className="pt-2 ">
      <section className="py-5">
        <div className="container">
          <h1 className=" text-danger text-center mb-5">
            Research & Development
          </h1>

          <Row className="align-items-center mb-5 g-5">
            <Col md={6}>
              <img
              src="/research/research-1.png"
              alt="Our Work"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
                
              }}
              ></img>
            </Col>
            <Col md={6}>
              <h3 className=" text-primary">
                Innovating for a Sustainable Future
              </h3>
              <p className="mt-3" style={{ textAlign: "justify" }}>
                We develop advanced microbial solutions like S1 fungi and S3
                bacteria. They control flies, suppress odor, and speed up waste
                decomposition. Our work improves soil health, farm hygiene, and
                productivity. All solutions are eco-friendly and tailored to
                farmers’ needs.
              </p>
            </Col>
          </Row>

          <Row className="align-items-center mb-5 flex-md-row-reverse g-5">
            <Col md={6}>
              <div>
              <img
              src="/research/research-2.png"
              alt="Our Work"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
                
              }}
              ></img>
              
                
              </div>
            </Col>
            <Col md={6}>
              <h3 className=" text-primary">Future Developments</h3>
              <p className="mt-3" style={{ textAlign: "justify" }}>
                We are expanding microbial solutions into dairy farm waste
                treatment and organic farming pest control. The aim is to reduce
                chemical use and enhance farm productivity. We invest in
                biotechnology research and expert partnerships. Our vision is to
                be a global leader in sustainable agricultural technology.
              </p>
            </Col>
          </Row>

          <Row className="align-items-center mb-5 g-5">
            <Col md={6}>
             <img
              src="/research/research-3.png"
              alt="Our Work"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
                
              }}
              ></img>
            </Col>
            <Col md={6}>
              <h3 className=" text-primary">
                Commitment to Community & Environment
              </h3>
              <p className="mt-3" style={{ textAlign: "justify" }}>
                We improve public sanitation and protect natural resources
                through sustainable microbial solutions. Our work empowers poor
                and marginalized farmers for better livelihoods. By reducing
                pollution, we create healthier farms and cleaner communities.
                Science meets grassroots action for lasting environmental
                impact.
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}
