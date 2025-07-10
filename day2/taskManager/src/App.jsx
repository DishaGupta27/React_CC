import React, { useState } from 'react';
import './App.css';

const PRIORITY_ORDER = { High: 3, Medium: 2, Low: 1 };

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const addTask = () => {
    if (title.trim() === '') return;
    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false
    };
    const newTasks = [...tasks, newTask].sort(
      (a, b) => PRIORITY_ORDER[b.priority] - PRIORITY_ORDER[a.priority]
    );
    setTasks(newTasks);
    setTitle('');
    setPriority('Medium');
  };

  const toggleComplete = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  const deleteTask = (id) => {
    const filtered = tasks.filter((task) => task.id !== id);
    setTasks(filtered);
  };

  const filteredTasks = tasks.filter((task) => {
    const priorityMatch =
      priorityFilter === 'All' || task.priority === priorityFilter;
    const statusMatch =
      statusFilter === 'All' ||
      (statusFilter === 'Completed' && task.completed) ||
      (statusFilter === 'Incomplete' && !task.completed);
    return priorityMatch && statusMatch;
  });

  return (
    <div className="app">
      <h1>Advanced Task Manager</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="filters">
        <label>
          Priority:
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option>All</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </label>

        <label>
          Status:
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All</option>
            <option>Completed</option>
            <option>Incomplete</option>
          </select>
        </label>
      </div>

      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`task ${task.completed ? 'completed' : ''} ${task.priority === 'High' ? 'high-priority' : ''
              }`}
          >
            <span>{task.title}</span>
            <span>({task.priority})</span>
            <button onClick={() => toggleComplete(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
