import { Col } from "react-bootstrap";

export default function CardContents({ title, desc, image, link, tools }) {
  return (
    <Col sm={6} md={4}>
      <a href={link} target="_blank" className="proj-imgbx">
        <img src={image} alt="" className=" border-2" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{desc}</span>
          <p className="font-bold pt-4">{tools}</p>
        </div>
      </a>
    </Col>
  );
}
