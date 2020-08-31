import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header style={headerStyle}>
            <h1>React Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about"> About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#4f79a1',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
    letterSpacing: "6px",
    textTransform: "uppercase"
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;
