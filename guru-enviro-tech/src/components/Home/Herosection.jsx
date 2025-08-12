import { Container, Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Herosection() {
  const navigate = useNavigate();

  const slides = [
    {
      img: "/image1.png",
      title: "Innovating Sustainable Agro‑Environmental Solutions",
      subtitle1:
        "Eco‑friendly microbial products for Agriculture, Poultry & Environment",
      subtitle2:
        "Reducing chemicals, boosting productivity, and protecting nature",
    },
    {
      img: "/image2.png",
      title: "Science‑Backed Fly & Odor Control",
      subtitle1:
        "98.6% efficient microbial treatment for hygienic poultry farms",
      subtitle2:
        "Safe for livestock, eco‑friendly, and proven in 200+ farms nationwide",
    },
    {
      img: "/image3.png",
      title: "Transforming Farms, Protecting the Environment",
      subtitle1:
        "From soil health to waste management — complete sustainable solutions",
      subtitle2:
        "Serving Tamil Nadu, Karnataka, Kerala, Telangana, Odisha & beyond",
    },
  ];

  return (
    <Container className="mt-2">
      <section style={{ minHeight: "60vh", position: "relative" }}>
        <Carousel
          controls={false}
          indicators={true}
          fade={true}
          pause={false}
          interval={5000}
        >
          {slides.map(({ img, title, subtitle1, subtitle2 }, idx) => (
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
                  <h1 className="fw-bold mb-3 display-4">{title}</h1>
                  <p className="fs-5 mb-2">{subtitle1}</p>
                  <p className="fs-5 mb-4">{subtitle2}</p>
                  <Button
                    variant="primary"
                    size="lg"
                    style={{
                      width: "auto",
                      maxWidth: "fit-content",
                      borderRadius: "30px",
                      padding: "8px 25px",
                      fontWeight: "500",
                    }}
                    onClick={() => navigate("/featuredsolutions")}
                  >
                    Learn More
                  </Button>
                </Container>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </Container>
  );
}

