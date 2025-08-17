import React, { createContext, useState, useContext, useCallback } from "react";

const ReportContext = createContext({
  reports: [],
  generateReport: () => {},
});

export const ReportProvider = ({ children }) => {
  const [reports, setReports] = useState([]);

  
  const generateReport = useCallback((projects = []) => {
    if (!projects || !projects.length) return;

    const statusSummary = projects.reduce((acc, project) => {
      acc[project.status] = (acc[project.status] || 0) + 1;
      return acc;
    }, {});

    const newReport = {
      id: Date.now(),
      generatedAt: new Date().toLocaleString(),
      data: statusSummary,
    };

    setReports((prev) => [...prev, newReport]);
  }, []);

  return (
    <ReportContext.Provider value={{ reports, generateReport }}>
      {children}
    </ReportContext.Provider>
  );
};

export const useReports = () => {
  const context = useContext(ReportContext);
  if (!context) throw new Error("useReports must be used within a ReportProvider");
  return context;
};
