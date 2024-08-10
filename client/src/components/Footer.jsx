import { Col, Container, Row } from "react-bootstrap";
import MailChimpForm from "./MailChimpForm";

import logo from "../assets/icons/logo.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailChimpForm />
          <Col sm={6}>
            <img
              src={logo}
              alt="Logo"
              className="rounded-full max-w-[100px] border-3"
            />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <a href="#">
              <img src={navIcon1} alt="nav" />
            </a>
            <a href="#">
              <img src={navIcon2} alt="nav" />
            </a>
            <a href="#">
              <img src={navIcon3} alt="nav" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
