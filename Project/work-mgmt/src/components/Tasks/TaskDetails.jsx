import React from "react";

const TaskDetails = ({ task }) => {
  if (!task) return <p>Select a task to view details.</p>;

  return (
    <div className="task-details">
      <h3>{task.title}</h3>
      <p><strong>Type:</strong> {task.type}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p><strong>Due Date:</strong> {task.dueDate}</p>
    </div>
  );
};

export default TaskDetails;
