import { Col, Container, Row } from "react-bootstrap";
import { Facebook, Twitter } from "react-bootstrap-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter55 from "./assets/meter/meter55.png";
import meter65 from "./assets/meter/meter65.png";
import meter75 from "./assets/meter/meter75.png";
import meter80 from "./assets/meter/meter80.png";
import meter85 from "./assets/meter/meter85.png";
import meter90 from "./assets/meter/meter90.png";
import meter95 from "./assets/meter/meter95.png";
import colorSharp from "./assets/img/color-sharp.png";
import nextjsIcon from "./assets/icons/nextjsIcon.svg";
import tailwind from "./assets/icons/Tailwind.svg";
import diamondIcon from "./assets/icons/diamond.svg";
import nodejs from "./assets/icons/nodejs.svg";
import mongodb from "./assets/icons/mongodb.svg";
import FacebookIcon from "./assets/icons/FacebookIcon";
import bootstrap from "./assets/icons/bootstrap.svg";
import express from "./assets/icons/express.svg";
import html from "./assets/icons/html.svg";
import web from "./assets/icons/express.svg";
import socket from "./assets/icons/socket.svg";
import react from "./assets/icons/react.svg";
import sass from "./assets/icons/sass.svg";


FacebookIcon;


export const carouselItems = [
  {
    image: meter95,
    text: `React.js`,
  },
  {
    image: meter85,
    text: `Vanilla JavaScript`,
  },
  {
    image: meter90,
    text: `Tailwind CSS`,
  },
  {
    image: meter80,
    text: `HTML & CSS`,
  },
  {
    image: meter55,
    text: `Nextjs`,
  },
  {
    image: meter75,
    text: `Nodejs and MongoDB`,
  },
  {
    image: meter65,
    text: `Sass`,
  },
  {
    image: meter55,
    text: `Typescript`,
  },
  {
    image: meter75,
    text: `Express`,
  },
];
export const skillsIcons = [
  { id: 1, name: "Reactjs", icon: facebookIcon },
  { id: 2, name: "Nextjs", icon: nextjsIcon },
  { id: 3, name: "HTML", icon: diamondIcon },
  { id: 4, name: "Tailwind", icon: tailwind },
  { id: 5, name: "Bootstrap", icon: bootstrapIcon },
  { id: 6, name: "CSS", icon: cssIcon },
  { id: 7, name: "Nodejs", icon: nodejs },
  { id: 8, name: "MongoDB", icon: mongodb },
  { id: 9, name: "Express", icon: mongodb },
  { id: 10, name: "Web RTC", icon: cssIcon },
  { id: 11, name: "Socket.io", icon: bootstrapIcon },
  { id: 12, name: "Sass", icon: cssIcon },
];

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
