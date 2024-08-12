import { Col, Container, Row } from "react-bootstrap";
import MailChimpForm from "./MailChimpForm";

import logo from "../assets/icons/logo.jpg";
import linkedin from "../assets/img/0linkedin.svg";
import facebook from "../assets/img/0facebook.svg";
import instagram from "../assets/img/0instagram.svg";
import whatsapp from "../assets/img/0whatsapp.svg";
import twitter from "../assets/img/0twitter.svg";
import github from "../assets/img/0github.svg";

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
            <div className="social-icon">
              <a href="https://wa.link/t2k3ug" target="_blank">
                <img src={whatsapp} alt="nav" />
              </a>
              <a href="https://linkedin.com/in/aniede" target="_blank">
                <img src={linkedin} alt="nav" />
              </a>
              <a href="https://www.facebook.com/chibundu101/" target="_blank">
                <img src={facebook} alt="nav" />
              </a>
              <a href="https://twitter.com/ikendul" target="_blank">
                <img src={twitter} alt="nav" />
              </a>
              <a href="http://github.com/ikendu" target="_blank">
                <img src={github} alt="nav" />
              </a>
              <a
                href="https://www.instagram.com/chibundu.aniede"
                target="_blank"
              >
                <img src={instagram} alt="nav" />
              </a>
            </div>
            <p>CopyRight 2024 @ All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
