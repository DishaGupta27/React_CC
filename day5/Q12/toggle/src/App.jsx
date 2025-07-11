import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import Nested from './Nested';

function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '20px',
  };

  return (
    <div style={appStyle}>
      <h1>Theme Toggle Example</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Nested />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
