import { useUser } from '../contexts/UserContext';

function Profile() {
    const { user } = useUser();

    return (
        <div style={{ padding: '2rem' }}>
            <h2>User Profile</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
        </div>
    );
}

export default Profile;
