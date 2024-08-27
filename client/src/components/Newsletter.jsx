import { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";

export default function Newsletter({ onValidated, status, message }) {
  const [email, setEmail] = useState(``);

  // clear form only when the the status === `success`
  useEffect(() => {
    if (status === `success`) clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email && email.indexOf(`@`) > -1 && onValidated({ EMAIL: email });
  };

  // clearing a single input form
  const clearFields = () => {
    setEmail(``);
  };
  return (
    <Col lg={12}>
      <div className="newsletter-bx md:p-24 md:px-28 py-16 px-10">
        <Row>
          <Col md={12} lg={6} xl={5}>
            <h3>Subscribe to our newsletter</h3>
            {status === "sending" && <Alert>sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && (
              <Alert variant="success">Subscribed !</Alert>
            )}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx md:m-0 mt-6">
                <input
                  type="email"
                  name=""
                  id=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email Address"
                  className=""
                />
                <button type="submit" className="p-3 px-4">
                  Submit
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
}
