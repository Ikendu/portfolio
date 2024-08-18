import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import CardContents from "./CardContents";
import imageRigh from "../assets/img/color-sharp2.png";
import {
  freelanceWorks,
  personalWorks,
  teamWorks,
  testWorks,
} from "./projectAll";

export default function Project() {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projecsts</h2>
            <p>
              Projects I have worked on in the course of my career is divided
              into tabs as seen below. Each tab contains different projects in
              that gategory
              {/* <br />
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
              course of my career */}
            </p>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="flex-row  nav-pills justify-center mb-5 items-center "
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Team Works</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Freelance Woks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Personal&nbsp;Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Test Projects</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {teamWorks.map((project, idx) => (
                      <CardContents key={idx} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {freelanceWorks.map((project, idx) => (
                      <CardContents key={idx} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {personalWorks.map((project, idx) => (
                      <CardContents key={idx} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Row>
                    {testWorks.map((project, idx) => (
                      <CardContents key={idx} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={imageRigh} alt="" className="background-image-right" />
    </section>
  );
}
