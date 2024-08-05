import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import { Col, Row } from "react-bootstrap";
// import meter4 from "../assets/img/meter4.svg";

const carouselItems = [
  {
    image: meter1,
    text: `Web Development`,
  },
  {
    image: meter2,
    text: `Web Design`,
  },
  {
    image: meter3,
    text: `Web Management`,
  },
  {
    image: meter3,
    text: `Brand Identity`,
  },
];

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Row>
        <Col>
          <div className="skill-bx">
            <h2>Skills</h2>
            <p>
              make it more realistic and informative. Web developer with 4+
              years of experience and more than 10 years in the Information
              Communication Technology (ICT) related fields, adept in all stages
              of advanced web development. Knowledgeable in user interface, API
              integration,
            </p>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="skill-slider"
            >
              {carouselItems.map((item, idx) => (
                <div key={idx} className="item">
                  <img src={item.image} />
                  <h5>{item.text}</h5>
                </div>
              ))}
            </Carousel>
          </div>
        </Col>
      </Row>
    </section>
  );
}
