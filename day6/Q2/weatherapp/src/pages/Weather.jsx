import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Weather() {
    const { city } = useParams();
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const API_KEY = '70fce7b08b37d93e5cf49dbafb3b504b';

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        )
            .then(res => res.json())
            .then(data => {
                if (data.cod === 200) {
                    setWeather(data);
                    setError('');
                } else {
                    setError(data.message);
                    setWeather(null);
                }
            });
    }, [city]);

    if (error) return <p style={{ padding: '2rem', color: 'red' }}>{error}</p>;
    if (!weather) return <p style={{ padding: '2rem' }}>Loading...</p>;

    const { main, weather: weatherDetails } = weather;

    return (
        <div style={{ padding: '2rem' }}>
            <button onClick={() => navigate('/')} style={{ marginBottom: '1rem' }}>
                🔙 Back to Search
            </button>

            <h2>Weather in {city}</h2>
            <p>Temperature: {main.temp} °C</p>
            <p>Humidity: {main.humidity}%</p>
            <p>Condition: {weatherDetails[0].description}</p>
        </div>
    );
}

export default Weather;
