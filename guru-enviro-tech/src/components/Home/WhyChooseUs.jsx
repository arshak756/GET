import { Container, Row, Col } from "react-bootstrap";

export default function WhyChooseUs() {
  const stats = [
    { label: "Efficiency", value: "98.6%" },
    { label: "Happy Farmers", value: "96%" },
    { label: "Eco-Friendly", value: "100%" },
  ];

  return (
    <section className="py-5 bg-white">
      <Container className="text-center">
        
        <h2 className="fw-bold text-danger mb-3">Why Choose Us</h2>

       
        <p className="text-muted mb-4" style={{ maxWidth: "700px", margin: "0 auto" }}>
          "Revolutionizing fly control and sustainability in poultry farming with innovative microbial solutions."
        </p>

       

       
        <Row className="justify-content-center">
          {stats.map((stat, idx) => (
            <Col key={idx} xs={12} md={4} className="mb-4">
              <div
                style={{
                  backgroundColor: "#14213D",
                  borderRadius: "20px",
                  padding: "30px 20px",
                  color: "white",
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundColor: "#C1121F",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 15px",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  {stat.value}
                </div>
                <div className="fw-semibold">{stat.label}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
