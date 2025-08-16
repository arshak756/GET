import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleViewProducts = () => {
    navigate("/products"); // ✅ Navigate to Products page
  };

  return (
    <section
      style={{
        height: "50vh",
        background: `linear-gradient(rgba(0, 0, 0, 0.83), rgba(0, 0, 0, 0.83)), url("/carousel-1.png") center/cover no-repeat`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
      }}
    >
      <Container>
        <h1 className="fw-bold display-3">GURU ENVIRO TECH</h1>

        <p className="lead" style={{ maxWidth: "700px", margin: "0 auto" }}>
          Revolutionizing fly control and sustainability in poultry farming with
          innovative microbial solutions.
        </p>

        
        <Button
              variant="danger"
               onClick={() => navigate("/featuredsolutions")}
              className="mt-3"
              style={{
                borderRadius: "30px",
                padding: "8px 25px",
                fontWeight: "500",
              }}
            >
              View Products
            </Button>
      </Container>
    </section>
  );
}
