import { Container, Row, Col, Button } from "react-bootstrap";

export default function AboutPreview() {
  return (
    <section className="py-5">
      <Container>
        <h2
          className="text-center mb-5 text-danger"
          style={{ fontWeight: "600", fontSize: "2.5rem" }}
        >
          Who We Are
        </h2>
        <Row className="align-items-center justify-content-around">
          <Col md={6} className="mb-4 mb-md-0">
            <p className="mb-3 fs-5 ">
              At Guru Enviro Tech, we deliver eco-friendly microbial solutions
              that tackle fly control, odor reduction, and foster environmental
              sustainability. Since 2018, our mission has been to transform
              poultry farms and agriculture through innovative biofertilizer
              technologies.
            </p>
            <p className="mb-4 fs-5">
              We’re passionate about sustainable farming that benefits farmers
              and communities alike. Our solutions improve farm hygiene, boost
              productivity, and minimize environmental impact — all while
              promoting a healthier planet.
            </p>
            <Button
              variant="outline-primary"
              href="/about"
              className="mt-3"
              style={{
                borderRadius: "30px",
                padding: "8px 25px",
                fontWeight: "500",
              }}
            >
              Learn More About Us
            </Button>
          </Col>
          <Col md={5}>
            <img
              src="/who.jpg"
              alt="Our Mission"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "350px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
