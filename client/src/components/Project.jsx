import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import CardContents from "./CardContents";
import imageRigh from "../assets/img/color-sharp2.png";
import image1 from "../assets/img/project-img1.png";
import image2 from "../assets/img/project-img2.png";
import image3 from "../assets/img/project-img3.png";
import image4 from "../assets/img/project-img3.png";
import image5 from "../assets/img/project-img3.png";

const projects = [
  {
    title: `title`,
    desc: `desc`,
    image: image1,
  },
  {
    title: `title`,
    desc: `desc`,
    image: image2,
  },
  {
    title: `title`,
    desc: `desc`,
    image: image3,
  },
  {
    title: `title`,
    desc: `desc`,
    image: image4,
  },
  {
    title: `title`,
    desc: `desc`,
    image: image5,
  },
];
export default function Project() {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projecsts</h2>
            <p>
              The project I have worked on in the course of my career is divided
              into tabs as seen below.
              <br />
              The first tab contains group projects where I have made numerous
              contributions.
              <br />
              The second tab contains freelance projects I have done for some
              clients
              <br />
              The Third tab conatains some personal projects I have done for
              various reasons
              <br />
              The fourth tab contains some development test I have taken in the
              course of my career
            </p>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="flex-row  nav-pills justify-center mb-5 items-center "
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, idx) => (
                      <CardContents key={idx} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                <Tab.Pane eventKey="third">Second tab content</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={imageRigh} alt="" className="background-image-right" />
    </section>
  );
}
