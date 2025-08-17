import React, { createContext, useContext, useState, useEffect } from "react";


const ProjectContext = createContext({
  projects: [],
  loading: true,
  error: null,
  addProject: () => {},
  updateProject: () => {},
  deleteProject: () => {},
});


export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = [
          { id: 1, name: "Project Alpha", status: "Ongoing" },
          { id: 2, name: "Project Beta", status: "Completed" },
          { id: 3, name: "Project Gamma", status: "Pending" },
        ];
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  
  const addProject = (project) =>
    setProjects((prev) => [...prev, { id: Date.now(), ...project }]);
  const updateProject = (id, updatedProject) =>
    setProjects((prev) =>
      prev.map((proj) => (proj.id === id ? { ...proj, ...updatedProject } : proj))
    );
  const deleteProject = (id) =>
    setProjects((prev) => prev.filter((proj) => proj.id !== id));

  return (
    <ProjectContext.Provider
      value={{ projects, loading, error, addProject, updateProject, deleteProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
};


export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) throw new Error("useProjects must be used within a ProjectProvider");
  return context;
};
