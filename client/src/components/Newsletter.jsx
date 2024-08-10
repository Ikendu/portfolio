import { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";

export default function Newsletter({ onValidate, status, message }) {
  const [email, setEmail] = useState(``);

  // clear form only when the the status === `success`
  useEffect(() => {
    if (status === `success`) clearFelds();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email && email.indexOf(`@`) && onValidate({ EMAIL: email });
  };

  // clearing a single input form
  const clearFelds = () => {
    setEmail(``);
  };
  return (
    <Col lg={12}>
      <div className="newletter-bx">
        <Row>
          <Col md={12} lg={6} xl={5}>
            <h3>Subscribe to our newsletter</h3>
            {status === "sending" && (
              <Alert style={{ color: "blue" }}>sending...</Alert>
            )}
            {status === "error" && (
              <div
                style={{ color: "red" }}
                dangerouslySetInnerHTML={{ __html: message }}
              />
            )}
            {status === "success" && (
              <Alert style={{ color: "green" }}>Subscribed !</Alert>
            )}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  type="email"
                  name=""
                  id=""
                  value={email}
                  onSubmit={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
}
