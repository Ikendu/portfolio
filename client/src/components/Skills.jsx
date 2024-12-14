import { Col, Container, Row } from "react-bootstrap";
import { Facebook, Twitter } from "react-bootstrap-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { carouselItems, responsive, skillsIcons } from "../data";

const skills = skillsIcons.filter((skill) => skill.id < 4);
const skillss = skillsIcons.filter((skill) => skill.id > 3 && skill.id < 7);
const skillsss = skillsIcons.filter((skill) => skill.id > 6 && skill.id < 10);
const skillssss = skillsIcons.filter((skill) => skill.id > 9 && skill.id < 13);
function SkillSet({ skillSet }) {
  return (
    <ul>
      {skillSet.map((skill, idx) => (
        <li key={idx} className="flex gap-2">
          <span>{skill.name} </span>
          <img src={skill.icon} className=" bg-white rounded-full w-5" />
        </li>
      ))}
    </ul>
  );
}

export default function Skills() {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx p-3 py-5 flex flex-column align-items-center gap-20">
              <h2>Skills</h2>
              <div className="text-justify ">
                <div className="">
                  <b className="text-2xl text-lime-300">
                    LIBRARIES/FRAMEWORKS:
                  </b>
                  <br />
                  <div className="flex my-4">
                    <div className="flex gap-5 flex-wrap mx-4 justify-content-between md:w-[750px]">
                      <SkillSet skillSet={skills} />
                      <SkillSet skillSet={skillss} />
                      <SkillSet skillSet={skillsss} />
                      <SkillSet skillSet={skillssss} />
                    </div>
                    <div className="flex gap-20"></div>
                  </div>
                </div>

                <p>
                  <b className="text-[1.3rem] text-lime-300 ">
                    PROGRAMMING LANGUAGES:
                  </b>
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
