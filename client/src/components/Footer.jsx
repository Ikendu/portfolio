import { Link } from "react-router-dom";
import ScrollLink from "./ScrollLink";
import logo from "../assets/icons/logoImage.png";
import linkedin from "../assets/img/0linkedin.svg";
import facebook from "../assets/img/0facebook.svg";
import instagram from "../assets/img/0instagram.svg";
import whatsapp from "../assets/img/0whatsapp.svg";
import twitter from "../assets/img/0twitter.svg";
import github from "../assets/img/0github.svg";
import passport from "../assets/img/passport.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src={passport}
              alt="Logo"
              className="w-16 h-16 rounded-full border-2 border-cyan-400"
            />
            <div>
              <h3 className="text-white font-bold text-lg text-center md:text-left">
                David Aniede
              </h3>
              <p className="text-gray-400 text-sm">Full-Stack Web Developer</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-gray-400">Connect With Me</p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                  aria-label={social.label}
                >
                  <img
                    src={social.icon}
                    alt={social.label}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-slate-800 py-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <Link
              to="/"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              Home
            </Link>
            <ScrollLink
              to="/#about"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="/#skills"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="/#projects"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="/#contact"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              Contact
            </ScrollLink>
            <span className="text-gray-400 hover:text-cyan-400 transition cursor-pointer">
              Privacy
            </span>
            <Link
              to="/admin"
              className="text-gray-300 hover:text-cyan-400 transition text-sm font-medium"
            >
              Admin
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Copyright {currentYear} David Aniede. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Crafted with passion by a passionate developer
          </p>
        </div>
      </div>
    </footer>
  );
}
