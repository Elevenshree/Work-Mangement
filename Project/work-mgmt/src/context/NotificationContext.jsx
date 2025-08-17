import React, { createContext, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const notify = (message, type = "info") => {
    toast(message, { type });
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
