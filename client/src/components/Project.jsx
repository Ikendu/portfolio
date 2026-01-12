import { useState } from "react";
import CardContents from "./CardContents";
import { freelanceWorks, personalWorks, teamWorks } from "./projectAll";

const projectCategories = [
  { id: "featured", label: "Featured Works", projects: freelanceWorks },
  { id: "team", label: "Team Projects", projects: teamWorks },
  { id: "learning", label: "Learning Projects", projects: personalWorks },
];

export default function Project() {
  const [activeTab, setActiveTab] = useState("featured");
  const currentProjects =
    projectCategories.find((cat) => cat.id === activeTab)?.projects || [];

  return (
    <section className="py-20 bg-slate-900" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-gray-400 text-lg">
            A selection of my work across different types of projects
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activeTab === category.id
                  ? "bg-cyan-500 text-white"
                  : "bg-slate-800 text-gray-300 hover:bg-slate-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, idx) => (
            <CardContents key={idx} {...project} />
          ))}
        </div>

        {currentProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
