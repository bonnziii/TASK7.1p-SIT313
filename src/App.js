import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Import the header component
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import './styles/App.css';

function App() {
  return (
    <Router>
      {/* Include Header for consistent navigation */}
      <Header />
      <Routes>
        {/* Default route to show only header */}
        <Route path="/" element={<div></div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
