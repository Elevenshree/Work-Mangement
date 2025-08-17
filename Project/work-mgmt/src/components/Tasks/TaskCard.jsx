import React from "react";

const TaskCard = ({ task, onClick }) => {
  return (
    <div className="task-card" onClick={onClick}>
      <h4>{task.title}</h4>
      <p>Type: {task.type}</p>
      <p>Priority: {task.priority}</p>
      <p>Due: {task.dueDate}</p>
    </div>
  );
};

export default TaskCard;
