import {Container, Row, Col, Card, Badge} from "react-bootstrap";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Dhanya Poultry",
            location: "Erode, Tamil Nadu",
            quote:
                "Guru Enviro Tech’s fly control completely changed our farm hygiene. Within just a few weeks, the fly population reduced drastically. Our staff can now work comfortably, and even our egg quality improved as the environment became cleaner and safer.",
            image: "testimonials/test-1.png",
        },
        {
            name: "Aishwariya Poultry",
            location: "Namakkal, Tamil Nadu",
            quote:
                "We had persistent fly problems for years. After using their microbial solution, not only did the flies vanish, but the manure also became easier to manage. Our neighbors, who earlier complained about odor and flies, are now happy with the results.",
            image: "testimonials/test-2.png",
        },
        {
            name: "Shanmuga Poultry",
            location: "Salem, Tamil Nadu",
            quote:
                "This is the best long-term fly control we have ever used. It’s natural, safe for our birds, and highly effective. Months have passed and we haven’t seen a recurrence, making this a reliable solution for our farm operations.",
            image: "testimonials/test-1.png",
        },
        {
            name: "Surya Poultry Farm",
            location: "Karur, Tamil Nadu",
            quote:
                "We were close to shutting down due to severe fly infestations and odor complaints. Guru Enviro Tech’s solution gave us a fresh start. Today, our farm runs smoothly, productivity has increased, and we are proud to maintain a clean farm environment.",
            image: "testimonials/test-1.png",
        },
    ];

    return (
        <section className="py-5" style={{backgroundColor: "#f8fafc"}}>
            <Container>
                <h2
                    className="text-center mb-5"
                    style={{color: "#bb141a", fontWeight: "700", fontSize: "2.3rem"}}
                >
                    What Our Farmers Say
                </h2>

                <Row className="g-4">
                    {testimonials.map((t, index) => (
                        <Col md={6} lg={6} key={index}>
                            <Card
                                className="h-100 border-0 shadow-sm rounded-4 p-4"
                                style={{backgroundColor: "#ffffff"}}
                            >
                                {/* Farmer Info */}
                                <div className="d-flex align-items-center mb-3">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        style={{
                                            width: 70,
                                            height: 70,
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                            marginRight: "15px",
                                        }}
                                    />
                                    <div>
                                        <h5
                                            style={{fontWeight: "600", marginBottom: "5px"}}
                                        >
                                            {t.name}
                                        </h5>
                                        <Badge bg="light" text="dark">
                                            {t.location}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Testimonial */}
                                <blockquote
                                    style={{
                                        fontStyle: "italic",
                                        fontSize: "1rem",
                                        lineHeight: "1.6rem",
                                        color: "#444",
                                    }}
                                >
                                    “{t.quote}”
                                </blockquote>

                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
