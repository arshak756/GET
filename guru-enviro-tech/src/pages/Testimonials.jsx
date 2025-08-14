import { Container, Row, Col, Card } from "react-bootstrap";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dhanya Poultry",
      quote: "Guru Enviro Tech’s fly control completely changed our farm hygiene. We saw results in just weeks!",
      image: "/images/dhanya.jpg", 
    },
    {
      name: "Aishwariya Poultry",
      quote: "Persistent fly problems vanished after using their solution. Our team and neighbors are happy again.",
      image: "/images/aishwariya.jpg",
    },
    {
      name: "Shanmuga Poultry",
      quote: "Best long-term fly control we’ve ever used. No recurrence for months!",
      image: "/images/shanmuga.jpg",
    },
    {
      name: "Surya Poultry Farm",
      quote: "From near shutdown to a clean, thriving farm — all thanks to Guru Enviro Tech.",
      image: "/images/surya.jpg",
    },
  ];

  return (
    <section className="py-5">
      <Container>
        <h2 className=" text-center mb-5" style={{ color: "var(--primary-red)" }}>
          What Our Farmers Say
        </h2>
        <Row className="g-4">
          {testimonials.map((t, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="h-100 shadow-sm border-0 rounded-4 text-center p-3">
                <div
                  style={{
                    height: "150px",
                    backgroundColor: "#e9ecef",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="img-fluid" />
                  ) : (
                    <span className="text-muted">Image Coming Soon</span>
                  )}
                </div>
                <Card.Body>
                  <h5 className="fw-bold text-primary">{t.name}</h5>
                  <p className="mt-2" style={{ fontStyle: "italic", fontSize: "0.95rem" }}>
                    "{t.quote}"
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
