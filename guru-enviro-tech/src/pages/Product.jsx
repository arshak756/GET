import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Product() {
  return (
    <div className="mt-5 pt-4">
      <section className="py-5 text-center">
        <Container>
          <h1 className="fw-bold" style={{ color: 'var(--primary-red)' }}>
            Our Fly Control Products
          </h1>
          <p className="lead mt-3">
            Revolutionizing fly control in poultry farming with advanced microbial solutions
            that are eco-friendly, effective, and proven on 200+ farms.
          </p>
        </Container>
      </section>

      <section className="py-5 bg-white">
        <Container>
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card className="h-100 shadow-sm border-0">
                <div className="ratio ratio-4x3">
                  <Card.Img
                    variant="top"
                    src="/public/product-1.png"
                    alt="Fly Control Microbial Mix"
                    className="object-fit-cover"
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold text-primary">
                    FLY CONTROL BASE SOLUTION MS
                  </Card.Title>
                  <Card.Text className="flex-grow-1 mb-0">
                    Our Microbial Mix is a scientifically developed blend of beneficial bacteria
                    and enzymes that naturally disrupts the fly breeding cycle. By targeting
                    the larvae and organic waste where flies breed, it ensures a clean and
                    odour-free poultry environment. Completely chemical-free, it is safe for
                    poultry, workers, and the surrounding ecosystem while delivering consistent
                    results within days of application.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="h-100 shadow-sm border-0">
                <div className="ratio ratio-4x3">
                  <Card.Img
                    variant="top"
                    src="/public/product-2.png"
                    alt="Fly Control Liquid Solution"
                    className="object-fit-cover"
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold text-primary">
                    ADULT FLY TARGET FUNGI STRAIN S1
                  </Card.Title>
                  <Card.Text className="flex-grow-1 mb-0">
                    Designed for easy application, this ready-to-use liquid solution penetrates
                    deep into poultry litter and damp areas where flies thrive. Its microbial
                    formulation neutralizes breeding spots and reduces odour-causing gases like
                    ammonia and hydrogen sulfide. Ideal for both small farms and large-scale
                    operations, it ensures a significant drop in fly population without harming
                    birds or affecting egg/meat quality.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="h-100 shadow-sm border-0">
                <div className="ratio ratio-4x3">
                  <Card.Img
                    variant="top"
                    src="/public/product-3.jpg"
                    alt="Fly Control Concentrate"
                    className="object-fit-cover"
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold text-primary">
                    FLY LARVAE TARGET BACTERIA STRAIN
                  </Card.Title>
                  <Card.Text className="flex-grow-1 mb-0">
                    Our high-strength Fly Control Concentrate is specially formulated for
                    large-scale poultry operations facing severe fly infestations. Just a small
                    measured quantity, diluted with water, treats vast areas effectively.
                    It works by breaking down organic matter quickly, depriving flies of their
                    breeding medium. Long-lasting results make it a cost-effective solution for
                    maintaining hygiene and improving farm productivity over the long term.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}