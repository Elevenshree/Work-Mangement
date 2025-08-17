import React from "react";

const ReportTable = ({ reports }) => {
  if (!reports || reports.length === 0) {
    return <p>No reports generated yet.</p>;
  }

  
  const renderStatusData = (data) => {
    const parsed = typeof data === "string" ? JSON.parse(data) : data;
    return (
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {Object.entries(parsed).map(([status, count]) => (
          <span key={status} style={{ ...statusColor(status), fontWeight: "600", padding: "4px 8px", borderRadius: "6px" }}>
            {status}: {count}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Generated Reports</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Report ID</th>
            <th>Generated At</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id } style={{ color: "#000" }}>
              <td>{report.id}</td>
              <td>{report.generatedAt}</td>
              <td>{renderStatusData(report.data)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const statusColor = (status) => {
  switch (status) {
    case "Ongoing":
      return { backgroundColor: "#ffecb3", color: "#ff9800" }; 
    case "Completed":
      return { backgroundColor: "#c8e6c9", color: "#4caf50" };
    case "Pending":
      return { backgroundColor: "#ffcdd2", color: "#f44336" };
    default:
      return { backgroundColor: "#e0e0e0", color: "#000" }; 
  }
};

const styles = {
  container: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 3px 15px rgba(0,0,0,0.05)",
  },
  heading: {
    color: "#4A90E2",
    marginBottom: "15px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    textAlign: "left",
    padding: "8px",
    backgroundColor: "#f5f5f5",
  },
  td: {
    padding: "8px",
  },
};

export default ReportTable;
