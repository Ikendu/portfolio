import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
