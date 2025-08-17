import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Projects from "./pages/Projects/Projects";
import Tasks from "./pages/Tasks/Tasks";
import Settings from "./pages/Settings/Settings";
import "./index.css";

import ProtectedRoute from "./components/ProtectedRoute";
import NavBar from "./components/NavBar";


import UserManagement from "./pages/Admin/UserManagement";
import Reports from "./pages/Reporting/Reports";


import { ProjectProvider } from "./context/ProjectContext";
import { ReportProvider } from "./context/ReportContext";
import { NotificationProvider } from "./context/NotificationContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";


import Notifications from "./components/Notifications";


class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }
  render() {
    if (this.state.hasError)
      return <div>Something went wrong loading this page.</div>;
    return this.props.children;
  }
}


function AppContent() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        background: theme === "light" ? "#f9fafb" : "#111827",
        color: theme === "light" ? "#111827" : "#f9fafb",
        minHeight: "100vh",
        transition: "all 0.3s ease",
      }}
    >
      <Router>
       
        <Notifications />
        <ToastContainer position="top-right" autoClose={3000} />

        <Routes>
          
          <Route path="/login" element={<Login />} />

          
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <>
                  <NavBar />
                  <Dashboard />
                </>
              </ProtectedRoute>
            }
          />

          <Route
            path="/projects"
            element={
              <ProtectedRoute>
                <>
                  <NavBar />
                  <Projects />
                </>
              </ProtectedRoute>
            }
          />

          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <>
                  <NavBar />
                  <Tasks />
                </>
              </ProtectedRoute>
            }
          />

          <Route
            path="/reports"
            element={
              <ProtectedRoute>
                <ErrorBoundary>
                  <>
                    <NavBar />
                    <Reports />
                  </>
                </ErrorBoundary>
              </ProtectedRoute>
            }
          />

          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <>
                  <NavBar />
                  <Settings />
                </>
              </ProtectedRoute>
            }
          />

         
          <Route
            path="/admin"
            element={
              <ProtectedRoute roles={["admin"]}>
                <>
                  <NavBar />
                  <Admin />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute roles={["admin"]}>
                <>
                  <NavBar />
                  <UserManagement />
                </>
              </ProtectedRoute>
            }
          />

         
          <Route
            path="*"
            element={
              <div
                className="full-page"
                style={{ padding: "40px", textAlign: "center" }}
              >
                <h2>404 | Page Not Found</h2>
                <p>
                  Go to <a href="/">Dashboard</a> or <a href="/reports">Reports</a>
                </p>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ProjectProvider>
        <ReportProvider>
          <NotificationProvider>
            <AppContent />
          </NotificationProvider>
        </ReportProvider>
      </ProjectProvider>
    </ThemeProvider>
  );
}

export default App;
