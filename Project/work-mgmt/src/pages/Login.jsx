import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    
    if (password === "Password123!") {
      const role =
        email === "admin@corp.com"
          ? "admin"
          : email === "manager@corp.com"
          ? "manager"
          : "member";
      login({ email, role });
      window.location.href = "/";
    } else {
      setError("Invalid credentials");
    }
  }

  const containerStyle = {
    maxWidth: 360,
    margin: "80px auto",
    padding: "40px 30px",
    textAlign: "center",
    borderRadius: "12px",
    backgroundColor: "#fdfdfd",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    transform: "scale(1.02)",
    transition: "all 0.3s ease",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const headerStyle = {
    fontSize: "28px",
    marginBottom: "25px",
    color: "#000",
  };

  const inputStyle = {
    display: "block",
    margin: "12px auto",
    padding: "12px 10px",
    width: "90%",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    transition: "all 0.2s ease",
  };

  const inputFocusStyle = {
    borderColor: "#4CAF50",
    boxShadow: "0 0 5px rgba(76, 175, 80, 0.5)",
  };

  const buttonStyle = {
    padding: "12px 25px",
    marginTop: "15px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  const buttonHover = (e) => {
    e.target.style.backgroundColor = "#45a049";
    e.target.style.transform = "scale(1.05)";
  };

  const errorStyle = {
    color: "red",
    marginTop: "10px",
    fontWeight: "500",
  };

  const infoTextStyle = {
    marginTop: "15px",
    fontSize: "13px",
    color: "#333",
    lineHeight: "1.4",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
          onBlur={(e) =>
            Object.assign(e.target.style, { borderColor: "#ccc", boxShadow: "none" })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
          onBlur={(e) =>
            Object.assign(e.target.style, { borderColor: "#ccc", boxShadow: "none" })
          }
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={buttonHover}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#4CAF50";
            e.target.style.transform = "scale(1)";
          }}
        >
          Login
        </button>
      </form>
      {error && <p style={errorStyle}>{error}</p>}
      <p style={infoTextStyle}>
        Try emails: <b>admin@corp.com</b>, <b>manager@corp.com</b>, or <b>anything else</b>  
        <br /> Password: <b>Password123!</b>
      </p>
    </div>
  );
}
