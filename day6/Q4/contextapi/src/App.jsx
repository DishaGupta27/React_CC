import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';

function App() {
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
