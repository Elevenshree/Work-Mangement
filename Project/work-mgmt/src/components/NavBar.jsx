import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function NavBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { theme } = useTheme(); 

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  
  const isLight = theme === "light";

  const linkStyle = {
    textDecoration: "none",
    color: isLight ? "#374151" : "#e5e7eb",
    fontWeight: 500,
    fontSize: "15px",
    padding: "6px 12px",
    borderRadius: "6px",
    transition: "all 0.2s ease-in-out",
  };

  const buttonStyle = {
    padding: "6px 14px",
    cursor: "pointer",
    background: isLight ? "#2563eb" : "#1e40af",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: 500,
    transition: "all 0.2s ease-in-out",
  };

  const handleHover = (e, color) => (e.target.style.background = color);
  const handleLeave = (e) => (e.target.style.background = "transparent");

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 24px",
        borderBottom: `1px solid ${isLight ? "#e5e7eb" : "#374151"}`,
        position: "sticky",
        top: 0,
        background: isLight ? "#f9fafb" : "#111827",
        zIndex: 10,
      }}
    >
      <Link
        to="/"
        style={{
          fontWeight: 700,
          fontSize: "20px",
          color: isLight ? "#111827" : "#f9fafb",
          textDecoration: "none",
        }}
      >
        Work Mgmt
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
       
        {["/", "/projects", "/tasks", "/reports", "/settings"].map((path, idx) => {
          const labels = ["Dashboard", "Projects", "Tasks", "Reports", "Settings"];
          return (
            <Link
              key={idx}
              to={path}
              style={linkStyle}
              onMouseEnter={(e) => handleHover(e, isLight ? "#e0f2fe" : "#374151")}
              onMouseLeave={handleLeave}
            >
              {labels[idx]}
            </Link>
          );
        })}

        
        {user?.role === "admin" && (
          <Link
            to="/admin/users"
            style={linkStyle}
            onMouseEnter={(e) => handleHover(e, isLight ? "#fde68a" : "#52525b")}
            onMouseLeave={handleLeave}
          >
            User Mgmt
          </Link>
        )}

        
        <span style={{ color: isLight ? "#6b7280" : "#d1d5db", fontSize: 14, marginLeft: 8 }}>
          {user?.email} {user ? `(${user.role})` : ""}
        </span>

       
        <button
          onClick={handleLogout}
          style={buttonStyle}
          onMouseEnter={(e) => handleHover(e, isLight ? "#1d4ed8" : "#1e3a8a")}
          onMouseLeave={(e) => (e.target.style.background = isLight ? "#2563eb" : "#1e40af")}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
