import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
    </>
  );
}

export default App;
