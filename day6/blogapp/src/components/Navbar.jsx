import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ padding: '1rem', background: '#ddd' }}>
            <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
            <Link to="/about">About</Link>
        </nav>
    );
}

export default Navbar;
