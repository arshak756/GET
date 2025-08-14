import { Container, Row, Col } from "react-bootstrap";

export default function WhyChooseUs() {
  const stats = [
    {
      label: "Efficiency",
      value: "98.6%",
      desc: "Our solutions deliver consistently high results, reducing operational costs."
    },
    {
      label: "Happy Farmers",
      value: "96%",
      desc: "Trusted by farmers across the region for improving productivity and hygiene."
    },
    {
      label: "Eco-Friendly",
      value: "100%",
      desc: "Safe for livestock, workers, and the environment with zero harmful chemicals."
    },
  ];

  const features = [
    { icon: "🪰", text: "Farm fly free" },
    { icon: "🚫", text: "Ammonia, H₂S free" },
  ];

  return (
    <section style={{ backgroundColor: "#fff", padding: "60px 0" }}>
      <Container>
        <Row className="align-items-center g-4">
          
         
          <Col md={5}>
            <h4 className="fw-bold text-primary mb-3">Why Choose Us</h4>
            <p style={{ lineHeight: "1.6" }}>
              We combine science-driven microbial technology with a farmer-first
              approach to revolutionize poultry farming. Our solutions help
              maintain cleaner, healthier farm environments while improving
              productivity.
            </p>

            <div className="mt-4">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "14px",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      border: "2px solid red",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      marginRight: "10px",
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      color: "red",
                      fontWeight: "500",
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </Col>

         
          <Col md={7}>
            <Row className="g-3">
              {stats.map((stat, idx) => (
                <Col key={idx} xs={12} sm={4}>
                  <div
                    style={{
                      backgroundColor: "#0d2d58",
                      borderRadius: "20px",
                      textAlign: "center",
                      padding: "20px 15px",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        backgroundColor: "#C1121F",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontWeight: "700",
                        fontSize: "1.2rem",
                        margin: "0 auto 10px",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div style={{ color: "white", fontWeight: "500" }}>
                      {stat.label}
                    </div>
                    <p
                      style={{
                        color: "#d1d5db",
                        fontSize: "0.85rem",
                        marginTop: "6px",
                      }}
                    >
                      {stat.desc}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

        </Row>
      </Container>
    </section>
  );
}
