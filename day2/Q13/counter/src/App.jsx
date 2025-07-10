import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 10) setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Simple Counter App</h1>
      <h2>Count: {count}</h2>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} style={{ margin: '0 10px' }}>Decrement</button>
      <button onClick={handleReset}>Reset</button>

      {count === 10 && <p style={{ color: 'green', marginTop: '20px' }}>Goal Reached!</p>}
    </div>
  );
};

export default CounterApp;
