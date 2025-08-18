import { Container, Row, Col } from "react-bootstrap";

export default function FocusedAreas() {
    const areas = [
        {
            title: " Agriculture",
            content: `Our agricultural solutions focus on restoring soil health, increasing crop productivity, 
        and promoting long-term sustainability. Using eco-friendly microbial technologies — including EM solutions, 
        decomposers, nutrient enhancers, pest control measures, growth promotors, and disease management systems — 
        we help farmers reduce chemical dependency, maintain ecological balance, and achieve consistent, high-quality yields.
        These solutions have been successfully implemented in farms across Tamil Nadu, Karnataka, Andhra Pradesh, Kerala, Telangana, 
        Odisha, and West Bengal, benefiting both small-scale and large-scale agricultural operations.`,
            img: "/our solutions/Agriculture-1.png",
            imgAlt: "Agriculture field with crops",
        },
        {
            title: " Environment",
            content: `We provide comprehensive environmental management services to tackle industrial liquid and solid waste treatment challenges. 
        Our microbial-based treatments safely break down pollutants, neutralize harmful emissions, and help industries comply with 
        national environmental regulations. By focusing on sustainable waste management and natural resource conservation, 
        our solutions contribute to cleaner water, fresher air, and healthier surroundings — safeguarding both communities and ecosystems.`,
            img: "/our solutions/Environment-3.jpg",
            imgAlt: "Environmental conservation image",
        },
        {
            title: " Poultry Farms",
            content: `With extensive expertise in poultry farm hygiene, we deliver manure management, 
        fly control, and farm management consultancy tailored to real-world farm conditions. 
        Utilizing scientifically proven microbial products — including adult fly target fungi strains and fly larvae target bacteria — 
        we naturally reduce pest populations, eliminate foul odors (ammonia, H₂S), and protect livestock health. 
        Our work has achieved 98.6% efficiency in fly control and 96% eco-friendliness, creating cleaner, 
        healthier farm environments for poultry farmers nationwide.`,
            img: "/our solutions/Poultry-2.png",
            imgAlt: "Poultry farm image",
        },
    ];

    return (
        <section className="py-5" style={{ backgroundColor: "#f9fafc" }}>
            <Container>
                <h1
                    style={{ color: "var(--primary-red)", fontWeight: "700" }}
                    className="mb-5 text-center"
                >
                    Our Solutions
                </h1>

                {areas.map((area, idx) => (
                    <Row
                        className={`align-items-center mb-5 p-4 rounded shadow-sm ${
                            idx % 2 === 0 ? "bg-white" : "bg-white"
                        }`}
                        key={idx}
                        style={{ borderRadius: "12px" }}
                    >
                        <Col md={6} className={idx % 2 !== 0 ? "order-md-2" : ""}>
                            <h3
                                style={{
                                    color: "var(--primary-blue)",
                                    fontWeight: "700",
                                    marginBottom: "15px",
                                }}
                            >
                                {area.title}
                            </h3>
                            <p style={{ textAlign: "justify", lineHeight: "1.7" }}>
                                {area.content}
                            </p>
                        </Col>
                        <Col md={6} className={idx % 2 !== 0 ? "order-md-1" : ""}>
                            <div
                                style={{
                                    overflow: "hidden",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                                }}
                            >
                                <img
                                    src={area.img}
                                    alt={area.imgAlt}
                                    style={{
                                        width: "100%",
                                        height: "320px",
                                        objectFit: "cntain",
                                        transition: "transform 0.4s ease",
                                    }}
                                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                />
                            </div>
                        </Col>
                    </Row>
                ))}
            </Container>
        </section>
    );
}
