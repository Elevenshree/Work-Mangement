import React from "react";
import { useProjects } from "../../context/ProjectContext";

const Projects = () => {
  const { projects } = useProjects();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🗂 Projects</h2>
      <div style={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} style={styles.card}>
            <h3 style={styles.cardTitle}>{project.name}</h3>
            <p style={{ ...styles.status, ...statusColor(project.status) }}>
              {project.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};


const statusColor = (status) => {
  switch (status) {
    case "Ongoing":
      return { color: "#ff9800" };
    case "Completed":
      return { color: "#4caf50" };
    case "Pending":
      return { color: "#f44336" };
    default:
      return { color: "#000" };
  }
};

const styles = {
  container: {
    padding: "30px",
    backgroundColor: "#f0f8ff",
    minHeight: "80vh",
  },
  heading: {
    color: "#673ab7",
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "20px",
    background: "linear-gradient(145deg, #ffffff, #e0f7fa)",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    transition: "0.3s",
    cursor: "pointer",
  },
  cardTitle: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#333",
  },
  status: {
    fontWeight: "600",
    fontSize: "16px",
  },
};

export default Projects;
