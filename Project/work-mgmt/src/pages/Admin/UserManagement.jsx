import React, { useState } from "react";
import { useUsers } from "../../context/UserContext";
import UserTable from "../../components/Users/UserTable";
import UserForm from "../../components/Users/UserForm";

export default function UserManagement() {
  const { users, createUser, updateUser, deleteUser, toggleStatus } = useUsers();
  const [editing, setEditing] = useState(null);

  const handleCreate = (data) => {
    createUser(data);
  };

  const handleUpdate = (data) => {
    updateUser(editing.id, data);
    setEditing(null);
  };

  const containerStyle = {
    padding: "30px",
    background: "#f0f8ff",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    maxWidth: "1200px",
    margin: "20px auto",
  };

  const headerStyle = {
    textAlign: "center",
    color: "#333",
    marginBottom: "30px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
    alignItems: "start",
  };

  const sectionStyle = {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  };

  const sectionHeader = {
    textAlign: "center",
    color: "#444",
    marginBottom: "15px",
  };

  const buttonStyle = {
    padding: "10px 16px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#4caf50",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    marginRight: "8px",
    transition: "all 0.2s ease",
  };

  const cancelBtnStyle = {
    ...buttonStyle,
    backgroundColor: "#f44336",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>User Management</h1>

      <div style={gridStyle}>
        <div style={sectionStyle}>
          <h3 style={sectionHeader}>{editing ? "Edit User" : "Create User"}</h3>
          <UserForm
            initialUser={editing}
            onSubmit={editing ? handleUpdate : handleCreate}
            onCancel={() => setEditing(null)}
            buttonStyle={buttonStyle}
            cancelButtonStyle={cancelBtnStyle}
          />
        </div>

        <div style={{ sectionStyle, color: "#000" }}>
          <h3 style={sectionHeader}>All Users</h3>
          <UserTable
            users={users}
            onEdit={setEditing}
            onDelete={(u) => deleteUser(u.id)}
            onToggleStatus={(u) => toggleStatus(u.id)}
            tableStyle={{
              width: "100%",
              borderCollapse: "collapse",
              background: "#fff",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
            thStyle={{
              backgroundColor: "#4caf50",
              color: "#fff",
              padding: "12px 15px",
              textAlign: "left",
            }}
            tdStyle={{
              padding: "12px 15px",
              textAlign: "left",
            }}
            rowHover={{ backgroundColor: "#e0f7fa", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
}
