import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function Main() {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <main style={{ padding: '20px' }}>
            {isLoggedIn ? <h2>You are logged in!</h2> : <h2>Please log in to continue.</h2>}
        </main>
    );
}

export default Main;
