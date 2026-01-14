import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Alex Johnson",
      role: "Project Manager",
      company: "Tech StartUp",
      feedback:
        "David delivered an exceptional React application that exceeded our expectations. His attention to detail and problem-solving skills were invaluable.",
      avatar: "👨‍💼",
      image: null,
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "CTO",
      company: "Digital Solutions Inc",
      feedback:
        "Working with David on our full-stack project was a great experience. He brings both technical expertise and excellent communication.",
      avatar: "👩‍💻",
      image: null,
    },
    {
      id: 3,
      name: "Mike Williams",
      role: "Team Lead",
      company: "Creative Agency",
      feedback:
        "David's frontend skills transformed our vision into reality. He's professional, reliable, and a great team player.",
      avatar: "👨‍🔧",
      image: null,
    },
  ]);

  // Fetch testimonials from backend on mount
  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch(
        "https://portfolio.morelinks.com.ng/api/testimonials.php"
      );
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.data.length > 0) {
          setTestimonials(data.data);
        }
      }
    } catch (error) {
      console.log("Using default testimonials");
    }
  };

  console.log("Testimonials", testimonials);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="py-20 bg-slate-900" id="testimonials">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Testimonials
          </h2>
          <p className="text-gray-400 text-lg">
            What clients and colleagues say about working with me
          </p>
          <a
            href="/submit-testimonial"
            className="inline-block mt-6 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-lg transition-all"
          >
            Share Your Feedback
          </a>
        </div>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={6000}
          swipeable={true}
          draggable={true}
          rtl={false}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="text-4xl">{testimonial.avatar}</div>
                  )}
                  <div>
                    <h3 className="text-white font-bold">{testimonial.name}</h3>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  "{testimonial.feedback}"
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

function CustomLeftArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-full transition-all"
    >
      ❮
    </button>
  );
}

function CustomRightArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-full transition-all"
    >
      ❯
    </button>
  );
}
