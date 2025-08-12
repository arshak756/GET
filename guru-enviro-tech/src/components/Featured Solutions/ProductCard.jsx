import { Card } from "react-bootstrap";

export default function ProductCard({ image, title, description }) {
  return (
    <Card
      className="shadow-lg border-0 rounded-4 text-center m-3 "
      style={{ width: "350px", minHeight: "450px" }}  // increased size here
    >
      <div
        className="d-flex justify-content-center align-items-center p-3"
        style={{
          background: "#fff",
          height: "300px",  // increased image container height
        }}
      >
        <Card.Img
          src={image}
          alt={title}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text className="text-muted" style={{ fontSize: "0.9rem" }}>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
