import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

export default function Productlist() {
  const products = [
    { image: "/product-1.png", title: "FLY CONTROL BASE SOLUTION MS", description: "Boosts soil health naturally and increases yield." },
    { image: "/product-2.png", title: "ADULT FLY TARGET FUNGI STRAIN S1", description: "Effective, eco-friendly liquid for poultry and dairy farms." },
    { image: "product-3.jpg", title: "FLY LARVAE TARGET BACKETRIA STRAIN S3", description: "Neutralizes bad odors and keeps surroundings fresh." }
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1rem", 
        padding: "1rem",
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
        />
      ))}
    </div>
  );
}
