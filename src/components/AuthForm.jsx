import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaPhone, FaEye, FaEyeSlash ,FaKey } from "react-icons/fa";

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
    <div className="auth-container">
      {/* <div className="auth-header">
        <h1>TMO</h1>
        <h2>SOIL PRODUCTS OFFICE FARMERS APPLICATION</h2>
        <p className="tagline">
          We stand by the farmer with the billions of liras we spend on
          agriculture every year.
        </p>
      </div> */}

      <div className="auth-card">
        <h3>{type === "login" ? "Sign in" : "Create Account"}</h3>
        <p>
          Type your {type === "login" ? "username and password" : "details"} to{" "}
          {type === "login" ? "sign in" : "sign up"}.
        </p>

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
                  I agree: <a href="#">Terms and Conditions</a> &{" "}
                  <a href="#">Privacy Policy</a>
                </span>
              </label>
            </div>
          )}

          <button type="submit" className="auth-button">
            {type === "login" ? "SIGN IN" : "SIGN UP"}
          </button>
        </form>

        <div className="auth-footer">
          {type === "login" ? (
            <>
              <Link to="/signup" className="auth-link">
                Create an account
              </Link>
              <button className="guest-button">SIGN IN AS A GUEST</button>
            </>
          ) : (
            <Link to="/login" className="auth-link">
              Already have an account? Sign in
            </Link>
          )}
          {/* <p className="copyright">
            ©2021 All Rights reserved. Trego-Loom Capital, Ethics, & Terms and
            Conditions
          </p> */}
        </div>
      </div>

      {/* <div className="video-cta">
        <button className="video-button">Watch Video</button>
      </div> */}
    </div>
  );
}
