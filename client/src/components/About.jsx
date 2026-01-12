export default function About() {
  return (
    <section className="py-20 bg-slate-800" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a full-stack web developer with 5+ years of professional
                experience, specializing in modern React applications. My
                journey in tech began with a passion for solving complex
                problems through elegant code.
              </p>
              <p>
                With a strong foundation in computer science, I've worked on
                diverse projects ranging from startup MVPs to enterprise-level
                applications. My focus is on creating performant, scalable, and
                user-friendly web experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I'm always excited about the latest
                trends in web development and AI.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="bg-slate-700 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-cyan-400">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-cyan-400">20+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-cyan-400">15+</div>
                <div className="text-sm text-gray-400">Tech Skills</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/20 to-slate-700/50 p-8 rounded-lg border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Key Highlights
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold"></span>
                <span>
                  Full-stack development with React, Node.js, and databases
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold"></span>
                <span>RESTful API design and integration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold"></span>
                <span>Responsive and accessible UI/UX implementation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold"></span>
                <span>Performance optimization and SEO</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold"></span>
                <span>Version control and collaborative development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold"></span>
                <span>Agile methodologies and best practices</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
