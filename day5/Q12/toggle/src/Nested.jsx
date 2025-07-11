import React from 'react';
import DeepChild from './DeepChild';

function Nested() {
    return (
        <div style={{ marginTop: '20px' }}>
            <h2>Nested Component</h2>
            <DeepChild />
        </div>
    );
}

export default Nested;
