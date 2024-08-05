import { useState } from "react";

import contactImg from "../assets/img/contact-img.svg";
import { Col, Container, Row } from "react-bootstrap";

export default function Contact() {
  const initialEntries = {
    firstname: ``,
    lastname: ``,
    phone: ``,
    email: ``,
    message: ``,
  };

  const [forsDetails, setFormDetails] = useState(initialEntries);
  const [buttonText, setButtonText] = useState(`Send`);
  const [status, setStatus] = useState({});

  const handleFormChange = (field, value) => {
    setFormDetails({ ...forsDetails, [field]: value });
  };
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className={`align-items-center`}>
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get in touch</h2>
            <form>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Frist Name"
                    value={forsDetails.firstname}
                    onChange={(e) =>
                      handleFormChange(`firstname`, e.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={forsDetails.lastname}
                    onChange={(e) =>
                      handleFormChange(`lastname`, e.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={forsDetails.email}
                    onChange={(e) => handleFormChange(`email`, e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    value={forsDetails.phone}
                    onChange={(e) => handleFormChange(`phone`, e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows={6}
                    placeholder="Your Message"
                    value={forsDetails.phone}
                    onChange={(e) =>
                      handleFormChange(`message`, e.target.value)
                    }
                  />
                </Col>
                <button type="submit">
                  <spn>{buttonText}</spn>
                </button>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
