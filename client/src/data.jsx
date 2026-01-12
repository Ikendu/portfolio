import meter95 from "./assets/meter/meter95.png";
import meter85 from "./assets/meter/meter85.png";
import meter90 from "./assets/meter/meter90.png";
import meter80 from "./assets/meter/meter80.png";
import meter75 from "./assets/meter/meter75.png";
import meter65 from "./assets/meter/meter65.png";
import meter55 from "./assets/meter/meter55.png";

import nextjsIcon from "./assets/icons/nextjsIcon.svg";
import tailwind from "./assets/icons/Tailwind.svg";
import nodejs from "./assets/icons/nodejs.svg";
import mongodb from "./assets/icons/mongodb.svg";
import bootstrap from "./assets/icons/bootstrap.svg";
import express from "./assets/icons/express.svg";
import html from "./assets/icons/html.svg";
import socket from "./assets/icons/socket.svg";
import react from "./assets/icons/react.svg";
import sass from "./assets/icons/sass.svg";
import css from "./assets/icons/css.svg";
import phpIcon from "./assets/icons/phpIcon.png";
import mysqlIcon from "./assets/icons/mysqlIcon.png";

// Proficiency meter items for carousel
export const carouselItems = [
  { image: meter95, text: "React.js" },
  { image: meter90, text: "JavaScript" },
  { image: meter90, text: "Tailwind CSS" },
  { image: meter85, text: "HTML & CSS" },
  { image: meter85, text: "Node.js" },
  { image: meter80, text: "MongoDB" },
  { image: meter75, text: "Express" },
  { image: meter75, text: "TypeScript" },
  { image: meter75, text: "Next.js" },
];

// Skills with icons - prioritized for full-stack React developer
export const skillsIcons = [
  // Frontend Stack
  { id: 1, name: "React", icon: react },
  { id: 2, name: "JavaScript", icon: react }, // Using react icon as placeholder
  { id: 3, name: "HTML5", icon: html },
  { id: 4, name: "Tailwind CSS", icon: tailwind },
  { id: 5, name: "CSS3", icon: css },
  { id: 6, name: "Next.js", icon: nextjsIcon },
  { id: 7, name: "TypeScript", icon: react },
  { id: 8, name: "Bootstrap", icon: bootstrap },

  // Backend Stack
  { id: 9, name: "Node.js", icon: nodejs },
  { id: 10, name: "MongoDB", icon: mongodb },
  { id: 11, name: "Express", icon: express },
  { id: 12, name: "PHP", icon: phpIcon },
  { id: 13, name: "MySQL", icon: mysqlIcon },
  { id: 14, name: "Socket.io", icon: socket },
  { id: 15, name: "Sass", icon: sass },
];

// Responsive carousel settings
export const responsive = {
  superLargeDesktop: {
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
