import Herosection from "../components/Home/Herosection";
import AboutPreview from "../components/Home/AboutPreview";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import SuccessStories from "../components/Home/SuccessStories";
import FocusedAreas from "../components/Home/FocusedAreas";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid> 
      <Herosection />
      <AboutPreview />
      <WhyChooseUs />
      <SuccessStories />
    </Container>
  );
}
