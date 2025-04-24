import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthForm from "./AuthForm";
axios.defaults.withCredentials = true; // Enable sending and receiving cookies
export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/accounts/login/", {
        username: formData.username,
        password: formData.password,
      }, {
        headers: {
          "Content-Type": "application/json",

        },
        withCredentials: true,
      });


      if (response.status === 200) {
        alert("Login successful!");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert(error.response?.data?.detail || "Login failed. Please try again.");
    }
  };

  return <AuthForm type="login" onSubmit={handleSubmit} />;
}
