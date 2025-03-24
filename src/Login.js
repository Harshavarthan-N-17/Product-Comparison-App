import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api"; // Ensure this file correctly handles API requests
import "./styles.css";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error before new request
    try {
      const response = await api.post("/login", formData);
      alert(response.data.message);
      localStorage.setItem("token", response.data.token);
      onLogin();
      navigate("/dashboard");
    } catch (err) {
      console.error(err.response?.data || "Login failed");
      setError(err.response?.data?.message || "Invalid credentials. Try again.");
    }
  };

  return (
    <div className="login-page">
      <h1 className="heading">Product Comparison</h1>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
