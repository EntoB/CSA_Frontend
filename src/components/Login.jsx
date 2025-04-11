import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthForm from "./AuthForm";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      const response = await axios.post("http://localhost:8000/api/login/", {
        username: formData.username,
        password: formData.password,
      });

      localStorage.setItem("token", response.data.access);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert(error.response?.data?.detail || "Login failed. Please try again.");
    }
  };

  return <AuthForm type="login" onSubmit={handleSubmit} />;
}
