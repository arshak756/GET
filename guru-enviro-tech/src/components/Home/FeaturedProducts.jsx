import { Container, Row, Col, Card } from "react-bootstrap";

export default function FeaturedProducts() {
  const products = [
    {
      title: "FLY CONTROL BASE SOLUTION MS",
      desc: "Biological formula to reduce flies in poultry farms naturally.",
      img: "/public/product-1.png",
    },
    {
      title: "ADULT FLY TARGET FUNGI STRAIN S1",
      desc: "Eco-safe product that eliminates poultry shed odors efficiently.",
      img: "/public/product-2.png",
    },
    {
      title: "FLY LARVAE TARGET BACKTERIA STRAIN",
      desc: "Improves gut health and immunity in poultry livestock.",
      img: "/public/product-3.jpg",
    },
  ];

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center fw-bold mb-5 text-danger"> Featured Products</h2>
        <Row className="g-4">
          {products.map((item, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="h-100 shadow-sm border-0 product-card">
                <div className="ratio ratio-4x3 overflow-hidden">
                  <Card.Img
                    src={item.img}
                    alt={item.title}
                    className="object-fit-cover"
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-semibold">{item.title}</Card.Title>
                  <Card.Text className="text-muted small flex-grow-1">
                    {item.desc}
                  </Card.Text>
                  <div className="text-end">
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => (window.location.href = "/products")}
                    >
                       Learn More
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
