import { useEffect, useState } from "react";
import logo from "../assets/icons/logoImage.png";
import linkedin from "../assets/img/0linkedin.svg";
import facebook from "../assets/img/0facebook.svg";
import instagram from "../assets/img/0instagram.svg";
import whatsapp from "../assets/img/0whatsapp.svg";
import twitter from "../assets/img/0twitter.svg";
import github from "../assets/img/0github.svg";

function NavbarComponent() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const socials = [
    { url: "https://wa.link/t2k3ug", icon: whatsapp, label: "WhatsApp" },
    {
      url: "https://linkedin.com/in/aniede",
      icon: linkedin,
      label: "LinkedIn",
    },
    {
      url: "https://www.facebook.com/chibundu101/",
      icon: facebook,
      label: "Facebook",
    },
    { url: "https://twitter.com/ikendul", icon: twitter, label: "Twitter" },
    { url: "http://github.com/ikendu", icon: github, label: "GitHub" },
    {
      url: "https://www.instagram.com/chibundu.aniede",
      icon: instagram,
      label: "Instagram",
    },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="flex-shrink-0 hover:scale-105 transition-transform"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 rounded-full border-2 border-cyan-400"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setActiveLink(link.id)}
                  className={`transition-colors font-medium ${
                    activeLink === link.id
                      ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                      : "text-gray-300 hover:text-cyan-300"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img src={social.icon} alt={social.label} className="w-6 h-6" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-cyan-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 py-4 border-t border-slate-700">
            <div className="flex flex-col gap-3 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => {
                    setActiveLink(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded transition-colors ${
                    activeLink === link.id
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "text-gray-300 hover:text-cyan-300"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex gap-3 px-4 flex-wrap">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <img
                    src={social.icon}
                    alt={social.label}
                    className="w-5 h-5"
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavbarComponent;
