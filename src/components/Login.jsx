import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthForm from "./AuthForm";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/accounts/login/", {
        username: formData.username,
        password: formData.password,
      });

      if (response.status === 200) {
        alert("Login successful!");
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert(error.response?.data?.detail || "Login failed. Please try again.");
    }
  };

  return <AuthForm type="login" onSubmit={handleSubmit} />;
}
