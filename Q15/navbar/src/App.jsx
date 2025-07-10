import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    if (page === 'home') return <Home />;
    if (page === 'about') return <About />;
    if (page === 'contact') return <Contact />;
  };

  return (
    <div>
      <Navbar setPage={setPage} />
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
