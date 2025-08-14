import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function FocusedAreas() {
  const navigate = useNavigate();

  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center g-5">
          <Col md={6} className="order-md-2">
            <h2 style={{ color: "var(--primary-blue)", fontWeight: "700" }}>
              Focused Areas
            </h2>
            <p style={{ textAlign: "justify" }}>
              Guru Enviro Tech focuses on Agriculture, Environment, and Poultry Farms, delivering sustainable microbial solutions for soil health, waste management, and fly control. Our innovations protect the environment, enhance productivity, and promote healthier conditions for farmers, livestock, and industries alike.
            </p>
            <button
              className="btn btn-outline-danger mt-3"
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
            <img
              src="/about-4.png" 
              alt="Our Work"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
                
              }}
              ></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
