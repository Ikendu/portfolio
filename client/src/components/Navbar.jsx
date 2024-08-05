import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/icons/logo.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

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
          <img
            src={logo}
            alt="Logo"
            className="rounded-full max-w-[50px] border-3"
          />
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
              <a href="#">
                <img src={navIcon1} alt="nav" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="nav" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="nav" />
              </a>
            </div>
            <button onClick={() => console.log(`connect`)} className="">
              Let's connect
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
