import { Col, Container, Row } from "react-bootstrap";
import { Facebook, Twitter } from "react-bootstrap-icons";
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
import nextjsIcon from "../assets/icons/nextjsIcon.svg";
import tailwind from "../assets/icons/Tailwind.svg";
import diamond from "../assets/icons/diamond.svg";
import nodejs from "../assets/icons/nodejs.svg";

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
            <div className="skill-bx p-3 py-5 ">
              <h2>Skills</h2>
              <div className="text-justify md:mx-20">
                <div>
                  <b className="text-2xl text-lime-300">
                    LIBRARIES/FRAMEWORKS:
                  </b>
                  <br />
                  <div className="flex gap-10 my-4 justify-content-evenly">
                    <div className="flex gap-10 ">
                      <ul>
                        <li>
                          React.js <i class="fa-brands fa-react"></i>
                        </li>
                        <li>
                          Nextjs
                          <img
                            src={nextjsIcon}
                            alt=""
                            className=" bg-white rounded-full w-5"
                          />
                        </li>
                        <li>
                          Ruby-on-Rails
                          <img
                            src={diamond}
                            alt=""
                            className=" bg-white rounded-full w-5 p-1"
                          />
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Tailwind
                          <img
                            src={tailwind}
                            alt=""
                            className=" bg-white rounded-full w-5 p-1"
                          />
                        </li>
                        <li>
                          Bootstrap <i class="fa-brands fa-bootstrap"></i>
                        </li>
                        <li>
                          CSS <i class="fa-brands fa-css3-alt p-1"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="flex gap-10">
                      <ul>
                        <li>
                          Nodejs{" "}
                          <img
                            src={nodejs}
                            alt=""
                            className=" bg-white rounded-full w-5 p-1"
                          />
                        </li>
                        <li>MongoDB</li>
                        <li>Express</li>
                      </ul>
                      <ul>
                        <li>Web RTC</li>
                        <li>Socket.io</li>
                        <li>Sass</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p>
                  <b className="text-[1.3rem] text-lime-300 ">
                    PROGRAMMING LANGUAGES:
                  </b>{" "}
                  <br /> JavaScript, Java, Typescript, Ruby, PHP, C.
                </p>

                <p>
                  <span className="text-2xl text-lime-300 ">OTHER SKILLS:</span>
                  <br />
                  Computer Software/OS Maintenance, Graphics Design, ICT
                  Personnel
                </p>
              </div>
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
