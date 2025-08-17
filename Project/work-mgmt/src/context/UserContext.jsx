import React, { createContext, useContext, useMemo, useState } from "react";

const UserContext = createContext(null);

const seedUsers = [
  { id: "u1", name: "Alice Admin",  email: "admin@corp.com",  role: "admin",  status: "active",   lastActivity: Date.now() - 1000 * 60 * 10 },
  { id: "u2", name: "Mike Manager", email: "manager@corp.com",role: "manager",status: "active",   lastActivity: Date.now() - 1000 * 60 * 60 },
  { id: "u3", name: "Maya Member",  email: "user@corp.com",   role: "member", status: "inactive", lastActivity: Date.now() - 1000 * 60 * 90 },
];

export function UserProvider({ children }) {
  const [users, setUsers] = useState(() => {
    const raw = localStorage.getItem("users");
    return raw ? JSON.parse(raw) : seedUsers;
  });

  const persist = (next) => {
    setUsers(next);
    localStorage.setItem("users", JSON.stringify(next));
  };

  const createUser = (payload) => {
    const id = "u" + Date.now();
    const user = {
      id,
      name: payload.name?.trim() || "",
      email: payload.email?.trim() || "",
      role: payload.role || "member",
      status: payload.status || "active",
      lastActivity: Date.now(),
    };
    persist([user, ...users]);
  };

  const updateUser = (id, updates) => {
    const next = users.map((u) =>
      u.id === id ? { ...u, ...updates, lastActivity: Date.now() } : u
    );
    persist(next);
  };

  const deleteUser = (id) => {
    persist(users.filter((u) => u.id !== id));
  };

  const toggleStatus = (id) => {
    const next = users.map((u) =>
      u.id === id ? { ...u, status: u.status === "active" ? "inactive" : "active" } : u
    );
    persist(next);
  };

  const value = useMemo(
    () => ({ users, createUser, updateUser, deleteUser, toggleStatus }),
    [users]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUsers = () => useContext(UserContext);
