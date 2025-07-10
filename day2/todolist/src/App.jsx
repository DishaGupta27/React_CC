import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState(["Buy milk", "Study React"]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return; // prevent adding empty task
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const handleClearAll = () => {
    setTasks([]);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
      <button onClick={handleClearAll} style={{ marginLeft: '10px' }}>Clear All</button>

      <div style={{ marginTop: "20px" }}>
        {tasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {tasks.map((task, index) => (
              <li key={index} style={{ margin: "5px 0" }}>{task}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
