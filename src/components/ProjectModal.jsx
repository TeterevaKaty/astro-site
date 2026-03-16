import { useState } from "react";

export default function ProjectModal({ projects }) {
  const [selected, setSelected] = useState(null);

  return (
    <div>

      <div className="grid">
        {projects.map(project => (
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