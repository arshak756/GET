import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const steps = [
  {
    title: "Step 1: Assessment",
    description:
      "We visit and evaluate the farm’s fly infestation level, manure condition, and odor impact.",
    image: "", 
  },
  {
    title: "Step 2: Application",
    description:
      "Based on the farm environment, we recommend the right Microbial Solution variant (1L, 5L, or 20L).",
    image: "", 
  },
  {
    title: "Step 3: Long-Term Control",
    description:
      "Our team applies the Fly Control Base Solution containing targeted fungi (S1) and bacteria (S3) strains.",
    image: "",
  },
];

const HowItWorks = () => {
  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center text-danger">How It Works</h2>
      <Row className="g-4">
        {steps.map((step, index) => (
          <Col key={index} md={4}>
            <Card className="shadow-lg border-0 rounded-4 h-100">
              <Card.Img
                variant="top"
                src={step.image}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="fw-bold text-primary">
                  {step.title}
                </Card.Title>
                <Card.Text style={{ fontSize: "0.95rem", color: "#555" }}>
                  {step.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HowItWorks;
