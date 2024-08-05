import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

const projects = [
  {
    title: `title`,
    description: `desc`,
    image: `image`,
  },
  {
    title: `title`,
    description: `desc`,
    image: `image`,
  },
  {
    title: `title`,
    description: `desc`,
    image: `image`,
  },
  {
    title: `title`,
    description: `desc`,
    image: `image`,
  },
  {
    title: `title`,
    description: `desc`,
    image: `image`,
  },
];
export default function Project() {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projecsts</h2>
            <p>
              related fields, adept in all stages of advanced web development.
              Knowledgeable in user interface, API integration, testing, and
              debugging processes. Bringing forth
            </p>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Nav variant="pills" className="flex-row">
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
                  <Row>First</Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
