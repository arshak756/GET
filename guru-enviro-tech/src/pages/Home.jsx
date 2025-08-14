import Herosection from "../components/Home/Herosection";
import AboutPreview from "../components/Home/AboutPreview";
import SuccessStories from "../components/Home/SuccessStories";
import HowItWorks from "../components/Home/HowItWorks";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid className=" bg-light"> 
      <Herosection />
      <AboutPreview />
      <WhyChooseUs />
      <HowItWorks />
      <SuccessStories />
    </Container>
  );
}
