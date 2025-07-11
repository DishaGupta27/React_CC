import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function Footer() {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <footer style={{ padding: '10px', background: '#eee' }}>
            <p>{isLoggedIn ? 'Welcome, User' : 'Please log in'}</p>
        </footer>
    );
}

export default Footer;
