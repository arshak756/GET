import { Container, Button } from "react-bootstrap";

export default function Home() {
  return (
    <section
      className="d-flex align-items-center text-white"
      style={{
        minHeight: "60vh",
        backgroundImage: "url('/public/image.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
    
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      ></div>

      
      <Container
        className="text-start"
        style={{ position: "relative", zIndex: 2 }}
      >
        <h1 className="fw-bold mb-3 display-3">
          <span className="text-danger">G</span>URU{" "}
          <span className="text-danger">E</span>NVIR
          <span className="text-danger">O</span>{" "}
          <span className="text-danger">T</span>ECH
        </h1>
        <p className="fs-5 mb-2">
          Delivering eco-friendly microbial solutions for a cleaner tomorrow
        </p>
        <p className="fs-5 mb-4">
          Sustainable Farming for a Healthier Planet
        </p>
        <Button variant="danger" size="lg" className="px-4">
          Learn More
        </Button>
      </Container>
    </section>
  );
}
