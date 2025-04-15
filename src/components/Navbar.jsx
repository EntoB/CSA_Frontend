import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Make sure to create this CSS file

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("token") !== null;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-logo">
          <Link to="/">Farmers' Cooperative</Link>
        </div>
        
        <div className="nav-links">
          <Link to="/">Home</Link>
          {isLoggedIn ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/reports">Reports</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/logout" className="logout-btn">Logout</Link>
            </>
          ) : (
            <>
              <Link to="/About">About Us</Link>
              <Link to="/Contact">Contact</Link>
              <div className="auth-dropdown">
                <button 
                  className="auth-toggle" 
                  onClick={toggleDropdown}
                  aria-expanded={isDropdownOpen}
                  aria-label="Authentication menu"
                >
                  Account ▾
                </button>
                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    <Link 
                      to="/login" 
                      className="dropdown-item"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Login
                    </Link>
                    <Link 
                      to="/signup" 
                      className="dropdown-item"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}