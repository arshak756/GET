import Herosection from "../components/Home/Herosection";
import AboutPreview from "../components/Home/AboutPreview";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import SuccessStories from "../components/Home/SuccessStories";
import FocusedAreas from "../components/Home/FocusedAreas";
import WhyChooseUs from "../components/Home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Herosection />
      <AboutPreview />
      <FeaturedProducts />
      <FocusedAreas />
      <WhyChooseUs />
      <SuccessStories />
    </>
  );
}
