import { Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
}

export default App;
