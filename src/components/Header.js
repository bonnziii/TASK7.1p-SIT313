import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css'; // Add styles as necessary

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header-container">
      <h1>DEV@Deakin</h1>
      <input type="text" placeholder="Search..." className="search-bar" />
      <button onClick={() => navigate('/home')}>Home</button>
      <button onClick={() => navigate('/login')}>Login</button>
      {/* Updated button to Signup */}
      <button onClick={() => navigate('/signup')}>Signup</button>
    </header>
  );
};

export default Header;
