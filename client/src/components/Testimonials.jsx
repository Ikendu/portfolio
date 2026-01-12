export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Project Manager",
      company: "Tech StartUp",
      feedback:
        "David delivered an exceptional React application that exceeded our expectations. His attention to detail and problem-solving skills were invaluable.",
      avatar: "👨‍💼",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "Digital Solutions Inc",
      feedback:
        "Working with David on our full-stack project was a great experience. He brings both technical expertise and excellent communication.",
      avatar: "👩‍💻",
    },
    {
      name: "Mike Williams",
      role: "Team Lead",
      company: "Creative Agency",
      feedback:
        "David's frontend skills transformed our vision into reality. He's professional, reliable, and a great team player.",
      avatar: "👨‍🔧",
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Testimonials
          </h2>
          <p className="text-gray-400 text-lg">
            What clients and colleagues say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <h3 className="text-white font-bold">{testimonial.name}</h3>
                  <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                "{testimonial.feedback}"
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ⭐
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
