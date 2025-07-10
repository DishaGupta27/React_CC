import React, { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;

    if (value.trim() !== "") {
      alert(`Entered Text: ${value}`);
    } else {
      alert("Input is empty!");
    }
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
      <label htmlFor="uncontrolledInput">Enter text: </label>
      <input type="text" id="uncontrolledInput" ref={inputRef} placeholder="Type something..." />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
