import { Container } from "react-bootstrap";

export default function HeroSection() {
  return (
    <section className="text-center">
      <Container>
        <h1 style={{ color: "var(--primary-red)", }}>
          Our Fly Control Products
        </h1>
        <p className="lead mt-3">
          Revolutionizing fly control in poultry farming with advanced microbial
          solutions that are eco-friendly, effective, and proven on 200+ farms.
        </p>
      </Container>
    </section>
  );
}
