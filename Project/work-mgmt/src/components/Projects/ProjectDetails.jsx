import React from "react";

const ProjectDetails = ({ project }) => {
  if (!project) return <p>Select a project to view details.</p>;

  return (
    <div className="project-details">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p><strong>Due Date:</strong> {project.dueDate}</p>
      <p><strong>Priority:</strong> {project.priority}</p>
    </div>
  );
};

export default ProjectDetails;
