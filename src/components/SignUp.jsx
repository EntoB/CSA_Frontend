import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthForm from "./AuthForm";

export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      // Phone number validation
      const phoneRegex = /^[0-9]{10,15}$/;
      if (!phoneRegex.test(formData.phone_number)) {
        alert("Please enter a valid phone number (10-15 digits)");
        return;
      }
      console.log("Form Data:", formData); // Log the form data for debugging
      const response = await axios.post("http://127.0.0.1:8000/accounts/register/", {
        username: formData.username,
        registration_key: formData.registration_key,
        phone_number: formData.phone_number,
        password: formData.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        alert("Registration successful! Please login.");
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration error:", error);
      const errorMsg =
        error.response?.data?.phone_number?.[0] ||
        error.response?.data?.username?.[0] ||
        "Registration failed. Please try again.";
      alert(errorMsg);
    }
  };

  return <AuthForm type="signup" onSubmit={handleSubmit} />;
}
