import React, { useState } from "react";

const TaskForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    type: "Feature",
    dueDate: "",
    priority: "Medium",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
    setFormData({ title: "", type: "Feature", dueDate: "", priority: "Medium" });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <select name="type" value={formData.type} onChange={handleChange}>
        <option>Bug</option>
        <option>Feature</option>
        <option>Improvement</option>
      </select>
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
      />
      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">Save Task</button>
    </form>
  );
};

export default TaskForm;
