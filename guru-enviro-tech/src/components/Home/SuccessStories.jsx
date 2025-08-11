import { Container, Row, Col, Card } from "react-bootstrap";

export default function SuccessStories() {
  const stories = [
    {
      title: "Dhanya Poultry",
      subtitle: "Lockdown Challenge Turned Success",
      text: `During the lockdown, Dhanya Poultry struggled with severe fly issues. After trying several failed methods, they partnered with us. Our structured approach eliminated the infestation and transformed hygiene standards. Today, the farm operates odor-free, and the owner has become a dealer, recommending our solution to others.`,
    },
    {
      title: "Aishwariya Poultry",
      subtitle: "Fly & Odor Problems Solved",
      text: `Facing recurring fly and odor issues, Aishwariya Poultry switched to our microbial solution. With proper training and application, the flies vanished within weeks. The cleaner air and improved hygiene boosted both staff morale and community trust.`,
    },
    {
      title: "Shanmuga Poultry",
      subtitle: "Sustainable Fly Control",
      text: `After multiple failed attempts at pest control, Shanmuga Poultry adopted our Fly Control Concentrate. It prevented fly resurgence and improved overall cleanliness. Their team now follows a preventive hygiene routine for long-term success.`,
    },
    {
      title: "Surya Poultry Farm",
      subtitle: "Crisis to Clean Success",
      text: `Authorities nearly shut down Surya Poultry due to a fly crisis. Our team stepped in with a 3-month action plan. The flies were gone within weeks, and today, the farm runs at full capacity — fly-free and thriving.`,
    },
  ];

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center fw-bold mb-5 text-danger">Success Stories</h2>
        <Row>
          {stories.map((story, idx) => (
            <Col md={6} key={idx} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-bold">{story.title}</Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">
                    {story.subtitle}
                  </Card.Subtitle>
                  <Card.Text style={{ textAlign: "justify" }}>{story.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
