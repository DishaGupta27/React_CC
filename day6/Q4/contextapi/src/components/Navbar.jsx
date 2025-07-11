import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ padding: '1rem', background: '#eee' }}>
            <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
            <Link to="/profile" style={{ marginRight: '1rem' }}>Profile</Link>
            <Link to="/settings">Settings</Link>
        </nav>
    );
}

export default Navbar;
