import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import bannerImage from "../assets/img/header-img.svg";
// import bannerImage from "../assets/img/landingImg.png";
import bannerImage from "../assets/img/landingImg1.png";
import { useEffect, useState } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";

export default function Banner() {
  const [focusText, setFocusText] = useState(``);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delter, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  const toDisplay = [
    `Computer Scientist`,
    `Web Engineer`,
    `Frontend Major`,
    `ICT Specialist`,
    `Graphics Designer`,
  ];

  useEffect(() => {
    let getTicker = setInterval(() => {
      ticker();
    }, delter);
    return () => clearInterval(getTicker);
  }, [focusText]);

  const ticker = () => {
    let i = loopNum % toDisplay.length;
    let fullText = toDisplay[i];
    let updatedText = isDeleting
      ? fullText.substring(0, focusText.length - 1)
      : fullText.substring(0, focusText.length + 1);

    setFocusText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === ``) {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner py-20 md:py-32 " id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn text-center md:text-left"
                      : `text-center md:text-left`
                  }
                >
                  <span className="tagline ">Welcome to David Portfolio</span>
                  <h1 className="head text-3xl md:text-5xl">
                    David Aniede <br />
                    <span
                      className="wrap"
                      title="Computer Scientist, Fullstack Web Developer, Frontend Major, ICT Specialist, Graphics Designer"
                    >
                      {focusText}
                    </span>
                  </h1>
                  <p className=" para py-2">
                    Computer Scientist, Fullstack Web Developer, Frontend Major,
                    ICT Specialist, Graphics Designer
                  </p>
                  {/* <p>DAVID ANIEDE </p>
                  <p className="para">
                    Software engineer with more focus on Web technologies. With
                    4+ years of experience and more than 10 years in the
                    Information Communication Technology (ICT) related fields,
                    adept in all stages of advanced web development.
                    Knowledgeable in user interface, API integration, testing,
                    and debugging processes. Bringing forth expertise in
                    implementation, installation, testing and maintenance of web
                    systems. Equipped with a diverse and promising skill-set and
                    proficient in an assortment of languages and web
                    technologies.
                  </p> */}
                  <button
                    onClick={() => console.log(`connect`)}
                    className="btn"
                  >
                    <a
                      href="https://wa.link/t2k3ug"
                      target="_blank"
                      className="flex gap-4"
                    >
                      Let's connect <ArrowRightCircle size={25} />
                    </a>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ``
                  }
                >
                  <img src={bannerImage} alt="Banner Image" className="img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
