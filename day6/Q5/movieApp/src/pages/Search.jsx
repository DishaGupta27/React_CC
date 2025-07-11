import { useState } from 'react';
import { Link } from 'react-router-dom';

const API_KEY = "fe81190d";

function Search() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = () => {
        if (!query) return;

        setLoading(true);
        setError('');
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
            .then(res => res.json())
            .then(data => {
                if (data.Response === "True") {
                    setMovies(data.Search);
                    setError('');
                } else {
                    setError(data.Error);
                    setMovies([]);
                }
                setLoading(false);
            });
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1>🎬 Movie Search</h1>
            <input
                type="text"
                placeholder="Enter movie title"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ padding: '0.5rem', width: '250px', marginRight: '1rem' }}
            />
            <button onClick={handleSearch}>Search</button>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <ul style={{ marginTop: '2rem' }}>
                {movies.map(movie => (
                    <li key={movie.imdbID} style={{ marginBottom: '1rem' }}>
                        <Link to={`/movie/${movie.imdbID}`}>
                            {movie.Title} ({movie.Year})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Search;
