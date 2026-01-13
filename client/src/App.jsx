import "./App.css";
import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import SubmitTestimonial from "./components/SubmitTestimonial";

function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/submit-testimonial") {
      setPage("submit-testimonial");
    } else {
      setPage("home");
    }
  }, []);

  if (page === "submit-testimonial") {
    return (
      <>
        <Navbar />
        <SubmitTestimonial />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Project />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
