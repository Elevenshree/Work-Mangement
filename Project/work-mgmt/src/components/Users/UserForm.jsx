import React, { useEffect, useState } from "react";

const field = { display: "block", marginBottom: 16, width: "100%" };
const label = { display: "block", fontSize: 14, color: "#374151", marginBottom: 6, fontWeight: 500 };
const inputStyle = {
  width: "100%",
  padding: "10px",
  border: "1px solid #d1d5db",
  borderRadius: 8,
  fontSize: 14,
  outline: "none",
};
const selectStyle = { ...inputStyle, appearance: "none", backgroundColor: "#fff" };
const buttonStyle = {
  padding: "10px 18px",
  border: "none",
  borderRadius: 8,
  fontWeight: "bold",
  cursor: "pointer",
  transition: "all 0.2s",
};
const submitBtn = { ...buttonStyle, backgroundColor: "#2563eb", color: "#fff" };
const cancelBtn = { ...buttonStyle, backgroundColor: "#ef4444", color: "#fff" };

export default function UserForm({ initialUser = null, onSubmit, onCancel }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "member",
    status: "active",
    password: "",
  });

  useEffect(() => {
    if (initialUser) {
      setForm({
        name: initialUser.name || "",
        email: initialUser.email || "",
        role: initialUser.role || "member",
        status: initialUser.status || "active",
        password: "",
      });
    } else {
      setForm({ name: "", email: "", role: "member", status: "active", password: "" });
    }
  }, [initialUser]);

  const change = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    onSubmit?.(form);
  };

  return (
    <form onSubmit={submit} style={{ maxWidth: 400 }}>
      <div style={field}>
        <label style={label}>Name</label>
        <input name="name" value={form.name} onChange={change} placeholder="Full name" style={inputStyle} />
      </div>
      <div style={field}>
        <label style={label}>Email</label>
        <input name="email" type="email" value={form.email} onChange={change} placeholder="user@corp.com" style={inputStyle} />
      </div>
      <div style={field}>
        <label style={label}>Role</label>
        <select name="role" value={form.role} onChange={change} style={selectStyle}>
          <option value="admin">admin</option>
          <option value="manager">manager</option>
          <option value="member">member</option>
        </select>
      </div>
      <div style={field}>
        <label style={label}>Status</label>
        <select name="status" value={form.status} onChange={change} style={selectStyle}>
          <option value="active">active</option>
          <option value="inactive">inactive</option>
        </select>
      </div>
      {!initialUser && (
        <div style={field}>
          <label style={label}>Password (demo only)</label>
          <input name="password" type="password" value={form.password} onChange={change} placeholder="••••••••" style={inputStyle} />
        </div>
      )}
      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <button type="submit" style={submitBtn}>
          {initialUser ? "Update" : "Create"} User
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} style={cancelBtn}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
