import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import CardContents from "./CardContents";
import imageRigh from "../assets/img/color-sharp2.png";

import {
  freelanceWorks,
  personalWorks,
  teamWorks,
  testWorks,
} from "./projectAll";
import { navItems } from "../data";
import { useState } from "react";

export default function Project() {
  const [open, setOpen] = useState(null);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projecsts</h2>
            <p>
              Projects I have worked on in the course of my career are divided
              into tabs as seen below. Each tab contains different projects in
              that category
            </p>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="flex-row  nav-pills justify-center mb-5 items-center"
                id="pills-tab"
              >
                {navItems.map((nav, idx) => (
                  <Nav.Item key={idx}>
                    <Nav.Link eventKey={nav.name} onClick={() => setOpen(idx)}>
                      {open == idx ? (
                        <i className="fa-solid fa-door-open"></i>
                      ) : (
                        <i className="fa-solid fa-door-closed"></i>
                      )}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <h3 className="text-3xl m-4">Team Works</h3>
                  <Row>
                    {teamWorks.map((project, idx) => (
                      <CardContents key={idx} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h3 className="text-3xl m-4">Freelance and Personal Works</h3>
                  <Row>
                    {freelanceWorks.map((project, idx) => (
                      <CardContents key={idx} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <h3 className="text-3xl m-4">Training&nbsp;Projects</h3>
                  <Row>
                    {personalWorks.map((project, idx) => (
                      <CardContents key={idx} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <h3 className="text-3xl m-4 text-center">
                    Skill Test Projects
                  </h3>
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
