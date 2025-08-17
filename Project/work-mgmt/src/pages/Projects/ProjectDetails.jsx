import React, { useState } from "react";
import TaskForm from "../../components/Tasks/TaskForm.jsx";
import TaskBoard from "../../components/Tasks/TaskBoard.jsx";
import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);

  const handleAdd = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  return (
    <div>
      <h2>Project #{id}</h2>
      <TaskForm onAdd={handleAdd} />
      <TaskBoard tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
