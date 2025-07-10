const Navbar = ({ setPage }) => {
    const linkStyle = {
        margin: '0 10px',
        cursor: 'pointer',
        color: 'blue',
        textDecoration: 'underline',
    };

    return (
        <nav style={{ padding: '10px', backgroundColor: '#ccc' }}>
            <span onClick={() => setPage('home')} style={linkStyle}>Home</span>
            <span onClick={() => setPage('about')} style={linkStyle}>About</span>
            <span onClick={() => setPage('contact')} style={linkStyle}>Contact</span>
        </nav>
    );
};

export default Navbar;
