import { useState } from "react";
import AnimatedCard from "./AnimatedCard.jsx";

export default function ProjectsApp({ projects }) {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered =
    filter === "all"
      ? projects
      : projects.filter(p => p.category === filter);

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex gap-2 mb-4">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("web")}>Web</button>
        <button onClick={() => setFilter("design")}>Design</button>
        <button onClick={() => setFilter("react")}>React</button>
      </div>

      {/* Projects grid */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filtered.map(project => (
          <AnimatedCard
            key={project.title}
            title={project.title}
            description={project.text}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>

      {/* Modal for selected project */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-lg max-w-lg w-full">
            <h2 className="font-bold text-xl mb-2">{selected.title}</h2>
            <p className="mb-4">{selected.text}</p>
            <button
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
              onClick={() => setSelected(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}