import Herosection from "../components/Home/Herosection";
import AboutPreview from "../components/Home/AboutPreview";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import SuccessStories from "../components/Home/SuccessStories";

export default function Home() {
  return (
    <>
      <Herosection />
      <AboutPreview />
      <FeaturedProducts />
      <SuccessStories />
    </>
  );
}
