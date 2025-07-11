import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data.posts));
    }, []);

    const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div style={{ padding: '1rem' }}>
            <h1>Blog Posts</h1>
            <input
                type="text"
                placeholder="Search by title"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
            />
            <ul>
                {filtered.map(post => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
