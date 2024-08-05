import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export default function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} lg={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1 className="head">
              Ikendu Concept <span className="wrap">Web Engineer</span>
            </h1>
            <p className="para">
              The web development industry is evolving in a very fast rate and
              virtually any features you can think of can be incorporated to
              make it more informative. Web developer with 4+ years of
              experience and more than 10 years in the Information Communication
              Technology (ICT) related fields, adept in all stages of advanced
              web development. Knowledgeable in user interface, API integration,
              testing, and debugging processes. Bringing forth expertise in
              implementation, installation, testing and maintenance of web
              systems. Equipped with a diverse and promising skill-set and
              proficient in an assortment of languages and web technologies.
            </p>
            <button onClick={() => console.log(`connect`)} className="btn">
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
