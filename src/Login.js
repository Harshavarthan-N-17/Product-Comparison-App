import React, { useState } from "react";
import "./styles.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === "user@gmail.com" && password === "pass1234") {
      onLogin();
    } else {
      setError("Incorrect details. Try again.");
    }
  };

  return (
    <div className="login-page">
      <h1 className="heading">Product Comparison </h1> {/* Added heading here */}
      <div className="login-container">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
