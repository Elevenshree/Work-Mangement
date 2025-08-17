import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem("auth_user");
    return raw ? JSON.parse(raw) : null;
  });

  useEffect(() => {
    if (user) localStorage.setItem("auth_user", JSON.stringify(user));
    else localStorage.removeItem("auth_user");
  }, [user]);

  
  const login = ({ email, role }) => {
    setUser({
      email,
      role: role || "member",
      status: "active",
      lastActivity: Date.now(),
    });
  };

  const logout = () => setUser(null);

  const touch = () => setUser((u) => (u ? { ...u, lastActivity: Date.now() } : u));

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, touch }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
