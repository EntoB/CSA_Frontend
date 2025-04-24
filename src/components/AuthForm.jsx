import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaPhone, FaEye, FaEyeSlash, FaKey } from "react-icons/fa";
import farmerImage from "../assets/farmer-image.jpg"; // Replace with your actual image path

export default function AuthForm({ type, onSubmit }) {
  const [formData, setFormData] = useState({
    registration_key: "",
    username: "",
    ...(type === "signup" && { phone_number: "" }),
    ...(type === "signup" && { registration_key: "" }),
    password: "",
    agreeTerms: type === "signup",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="auth-page-container">
      {/* Left side with image */}
      <div className="auth-image-side">
        <img src={farmerImage} alt="Farmers working in fields" className="auth-side-image" />
        <div className="auth-image-overlay">
          <h1>Farmers' Cooperative Union</h1>
          <p className="tagline">
            Empowering farmers with resources, support, and fair market access
          </p>
        </div>
      </div>

      {/* Right side with form */}
      <div className="auth-form-side">
        <div className="auth-card">
          <div className={`auth-header ${type === "login" ? "login-heading" : "signup-heading"}`}>
            <h2>{type === "login" ? "Welcome Back👏👏👏" : "Join Our Community"}</h2>
            <p>
              {type === "login"
                ? "Sign in to access your account"
                : "Create an account to get started"}
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(formData);
            }}
          >
            {/* Username Field with Icon */}
            <div className="form-group with-icon">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                required
              />
            </div>

            {/* Registration Key Field (Signup only) */}
            {type === "signup" && (
              <div className="form-group with-icon">
                <FaKey className="input-icon" />
                <input
                  type="text"
                  name="registration_key"
                  value={formData.registration_key}
                  onChange={handleChange}
                  placeholder="Registration Key"
                  required
                />
              </div>
            )}

            {/* Phone Number Field with Icon (Signup only) */}
            {type === "signup" && (
              <div className="form-group with-icon">
                <FaPhone className="input-icon" />
                <input
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  placeholder="Phone Number (10-15 digits)"
                  pattern="[0-9]{10,15}"
                  title="Please enter 10-15 digits"
                  required
                />
              </div>
            )}

            {/* Password Field with Icon and Toggle */}
            <div className="form-group with-icon">
              <FaLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              // minLength="6"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Terms Checkbox (Signup only) */}
            {type === "signup" && (
              <div className="terms-group">
                <label>
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                  />
                  <span>
                    I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
                  </span>
                </label>
              </div>
            )}

            <button type="submit" className="auth-button">
              {type === "login" ? "SIGN IN" : "REGISTER NOW"}
            </button>
          </form>

          <div className="auth-footer">
            {type === "login" ? (
              <>
                <p>Don't have an account? <Link to="/signup" className="auth-link">Sign up</Link></p>
                <button className="guest-button">CONTINUE AS GUEST</button>
                <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
              </>
            ) : (
              <p>Already a member? <Link to="/login" className="auth-link">Sign in</Link></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}