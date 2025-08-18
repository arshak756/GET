import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const steps = [
  {
    title: "Step 1: Assessment",
    description:
      "Our experts visit your farm to assess fly infestation, manure status, and overall odor impact, ensuring tailored pest management for your unique environment.",
    image: "/how/how-1.png",
  },
  {
    title: "Step 2: Application",
    description:
      "Based on our assessment, we recommend the right Microbial Solution variant (1L, 5L, or 20L) to match your farm's needs, optimizing effectiveness and cost.",
    image: "/how/how-2.png",
  },
  {
    title: "Step 3: Long-Term Control",
    description:
      "We apply a specialized Fly Control Base Solution with targeted fungi (S1) and bacteria (S3) that breaks down manure, reduces flies, and controls odor for sustainable results.",
    image: "/how/how-3.png",
  },
];

const HowItWorks = () => {
  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center text-danger">How It Works</h2>
      <Row className="g-5">
        {steps.map((step, index) => (
          <Col key={index} md={4}>
            <Card className="shadow-lg border-0 rounded-4 h-100 ">
              <Card.Img
                variant="top"
                src={step.image}
                style={{
                  height: "350px",
                  objectFit: "cover",
                  backgroundColor: "#f8f9fa", 
                  padding: "10px",
                }}
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
