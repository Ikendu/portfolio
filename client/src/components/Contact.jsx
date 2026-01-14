import { useState } from "react";
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
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormDetails({ ...formDetails, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setLoading(true);

    try {
      const response = await fetch(
        "https://portfolio.morelinks.com.ng/api/submit-contact.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDetails),
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus({
          message: "Message sent successfully! I'll get back to you soon.",
          success: true,
        });
        setFormDetails({ name: "", email: "", phone: "", message: "" });
        setButtonText("Send Message");
        setTimeout(() => setStatus({ message: "", success: false }), 5000);
      } else {
        setStatus({
          message: data.message || "Failed to send message. Please try again.",
          success: false,
        });
        setButtonText("Send Message");
      }
    } catch (error) {
      setStatus({
        message: "Error sending message. Please try again later.",
        success: false,
      });
      setButtonText("Send Message");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
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
                disabled={loading}
                className="w-full bg-slate-700 text-white placeholder-gray-500 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition disabled:opacity-50"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formDetails.email}
                onChange={(e) => handleChange("email", e.target.value)}
                disabled={loading}
                className="w-full bg-slate-700 text-white placeholder-gray-500 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition disabled:opacity-50"
              />
            </div>

            <input
              type="tel"
              placeholder="Your Phone Number"
              value={formDetails.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              disabled={loading}
              className="w-full bg-slate-700 text-white placeholder-gray-500 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition disabled:opacity-50"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              required
              value={formDetails.message}
              onChange={(e) => handleChange("message", e.target.value)}
              disabled={loading}
              className="w-full bg-slate-700 text-white placeholder-gray-500 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition resize-none disabled:opacity-50"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:cursor-not-allowed"
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
