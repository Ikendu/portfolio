import { Col } from "react-bootstrap";

export default function CardContents({ title, desc, image, link }) {
  return (
    <Col sm={6} md={4}>
      <a href={link} target="_blank" className="proj-imgbx">
        <img src={image} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{desc}</span>
        </div>
      </a>
    </Col>
  );
}
