import { Container, Row, Col } from "react-bootstrap";

function SuccessStories() {
  return (
    <section className="bg-light py-5">
      <Container>
        <h2 className="text-center fw-bold mb-4">Success Stories</h2>
        <Row>
          <Col md={6} className="mb-4">
            <blockquote className="blockquote bg-white p-4 rounded shadow-sm h-100">
              <p className="mb-3">
                "Since using Guru Enviro Tech’s microbial solutions, our poultry farm is cleaner, and fly problems
                have reduced drastically!"
              </p>
              <footer className="blockquote-footer">Suresh Kumar, Poultry Farmer</footer>
            </blockquote>
          </Col>
          <Col md={6} className="mb-4">
            <blockquote className="blockquote bg-white p-4 rounded shadow-sm h-100">
              <p className="mb-3">
                "The odor control product made a big difference. Our workers and chickens are both happier!"
              </p>
              <footer className="blockquote-footer">Lakshmi Agro Farms</footer>
            </blockquote>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default SuccessStories;