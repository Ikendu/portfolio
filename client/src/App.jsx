import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Layout from "./components/Layout";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import SubmitTestimonial from "./components/SubmitTestimonial";
import Admin from "./components/Admin";

// Home page component
function Home() {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Project />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/submit-testimonial" element={<SubmitTestimonial />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
