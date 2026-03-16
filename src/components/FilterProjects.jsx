import { useState } from "react";

export default function FilterProjects({ projects }) {

  const [filter, setFilter] = useState("all");

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

      <div>
        {filtered.map(project => (
          <div key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.text}</p>
          </div>
        ))}
      </div>

    </div>
  );
}