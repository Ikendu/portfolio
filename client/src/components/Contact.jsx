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
                    value={initialEntries.firstname}
                    onChange={(e) =>
                      handleFormChange(`firstname`, e.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={initialEntries.lastname}
                    onChange={(e) =>
                      handleFormChange(`lastname`, e.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={initialEntries.email}
                    onChange={(e) => handleFormChange(`email`, e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    value={initialEntries.phone}
                    onChange={(e) => handleFormChange(`phone`, e.target.value)}
                  />
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
