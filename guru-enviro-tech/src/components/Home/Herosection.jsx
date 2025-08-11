import { Container, Button, Carousel } from "react-bootstrap";

export default function Home() {
  return (
    <section style={{ minHeight: "60vh", position: "relative" }}>
      <Carousel
        controls={false}
        indicators={true}
        fade={true}
        pause={false}
        interval={5000}
      >
        {[
          {
            img: "/image1.png",
            title: "Innovating Sustainable Farming Solutions",
            subtitle1: "Advanced microbial products tailored for farm hygiene",
            subtitle2: "Protecting your environment, naturally",
          },
          {
            img: "/image2.png",
            title: "Innovative Solutions for Farm Hygiene",
            subtitle1: "Protect your farm with our proven microbial products",
            subtitle2: "Environmentally Safe & Highly Effective",
          },
          {
            img: "/image3.png",
            title: "Join the Green Revolution",
            subtitle1: "Partner with us to build sustainable farming practices",
            subtitle2: "Better Farms, Better Future",
          },
        ].map(({ img, title, subtitle1, subtitle2 }, idx) => (
          <Carousel.Item key={idx}>
            <div
              style={{
                height: "60vh",
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  zIndex: 1,
                }}
              />
              <Container
                className="text-start text-white d-flex flex-column justify-content-center"
                style={{ height: "60vh", position: "relative", zIndex: 2 }}
              >
                <h1 className="fw-bold mb-3 display-3">{title}</h1>
                <p className="fs-5 mb-2">{subtitle1}</p>
                <p className="fs-5 mb-4">{subtitle2}</p>
                <Button
                  variant="primary"
                  size="lg"
                  style={{ width: "auto", maxWidth: "fit-content" }}
                 onClick={() => window.location.href = "/products"}>
                  Shop Now
                </Button>
              </Container>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
