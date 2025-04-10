import React, { useState } from "react";
import "./TODOLIST.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editInput, setEditInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index) => {
    setEditingIndex(index);
    setEditInput(tasks[index]);
  };

  const saveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editInput;
    setTasks(updatedTasks);
    setEditingIndex(null);
  };

  const clearList = () => {
    setTasks([]);
  };

  return (
    <div className="todo-container">
      <h2>Daily tasks</h2>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {editingIndex === index ? (
              <input
                type="text"
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
                onBlur={() => saveTask(index)}
                autoFocus
              />
            ) : (
              <span className="task-text">{task}</span>
            )}
            <span className="task-buttons">
              <button className="delete" onClick={() => deleteTask(index)}>🗑</button>
              <button className="edit" onClick={() => editTask(index)}>✏</button>
            </span>
          </li>
        ))}
      </ul>
      <div className="input-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add something to your list"
        />
        <button className="add" onClick={addTask}>Add</button>
      </div>
      <button className="clear" onClick={clearList}>Delete List</button>
    </div>
  );
};

export default ToDoList;