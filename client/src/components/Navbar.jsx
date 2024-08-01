import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Facebook from "../assets/icons/Facebook";

function NavbarComponent() {
  const [activeLink, setActiveLink] = useState(`home`);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setScroll(true);
      else setScroll(false);
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
          <img src={``} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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
                <Facebook />
              </a>
              <a href="#">
                <img src={``} alt="" />
              </a>
              <a href="#">
                <img src={``} alt="" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
