import { useState } from "react";
import emailjs from "@emailjs/browser";

import contactImg from "../assets/img/contact-img.svg";
import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

export default function Contact() {
  const initialEntries = {
    name: ``,
    phone: ``,
    email: ``,
    message: ``,
  };

  const [formDetails, setFormDetails] = useState(initialEntries);
  const [buttonText, setButtonText] = useState(`Send`);
  const [status, setStatus] = useState({});

  const handleFormChange = (field, value) => {
    setFormDetails({ ...formDetails, [field]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setButtonText(`Sending`);
    emailjs
      .send("service_2yry7mf", "template_flz454q", formDetails, {
        publicKey: "iPQWPyYdO6yD4VgQA",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setButtonText("Send");
          setFormDetails(initialEntries);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );

    // let response = await fetch(`http://localhost:5000/contact`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "Application/json",
    //   },
    //   body: JSON.stringify(formDetails),
    // });
    // setButtonText(`Send`);
    // let result = response.json();
    // setFormDetails(initialEntries);
    // if (result.code === 200) {
    //   setStatus({ success: true, message: `Message sent successfully` });
    // } else {
    //   setStatus({ success: false, message: `there was an error, try again ` });
    // }
  };
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className={`align-items-center`}>
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ``
                  }
                >
                  <img src={contactImg} alt="Contact Us" />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col md={6}>
            <h2>Get in touch</h2>
            <form onSubmit={handleFormSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    required
                    type="text"
                    placeholder="Frist Name"
                    value={formDetails.name}
                    onChange={(e) => handleFormChange(`name`, e.target.value)}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    required
                    type="email"
                    placeholder="Your Email"
                    value={formDetails.email}
                    onChange={(e) => handleFormChange(`email`, e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    required
                    type="tel"
                    placeholder="Your Phone Number"
                    value={formDetails.phone}
                    onChange={(e) => handleFormChange(`phone`, e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    required
                    rows={6}
                    placeholder="Your Message"
                    value={formDetails.message}
                    onChange={(e) =>
                      handleFormChange(`message`, e.target.value)
                    }
                  />
                  <button type="submit">
                    <spn>{buttonText}</spn>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? `danger` : `success`
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
