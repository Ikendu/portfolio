import { ArrowRightCircle } from "react-bootstrap-icons";
import bannerImage from "../assets/img/landingImg1.png";
import { useEffect, useState } from "react";
import passport from "../assets/img/passport.jpg";

export default function Banner() {
  const [focusText, setFocusText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delter, setDelta] = useState(200);
  const period = 700;
  const toDisplay = [
    "Full-Stack Engineer",
    "Frontend Major",
    "Reactjs Specialist",
    "Web Engineer",
    "Tech/ICT Innovator",
  ];

  useEffect(() => {
    let getTicker = setInterval(() => {
      ticker();
    }, delter);
    return () => clearInterval(getTicker);
  }, [focusText]);

  const ticker = () => {
    let i = loopNum % toDisplay.length;
    let fullText = toDisplay[i];
    let updatedText = isDeleting
      ? fullText.substring(0, focusText.length - 1)
      : fullText.substring(0, focusText.length + 1);

    setFocusText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 pt-20 pb-10"
      id="home"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="flex flex-col items-center md:items-start gap-4">
              <p className="text-cyan-400 text-lg font-semibold">
                Welcome to My Portfolio
              </p>

              <h1 className="text-4xl md:text-6xl font-bold">
                David Aniede <br />
              </h1>
              <div className=" md:hidden flex justify-center">
                <div className="group relative">
                  <img
                    src={passport}
                    alt="Profile Picture"
                    className="rounded-full max-h-56 max-w-56 object-fi"
                  />
                  <div className="absolute inset-0 bg-blue-900 opacity-50 group-hover:opacity-0 transition-opacity duration-300 rounded-full"></div>
                </div>
              </div>

              <h4 className="text-center md:text-start">
                Full-Stack Software Engineer | Frontend
                Major(Reactjs/JavaScript)
              </h4>
            </div>
            <h3
              className="text-cyan-400 min-h-[1.4em] text-3xl font-semibold"
              title="Full-Stack Developer, React Specialist"
            >
              {focusText}
              <span className="animate-pulse">|</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Full-Stack Web Developer with a passion for React and modern
              frontend technologies. 5+ years building scalable web applications
              using React, Next.js, modern JavaScript, and RESTful APIs.
              <br /> Active in the IT industry since 2012, with experience as a
              computer instructor and systems operator
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <a
                  href="mailto:ndubest56@gmail.com"
                  className="hover:text-cyan-400 transition"
                >
                  <span className=" font-bold text-cyan-300">Email: </span>
                  davidaniedexp@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <a
                  href="tel:+2348061632276"
                  className="hover:text-cyan-400 transition"
                >
                  <span className=" font-bold text-cyan-300">Phone: </span>
                  +234 806 163 2276
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Ikendu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/aniede"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition"
                >
                  Linkedin
                </a>
              </div>
            </div>

            <button className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              <a
                href="https://wa.link/t2k3ug"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                Let's Connect
                <ArrowRightCircle size={20} />
              </a>
            </button>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="group relative">
              <img
                src={passport}
                alt="Banner"
                className="max-w-md w-full object-cover rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-50 group-hover:opacity-0 transition-opacity duration-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
