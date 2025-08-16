import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

export default function Contactus() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-5 bg-light mt-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h1 className="text-center mb-4 fw-bold">
              <span className="text-danger">Contact</span>{" "}
              <span className="text-primary">Us</span>
            </h1>

            {submitted ? (
              <Alert variant="success" className="text-center">
                 Thank you! We’ll get back to you soon.
              </Alert>
            ) : (
              <Form onSubmit={handleSubmit} noValidate>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                    placeholder="Your name"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    placeholder="example@email.com"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                    placeholder="Write your message..."
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid">
                  <Button variant="danger" type="submit" size="lg">
                    Send Message
                  </Button>
                </div>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
