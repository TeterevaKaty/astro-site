import { useState } from "react";

export default function ProjectsApp({ projects }) {

  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered =
    filter === "all"
      ? projects
      : projects.filter(p => p.category === filter);

  return (
    <div>

      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("web")}>Web</button>
        <button onClick={() => setFilter("design")}>Design</button>
        <button onClick={() => setFilter("react")}>React</button>
      </div>

      <div className="grid">
        {filtered.map(project => (
          <div
            key={project.title}
            className="card"
            onClick={() => setSelected(project)}
          >
            <h3>{project.title}</h3>
            <p>{project.text}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal">
          <div className="modal-content">

            <h2>{selected.title}</h2>
            <p>{selected.text}</p>

            <button onClick={() => setSelected(null)}>
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
}