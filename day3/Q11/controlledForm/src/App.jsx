import React, { useState } from "react";

function UsernameForm() {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      alert("Error: Username cannot be empty!");
    } else {
      alert(`Submitted Username: ${username}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UsernameForm;
