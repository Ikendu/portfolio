import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/icons/logoImage.png";
import linkedin from "../assets/img/0linkedin.svg";
import facebook from "../assets/img/0facebook.svg";
import instagram from "../assets/img/0instagram.svg";
import whatsapp from "../assets/img/0whatsapp.svg";
import twitter from "../assets/img/0twitter.svg";
import github from "../assets/img/0github.svg";
import TrackVisibility from "react-on-screen";

function NavbarComponent() {
  const [activeLink, setActiveLink] = useState(`home`);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    addEventListener(`scroll`, onScroll);
    return () => removeEventListener(`scroll`, onScroll);
  }, []);

  const changeActivelink = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar expand="lg" className={scrolled ? `scrolled` : ``}>
      <Container>
        <Navbar.Brand href="#home">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__zoomIn" : ``}
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="rounded-full max-w-[50px] border-3"
                />
              </div>
            )}
          </TrackVisibility>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex items-center ">
            <Nav.Link
              href="#home"
              onClick={() => changeActivelink(`home`)}
              className={
                activeLink === `home` ? `active navbar-link` : `navber-link`
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              onClick={() => changeActivelink(`skills`)}
              className={
                activeLink === `skills` ? `active navbar-link` : `navber-link`
              }
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onClick={() => changeActivelink(`projects`)}
              className={
                activeLink == `projects` ? `active navbar-link` : `navber-link`
              }
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
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
            {/* <button onClick={() => console.log(`Connect`)} className="">
              Let's connect
            </button> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
