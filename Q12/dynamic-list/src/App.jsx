function App() {
  const topics = ["React", "JavaScript", "CSS"];

  return (
    <div>
      <h1>My Favorite Topics</h1>
      <ul>
        {topics.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
