import React, { useState, useRef } from "react";

function App() {
  const [reactTitle, setReactTitle] = useState("React Title");
  const [reactUpdates, setReactUpdates] = useState(0);

  const vanillaTitleRef = useRef("Vanilla Title");
  const [vanillaUpdates, setVanillaUpdates] = useState(0);

  const handleReactChange = () => {
    setReactTitle(prev => prev === "React Title" ? "React Updated!" : "React Title");
    setReactUpdates(prev => prev + 1);
  };

  const handleVanillaChange = () => {
    const titleElement = document.getElementById("vanilla-title");
    vanillaTitleRef.current = vanillaTitleRef.current === "Vanilla Title"
      ? "Vanilla Updated!"
      : "Vanilla Title";

    titleElement.textContent = vanillaTitleRef.current;
    setVanillaUpdates(prev => prev + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React vs Vanilla JS DOM Updates</h2>

      <div style={{ marginBottom: "30px" }}>
        <h3 id="vanilla-title">Vanilla Title</h3>
        <button onClick={handleVanillaChange}>Change Title (Vanilla JS)</button>
        <p>Vanilla DOM updates: {vanillaUpdates}</p>
      </div>

      <div>
        <h3>{reactTitle}</h3>
        <button onClick={handleReactChange}>Change Title (React)</button>
        <p>React DOM updates: {reactUpdates}</p>
      </div>
    </div>
  );
}

export default App;
