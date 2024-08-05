import { Col } from "react-bootstrap";

export default function CardContents({ title, desc, image }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={image} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{desc}</span>
        </div>
      </div>
    </Col>
  );
}
