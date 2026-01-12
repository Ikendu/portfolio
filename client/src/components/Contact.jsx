import { useState } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/img/contact-img.svg";

export default function Contact() {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [buttonText, setButtonText] = useState("Send Message");
  const [status, setStatus] = useState({ message: "", success: false });

  const handleChange = (field, value) => {
    setFormDetails({ ...formDetails, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .send("service_2yry7mf", "template_flz454q", formDetails, {
        publicKey: "iPQWPyYdO6yD4VgQA",
      })
      .then(
        (response) => {
          setStatus({ message: "Message sent successfully!", success: true });
          setFormDetails({ name: "", email: "", phone: "", message: "" });
          setButtonText("Send Message");
          setTimeout(() => setStatus({ message: "", success: false }), 5000);
        },
        (err) => {
          setStatus({
            message: "Failed to send message. Try again.",
            success: false,
          });
          setButtonText("Send Message");
        }
      );
  };

  return (
    <section className="py-20 bg-slate-800" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Let's talk about your next project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="hidden md:flex items-center justify-center">
            <img src={contactImg} alt="Contact" className="max-w-sm" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formDetails.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full bg-slate-700 text-white placeholder-gray-500 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formDetails.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full bg-slate-700 text-white placeholder-gray-500 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <input
              type="tel"
              placeholder="Your Phone Number"
              value={formDetails.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full bg-slate-700 text-white placeholder-gray-500 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              required
              value={formDetails.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="w-full bg-slate-700 text-white placeholder-gray-500 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition resize-none"
            />

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {buttonText}
            </button>

            {status.message && (
              <div
                className={`p-4 rounded-lg ${
                  status.success
                    ? "bg-green-500/20 text-green-300 border border-green-500/50"
                    : "bg-red-500/20 text-red-300 border border-red-500/50"
                }`}
              >
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
