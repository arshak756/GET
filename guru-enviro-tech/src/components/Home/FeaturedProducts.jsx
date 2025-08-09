import { Container, Row, Col, Card } from "react-bootstrap";

export default function FeaturedProducts() {
  const products = [
    {
      title: "Fly Control Solution",
      desc: "Biological formula to reduce flies in poultry farms naturally.",
      img: "/images/product1.jpg",
    },
    {
      title: "Odor Neutralizer",
      desc: "Eco-safe product that eliminates poultry shed odors efficiently.",
      img: "/images/product2.jpg",
    },
    {
      title: "Probiotic Booster",
      desc: "Improves gut health and immunity in poultry livestock.",
      img: "/images/product3.jpg",
    },
  ];

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center fw-bold mb-4">Featured Solutions</h2>
        <Row>
          {products.map((item, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={item.img} alt={item.title} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className="small">{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
