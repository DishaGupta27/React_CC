import React, { useState } from 'react';
import Main from './Main';

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Enter Your Name:</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
      />
      <Main name={name} />
    </div>
  );
}

export default App;
