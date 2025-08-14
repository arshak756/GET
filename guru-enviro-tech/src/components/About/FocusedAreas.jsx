import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function FocusedAreas() {
  const navigate = useNavigate();

  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="order-md-2">
            <h2 style={{ color: "var(--primary-blue)", fontWeight: "700" }}>
              Focused Areas
            </h2>
            <p style={{ textAlign: "justify" }}>
              Guru Enviro Tech focuses on Agriculture, Environment, and Poultry Farms, delivering sustainable microbial solutions for soil health, waste management, and fly control. Our innovations protect the environment, enhance productivity, and promote healthier conditions for farmers, livestock, and industries alike.
            </p>
            <button
              className="btn btn-outline-primary mt-3"
              style={{
                borderRadius: "30px",
                padding: "8px 25px",
                fontWeight: "500",
              }}
              onClick={() => navigate("/featuredsolutions")}
            >
              Learn More
            </button>
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
                textAlign: "center",
                padding: "1rem",
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
