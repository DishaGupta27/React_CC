import React from 'react';
import Right from './Right';

function Main({ name }) {
  return (
    <div>
      <h2>Main Component</h2>
      <Right name={name} />
    </div>
  );
}

export default Main;
