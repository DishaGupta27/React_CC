import React from "react";
import axios from "axios";

function TaskList() {
  const [tasks, setTasks] = React.useState([]);
  const [error, setError] = React.useState(null);

  const fetchData = () => {
    axios("https://your-firebase-db.firebaseio.com/tasks.json")
      .then((response) => {
        const data = response.data;

        // Firebase returns data as object: { id1: {name: ""}, id2: {name: ""} }
        const parsedTasks = Object.entries(data || {}).map(([id, task]) => ({
          id,
          ...task,
        }));

        setTasks(parsedTasks);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setError("Failed to load tasks. Please try again later.");
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Task List</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
