import React from "react";
import TaskCard from "./TaskCard";

const TaskBoard = ({ tasks = [], onTaskClick }) => {
  return (
    <div className="task-board">
      <h2>Task Board</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <div className="task-list">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onClick={() => onTaskClick && onTaskClick(task)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskBoard;
