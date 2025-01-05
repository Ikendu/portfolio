import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? 'animate__animated animate__backInLeft' : ''}>
            <Project />
          </div>
        )}
      </TrackVisibility>

      <Contact />
      <Footer />
    </>
  )
}

export default App
