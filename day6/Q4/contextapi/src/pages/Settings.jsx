import { useUser } from '../contexts/UserContext';
import { useState } from 'react';

function Settings() {
    const { user, updateUser } = useUser();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser({ name, email });
        alert('Profile updated!');
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Update Profile</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Name: </label><br />
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Email: </label><br />
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default Settings;
