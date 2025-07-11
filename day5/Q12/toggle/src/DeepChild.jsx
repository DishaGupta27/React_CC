import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function DeepChild() {
    const { theme } = useContext(ThemeContext);

    const childStyle = {
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#444',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '10px',
        borderRadius: '5px',
    };

    return (
        <div style={childStyle}>
            <p>This is the DeepChild component styled with the "{theme}" theme.</p>
        </div>
    );
}

export default DeepChild;
