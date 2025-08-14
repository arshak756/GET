import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";



export default function FocusedAreas() {
  const areas = [
    {
      title: "Agriculture",
      content: `Our agricultural solutions focus on restoring soil health, increasing crop productivity, 
        and promoting long-term sustainability. Using eco-friendly microbial technologies — including EM solutions, 
        decomposers, nutrient enhancers, pest control measures, growth promotors, and disease management systems — 
        we help farmers reduce chemical dependency, maintain ecological balance, and achieve consistent, high-quality yields.
        These solutions have been successfully implemented in farms across Tamil Nadu, Karnataka, Andhra Pradesh, Kerala, Telangana, 
        Odisha, and West Bengal, benefiting both small-scale and large-scale agricultural operations.`,
      img: "/Agriculture-1.png",
      imgAlt: "Agriculture field with crops",
    },
    {
      title: "Environment",
      content: `We provide comprehensive environmental management services to tackle industrial liquid and solid waste treatment challenges. 
        Our microbial-based treatments safely break down pollutants, neutralize harmful emissions, and help industries comply with 
        national environmental regulations. By focusing on sustainable waste management and natural resource conservation, 
        our solutions contribute to cleaner water, fresher air, and healthier surroundings — safeguarding both communities and ecosystems.`,
      img: "/Environment-3.jpg",
      imgAlt: "Environmental conservation image",
    },
    {
      title: "Poultry Farms",
      content: `With extensive expertise in poultry farm hygiene, we deliver manure management, 
        fly control, and farm management consultancy tailored to real-world farm conditions. 
        Utilizing scientifically proven microbial products — including adult fly target fungi strains and fly larvae target bacteria — 
        we naturally reduce pest populations, eliminate foul odors (ammonia, H₂S), and protect livestock health. 
        Our work has achieved 98.6% efficiency in fly control and 96% eco-friendliness, creating cleaner, 
        healthier farm environments for poultry farmers nationwide.`,
      img: "/Poultry-2.png",
      imgAlt: "Poultry farm image",
    },
  ];

  return (
    <section className="py-5">
      <Container>
        <h1 style={{ color: "var(--primary-red)",  }} className="mb-4 text-center">
          Our Solutions
        </h1>
        {areas.map((area, idx) => (
          <Row className="align-items-center mb-5" key={idx}>
            <Col md={6} className={idx % 2 !== 0 ? "order-md-2" : ""}>
              <h3 style={{ color: "var(--primary-blue)" }}>{area.title}</h3>
              <p style={{ textAlign: "justify" }}>{area.content}</p>
            </Col>
            <Col md={6} className={idx % 2 !== 0 ? "order-md-1" : ""}>
              <img
                src={area.img}
                alt={area.imgAlt}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
}
