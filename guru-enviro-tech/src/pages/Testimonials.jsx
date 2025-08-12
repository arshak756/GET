import { Row, Col } from "react-bootstrap";

export default function Testimonials() {
  return (
    <div className=" pt-2">
      <section className="py-5">
        <div className="container">
          <h1 className="fw-bold text-danger text-center mb-5">
            What Our Farmers Say
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
              <h3 className="fw-bold text-primary">Dhanya Poultry</h3>
              <p className="mt-3">
                <h6>A Lockdown Challenge Turned Success</h6>
                In 2020, during the lockdown, Dhanya Poultry faced an
                overwhelming fly infestation, frustrating the local community.
                The farm owner, residing in the U.S., felt immense guilt as this
                was his hometown. Determined to fix the issue, he spent lakhs
                trying various solutions but nothing worked. That’s when he
                found us. After understanding his concerns, we took over the
                farm, implementing a structured, step-by-step approach. Our
                solution not only eliminated the infestation but also
                transformed the farm’s hygiene standards. Today, there isn’t
                even a trace of waste odor nearby. Impressed by the results, the
                owner became one of our strongest advocates—now a dealer who has
                recommended our solutions to over 10 other farms. His success
                story is a testament to how the right approach can turn
                challenges into long-term growth.
              </p>
            </Col>
          </Row>

          <Row className="align-items-center mb-5 flex-md-row-reverse">
            <Col md={6}>
              {/* <img
                src="/images/aishwariya-poultry.jpg"
                alt="Aishwariya Poultry"
                className="img-fluid rounded shadow-sm"
              /> */}
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
              <h3 className="fw-bold text-primary">Aishwariya Poultry</h3>
              <p className="mt-3">
                <h6>
                  Turning the Tide: Aishwariya Poultry’s Fly Infestation Success
                </h6>
                In 2021, Aishwariya Poultry faced severe odour issues and
                persistent fly infestations that disturbed both workers and
                neighbours. Despite spending heavily on chemical sprays, the
                relief was only temporary. When they contacted us, we carefully
                studied the problem and implemented our Fly Control Liquid
                Solution, combined with thorough training for their team on
                precise application methods. Within weeks, the flies disappeared
                and the surrounding air was noticeably fresher. This
                transformation not only improved the farm’s hygiene but also
                rebuilt trust with the local community, boosting both morale and
                productivity. Today, Aishwariya Poultry stands as a shining
                example of how the right solution and dedicated teamwork can
                bring lasting positive change.
              </p>
            </Col>
          </Row>

          <Row className="align-items-center mb-5">
            <Col md={6}>
              {/* <img
                src="/images/shanmuga-poultry.jpg"
                alt="Shanmuga Poultry"
                className="img-fluid rounded shadow-sm"
              /> */}
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
              <h3 className="fw-bold text-primary">Shanmuga Poultry</h3>
              <h6>Shanmuga Poultry’s Long-Term Fly Control Success</h6>
              <p className="mt-3">
                Shanmuga Poultry had experimented with several fly control
                methods, yet none provided lasting relief. Every attempt brought
                only short-term results, leaving the farm vulnerable to
                recurring infestations. Everything changed when we introduced
                our Fly Control Concentrate. This powerful solution not only
                effectively broke down fly breeding grounds but also created an
                environment hostile to fly resurgence, keeping infestations at
                bay for months. Alongside, we guided their team to implement
                best hygiene practices and regular monitoring. Since then,
                Shanmuga Poultry has adopted a preventive maintenance plan using
                our product, ensuring their farm remains clean, healthier, and
                more productive throughout the year. Their experience proves how
                the right strategy, combined with consistent care, can deliver
                sustainable, effective results—transforming pest challenges into
                lasting peace of mind.
              </p>
            </Col>
          </Row>

          <Row className="align-items-center mb-5 flex-md-row-reverse">
            <Col md={6}>
              {/* <img
                src="/images/surya-poultry.jpg"
                alt="Surya Poultry Farm"
                className="img-fluid rounded shadow-sm"
              /> */}
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
              <h3 className="fw-bold text-primary">Surya Poultry Farm</h3>
              <h6>Transforming Surya Poultry Farm From Crisis to Success</h6>
              <p className="mt-3">
                Surya Poultry Farm in Andhra Pradesh faced a severe fly
                infestation that not only disturbed local residents but also
                nearby college students. The crisis grew when authorities
                threatened to shut the farm down. We partnered with the owner,
                asking for three months to turn things around. Our team carried
                out a detailed investigation, pinpointed breeding sources, and
                applied our innovative fly control solution with a structured
                plan. Within weeks, the results were visible, and by the end of
                the third month, the infestation was completely eliminated.
                Today, Surya Poultry Farm operates at full capacity, free from
                fly problems, and stands as one of our proudest success stories
                in Andhra Pradesh.
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}
