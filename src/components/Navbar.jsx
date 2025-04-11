import { Link } from "react-router-dom";

export default function Navbar() {
  const isLoggedIn = localStorage.getItem("token") !== null;

  return (
    <nav className="navbar">
      <div className="nav-logo">YourApp</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        {isLoggedIn ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/logout">Logout</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
