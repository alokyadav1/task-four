import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import axios from "./Axios/axios.js"
function Login() {
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    const SuccessPassword = "SmartServTest@123"
    e.preventDefault();
    if(passwordError || usernameError){
        setError("Invalid username or password");
        return;
    } else if(password !== SuccessPassword){
        setError("Invalid username or password");
        return;
    }
    window.location.href = "/dashboard";
  };

  const validateUsername = (e) => {
    const username = e.target.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(username)) {
      setUsernameError("Invalid email format");
    } else {
      setUsernameError("");
    }
  };

  const validatePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]+$/;

    if (!regex.test(password)) {
      setPasswordError(
        "Password must contain an uppercase letter, a number, and only allow @ as a special character."
      );
    } else {
      setPasswordError("");
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await axios.post("/sendEmail", {});
    setSuccess("Email sent successfully");
    setLoading(false);
    console.log(res);
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <form action="#" onSubmit={handleSubmit}>
            <p>{error}</p>
            <p>{success}</p>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="username">
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={validateUsername}
              required
            />
            <p className="error">{usernameError}</p>
          </div>

          <div className="username">
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={validatePassword}
              required
            />
            <p className="error">{passwordError}</p>
          </div>

          <div className="login">
            <button type="submit">
              Login
            </button>
          </div>

          <div className="forgot-password">
            <button onClick={sendEmail} disabled={loading}>
              Forgot your password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
