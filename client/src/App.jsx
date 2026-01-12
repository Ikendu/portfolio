import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Testimonials from "./components/Testimonials";

function App() {
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
