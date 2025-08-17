import React from "react";

function fmt(ts) {
  try {
    return new Date(ts).toLocaleString();
  } catch {
    return "-";
  }
}

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  fontFamily: "Arial, sans-serif",
  fontSize: "14px",
};

const thStyle = {
  borderBottom: "2px solid #d1d5db",
  padding: "12px 15px",
  textAlign: "left",
  backgroundColor: "#2563eb",
  color: "#fff",
};

const tdStyle = {
  borderBottom: "1px solid #e5e7eb",
  padding: "12px 15px",
  color: "#111827",
};

const rowHover = {
  backgroundColor: "#f3f4f6",
  cursor: "pointer",
};

export default function UserTable({ users = [], onEdit, onDelete, onToggleStatus }) {
  if (!users.length) return <p style={{ textAlign: "center", marginTop: 20 }}>No users yet.</p>;

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Name</th>
          <th style={thStyle}>Email</th>
          <th style={thStyle}>Role</th>
          <th style={thStyle}>Status</th>
          <th style={thStyle}>Last Activity</th>
          <th style={thStyle}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id} style={rowHover}>
            <td style={tdStyle}>{u.name}</td>
            <td style={tdStyle}>{u.email}</td>
            <td style={tdStyle}>{u.role}</td>
            <td style={tdStyle}>
              <span
                style={{
                  padding: "4px 10px",
                  borderRadius: 999,
                  background: u.status === "active" ? "#d1fae5" : "#fee2e2",
                  color: u.status === "active" ? "#047857" : "#b91c1c",
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                {u.status}
              </span>
            </td>
            <td style={tdStyle}>{fmt(u.lastActivity)}</td>
            <td style={tdStyle}>
              <button
                onClick={() => onEdit?.(u)}
                style={{
                  marginRight: 8,
                  padding: "6px 12px",
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => onToggleStatus?.(u)}
                style={{
                  marginRight: 8,
                  padding: "6px 12px",
                  background: u.status === "active" ? "#f97316" : "#10b981",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              >
                {u.status === "active" ? "Deactivate" : "Activate"}
              </button>
              <button
                onClick={() => onDelete?.(u)}
                style={{
                  padding: "6px 12px",
                  background: "#ef4444",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
