import { Link } from "react-router-dom";

export default function Home() {
  // Check if user is logged in (you'll need to implement this logic)
  const isLoggedIn = localStorage.getItem("token") !== null;

  return (
    <div className="home-container">
      <h1>Welcome to Our App</h1>

      {isLoggedIn ? (
        <div className="auth-links">
          <p>You're logged in!</p>
          <Link to="/dashboard" className="btn">
            Go to Dashboard
          </Link>
        </div>
      ) : (
        <div className="auth-links">
          <Link to="/login" className="btn">
            Login
          </Link>
          <Link to="/register" className="btn">
            Register
          </Link>
        </div>
      )}

      <div className="features">
        <h2>App Features</h2>
        <ul>
          <li>Secure authentication</li>
          <li>Easy-to-use interface</li>
          <li>Fast performance</li>
        </ul>
      </div>
    </div>
  );
}
