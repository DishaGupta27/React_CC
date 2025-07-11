import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const API_KEY = "fe81190d";

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`)
            .then(res => res.json())
            .then(data => {
                if (data.Response === "True") {
                    setMovie(data);
                    setError('');
                } else {
                    setError(data.Error);
                }
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p style={{ padding: '2rem' }}>Loading...</p>;
    if (error) return <p style={{ padding: '2rem', color: 'red' }}>{error}</p>;

    return (
        <div style={{ padding: '2rem' }}>
            <Link to="/">🔙 Back to Search</Link>
            <h2>{movie.Title} ({movie.Year})</h2>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
            <img src={movie.Poster} alt={movie.Title} width="200" />
        </div>
    );
}

export default MovieDetails;
