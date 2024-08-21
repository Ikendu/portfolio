import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter55 from "../assets/meter/meter55.png";
import meter65 from "../assets/meter/meter65.png";
import meter75 from "../assets/meter/meter75.png";
import meter80 from "../assets/meter/meter80.png";
import meter85 from "../assets/meter/meter85.png";
import meter90 from "../assets/meter/meter90.png";
import meter95 from "../assets/meter/meter95.png";
import colorSharp from "../assets/img/color-sharp.png";

const carouselItems = [
  {
    image: meter95,
    text: `React.js`,
  },
  {
    image: meter85,
    text: `Vanilla JavaScript`,
  },
  {
    image: meter90,
    text: `Tailwind CSS`,
  },
  {
    image: meter80,
    text: `HTML & CSS`,
  },
  {
    image: meter55,
    text: `Nextjs`,
  },
  {
    image: meter75,
    text: `Nodejs and MongoDB`,
  },
  {
    image: meter65,
    text: `Sass`,
  },
  {
    image: meter55,
    text: `Typescript`,
  },
  {
    image: meter75,
    text: `Express`,
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
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p className="text-justify">
                <b>LIBRARIES/FRAMEWORKS: </b> React.js, Tailwind CSS, Bootstrap,
                Nextjs, Express, Nodejs, MongoDB, Socket.io, Web RTC,
                Ruby-on-Rails, HTML, CSS, Sass.
                <br />
                <b>PROGRAMMING LANGUAGES:</b> JavaScript, Java, Typescript,
                Ruby, PHP, C.
                <br />
                <b>OTHER SKILLS:</b> Computer Software/OS Maintenance, Graphics
                Design, ICT Personnel
              </p>
              <h2 className="tool-set">Tool-Set and Proficiency level</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {carouselItems.map((item, idx) => (
                  <div key={idx} className="item">
                    <img src={item.image} />
                    {/* <div className="img ">{item.image}</div> */}
                    <h5>{item.text}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-left" />
    </section>
  );
}
