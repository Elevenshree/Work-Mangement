import { useEffect, useState } from "react";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNote = {
        id: Date.now(),
        message: "New update received at " + new Date().toLocaleTimeString(),
      };
      setNotifications((prev) => [newNote, ...prev].slice(0, 5)); // keep last 5
    }, 5000); // every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginTop: "20px", background: "#f9f9f9", padding: "16px", borderRadius: "6px" }}>
      <h3>Notifications</h3>
      {notifications.length === 0 && <p>No notifications yet</p>}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {notifications.map((n) => (
          <li key={n.id} style={{ marginBottom: "8px" }}>
            🔔 {n.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
