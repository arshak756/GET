import { Container, Row, Col } from "react-bootstrap";

export default function FocusedAreas() {
  const areas = [
    {
      title: "Agriculture",
      content: `Our agricultural solutions focus on enhancing soil health and crop productivity
        using eco-friendly microbial products. From EM solutions and decomposers to nutrient enhancers,
        pest control, growth promotors, and disease management, we provide a holistic approach that
        supports sustainable farming practices and ensures long-term yield improvement.`,
      imgAlt: "Agriculture image",
    },
    {
      title: "Environment",
      content: `We provide comprehensive environmental management services including industrial liquid and
        solid waste treatment. Our microbial treatments safely break down pollutants, helping industries
        comply with environmental regulations while minimizing ecological impact. Our focus is on
        sustainable waste management and conservation of natural resources.`,
      imgAlt: "Environment image",
    },
    {
      title: "Poultry Farms",
      content: `Our poultry farm solutions include manure management, fly control, and consultancy services
        to improve hygiene and productivity. Using science-backed microbial products, we help reduce
        odors and pests naturally while supporting healthier farm environments for livestock welfare
        and better farm operations.`,
      imgAlt: "Poultry Farms image",
    },
  ];

  return (
    <section className="py-5">
      <Container>
        <h2 style={{ color: "var(--primary-red)" }} className="mb-4 text-center">
          Focused Areas
        </h2>
        {areas.map((area, idx) => (
          <Row className="align-items-center mb-5" key={idx}>
            <Col md={6} className={idx % 2 !== 0 ? "order-md-2" : ""}>
              <h3 style={{ color: "var(--primary-blue)" }}>{area.title}</h3>
              <p style={{ textAlign: "justify" }}>{area.content}</p>
            </Col>
            <Col md={6} className={idx % 2 !== 0 ? "order-md-1" : ""}>
              <div
                style={{
                  height: "300px",
                  backgroundColor: "#e9ecef",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  color: "#6c757d",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                {area.imgAlt} <br /> Image Coming Soon
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
}
