import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [city, setCity] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (city.trim()) {
            navigate(`/weather/${city}`);
        }
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Search Weather</h1>
            <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{ padding: '0.5rem', marginRight: '1rem' }}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default Home;
