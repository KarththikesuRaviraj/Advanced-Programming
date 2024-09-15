import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Admin.css';
import logo from '../../admin_assets/Admin.png';
import LoginPopup from '../LoginPopup/LoginPopup'; // Import LoginPopup component

const AdminNavbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear authentication data
    localStorage.removeItem('authToken'); 

    // Redirect to login page or homepage
    navigate('/'); 
  };

  return (
    <nav className="admin-navbar">
      <div className="admin-navbar-container">
        <Link to="/admin-reservation" className="navbar-logo">
          <img src={logo} alt="Logo" className="admin-logo-image" />
        </Link>
        <ul className="admin-navbar-menu">
          <li><Link to="/admin-reservation" className="admin-navbar-item">Home</Link></li>
          <li><Link to="/admin-gallery" className="admin-navbar-item">Gallery</Link></li>
          <li><Link to="/admin-facility" className="admin-navbar-item">Facility</Link></li>
          <li><Link to="/admin-reservation" className="admin-navbar-item">Reservation</Link></li>
          <li><Link to="/admin-query" className="admin-navbar-item">Query</Link></li>
          <li><Link to="/admin-user" className="admin-navbar-item">Users</Link></li>
          <li><Link to="/admin-other" className="admin-navbar-item">Reviews</Link></li>
        </ul>

        <div className="navbar-auth">
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>

      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
    </nav>
  );
}

export default AdminNavbar;
