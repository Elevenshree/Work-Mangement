import React from "react";

const Tasks = () => {
  
  const tasks = [
    { id: 1, title: "Design homepage", status: "In Progress" },
    { id: 2, title: "Fix login bug", status: "Pending" },
    { id: 3, title: "Write documentation", status: "Completed" },
  ];

  const containerStyle = {
    padding: "40px",
    maxWidth: "700px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#111827",
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
  };

  const listItemStyle = {
    padding: "15px 20px",
    marginBottom: "10px",
    borderRadius: "8px",
    backgroundColor: "#f3f4f6",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
  };

  const statusStyle = (status) => ({
    padding: "4px 10px",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "500",
    color:
      status === "Completed"
        ? "#16a34a"
        : status === "In Progress"
        ? "#2563eb"
        : "#f59e0b",
    backgroundColor:
      status === "Completed"
        ? "#d1fae5"
        : status === "In Progress"
        ? "#dbeafe"
        : "#fef3c7",
  });

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Tasks</h1>
      <ul style={listStyle}>
        {tasks.map((task) => (
          <li key={task.id} style={listItemStyle}>
            <span>{task.title}</span>
            <span style={statusStyle(task.status)}>{task.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
