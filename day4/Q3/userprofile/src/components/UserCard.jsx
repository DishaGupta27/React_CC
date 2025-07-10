
export default function UserCard({ user }) {
    return (
        <div style={{ border: "1px solid #ddd", padding: "10px", margin: "5px" }}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
        </div>
    );
}
