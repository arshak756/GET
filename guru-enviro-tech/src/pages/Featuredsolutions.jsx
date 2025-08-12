import Herosection from "../components/Featured Solutions/Herosection";
import Productlist from "../components/Featured Solutions/Productlist";
import FocusedAreas from "../components/Featured Solutions/FocusedAreas"; 

export default function featuredsolutions() {
  return (
    <div className="mt-5 pt-4">
      <Herosection />
      <Productlist />
      <FocusedAreas />
    </div>
  );
}
