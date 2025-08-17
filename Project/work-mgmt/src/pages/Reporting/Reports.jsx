import React, { useEffect } from "react";
import ReportTable from "../../components/Reporting/ReportTable";
import ReportCharts from "../../components/Reporting/Charts";

import { useReports } from "../../context/ReportContext";
import { useProjects } from "../../context/ProjectContext";

const Reports = () => {
  const { reports, generateReport } = useReports();
  const { projects } = useProjects();

  useEffect(() => {
    if (projects && projects.length > 0) {
      generateReport(projects);
    }
  }, [projects, generateReport]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📊 Reports & Analytics</h2>

      <button style={styles.button} onClick={() => generateReport(projects)}>
        Generate New Report
      </button>

      <div style={styles.tableContainer}>
        <ReportTable reports={reports} />
      </div>

      <div style={styles.chartContainer}>
        <ReportCharts reports={reports} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    backgroundColor: "#f9f9ff",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    margin: "20px",
    minHeight: "80vh",
  },
  heading: {
    color: "#4A90E2",
    marginBottom: "20px",
    fontSize: "28px",
    fontWeight: "700",
  },
  button: {
    background: "linear-gradient(90deg, #ff8a00, #e52e71)",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
  },
  tableContainer: {
    marginTop: "30px",
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
  },
  chartContainer: {
    marginTop: "40px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
  },
};

export default Reports;
