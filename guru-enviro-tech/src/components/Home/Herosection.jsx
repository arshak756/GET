import { Container, Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  const slides = [
    {
      img: "/carousel-1.png",
      title: "Revolutionizing Fly Control with Innovative Microbial Solutions",
      
    },
    {
      img: "/carousel-2.png",
      title: "Sustainable Waste Management for Agriculture and Poultry Farms",
     
    },
    {
      img: "/carousel-3.png",
      title: "Committed to Eco-Friendly Farming and Environmental Health",
      
    },
  ];

  return (
    <section className=" ">
      <Carousel
        controls={false}
        indicators
        fade
        pause={false}
        interval={5000}
        className="hero-carousel"
      >
        {slides.map(({ img, title, subtitle1, subtitle2 }, idx) => (
          <Carousel.Item key={idx}>
            <div
              style={{
                height: "55vh",
                background: ` url(${img}) center/cover no-repeat`,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Container className="text-white">
                <h1 className="fw-bold display-5 mb-3">{title}</h1>
                <p className="lead mb-1">{subtitle1}</p>
                <p className="lead mb-4">{subtitle2}</p>
                <Button
                  variant="primary"
                  size="lg"
                  className="px-4 py-2 rounded-pill"
                  onClick={() => navigate("/featuredsolutions")}
                >
                  View Products
                </Button>
              </Container>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
