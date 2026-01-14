import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselItems, skillsIcons } from "../data";

const frontendSkills = skillsIcons.filter((skill) => skill.id < 9);
const backendSkills = skillsIcons.filter(
  (skill) => skill.id > 8 && skill.id < 16
);

function SkillGrid({ skills, title }) {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-4">
        {title}
      </h3>
      <ul className="flex flex-wrap gap-6">
        {skills.map((skill, idx) => (
          <li
            key={idx}
            className="flex items-center gap-3 bg-slate-800/50 px-4 py-3 rounded-lg hover:bg-slate-700/50 transition"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-8 h-8 bg-white rounded-full p-1"
            />
            <span className="text-gray-300">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="py-20 bg-slate-900" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <SkillGrid skills={frontendSkills} title="Frontend Stack" />
          <SkillGrid skills={backendSkills} title="Backend & Tools" />
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
            Languages
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "JavaScript",
              "TypeScript",
              "Java",
              "Python",
              "Ruby",
              "PHP",
              "C",
            ].map((lang) => (
              <span
                key={lang}
                className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-lg font-medium"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
            Proficiency Levels
          </h3>
          <Carousel
            responsive={{
              superLargeDesktop: {
                breakpoint: { max: 4000, min: 3000 },
                items: 7,
              },
              desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
              tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
              mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
            }}
            infinite
            className=""
          >
            {carouselItems.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center p-4">
                <img src={item.image} alt={item.text} className="mb-3" />
                <h5 className="text-center text-gray-300 font-medium">
                  {item.text}
                </h5>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
