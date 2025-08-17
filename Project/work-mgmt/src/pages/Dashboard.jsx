import { useAuth } from "../context/AuthContext";
import Metrics from "../components/dashboard/Metrics";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import Notifications from "../components/dashboard/Notifications";
import { useState } from "react";

export default function Dashboard() {
  const { user, logout } = useAuth();

  
  const [stats] = useState({
    projects: 5,
    tasks: 20,
    completed: 12,
    pending: 8,
  });

  
  const [activities] = useState([
    { user: "Admin", action: "Created a new project", time: "10:30 AM" },
    { user: "Manager", action: "Assigned a task", time: "09:45 AM" },
    { user: "Member", action: "Completed a task", time: "Yesterday" },
  ]);

  const containerStyle = {
    padding: "30px",
    maxWidth: "1200px",
    margin: "20px auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f4f6f8",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    color: "#000",
  };

  const headerStyle = {
    color: "#000",
    marginBottom: "10px",
  };

  const welcomeStyle = {
    color: "#000",
    fontSize: "16px",
    marginBottom: "25px",
  };

  
  const metricsStyle = {
    backgroundColor: "#dff6f0",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    color: "#000",
  };

  const activityStyle = {
    backgroundColor: "#fdf1d6",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    color: "#000",
  };

  const notificationStyle = {
    backgroundColor: "#f2e7fe",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    color: "#000",
  };

  const logoutBtnStyle = {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.2s ease",
  };

  const logoutBtnHover = (e) => {
    e.target.style.backgroundColor = "#c0392b";
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Dashboard</h2>
      <p style={welcomeStyle}>
        Welcome, <b>{user?.email}</b> (Role: <b>{user?.role}</b>)
      </p>

      <div style={metricsStyle}>
        <Metrics stats={stats} />
      </div>

      <div style={activityStyle}>
        <ActivityFeed activities={activities} />
      </div>

      <div style={notificationStyle}>
        <Notifications />
      </div>

      <button
        style={logoutBtnStyle}
        onMouseOver={logoutBtnHover}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#e74c3c")}
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
