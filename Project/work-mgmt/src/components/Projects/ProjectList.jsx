import React from "react";

const ProjectList = ({ projects = [], onSelect }) => {
  return (
    <div className="project-list">
      <h2>Projects</h2>
      {projects.length === 0 ? (
        <p>No projects available.</p>
      ) : (
        <ul>
          {projects.map((proj) => (
            <li key={proj.id} onClick={() => onSelect && onSelect(proj)}>
              <strong>{proj.name}</strong> — {proj.priority}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectList;
