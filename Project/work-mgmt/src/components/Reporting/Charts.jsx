import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useReports } from "../../context/ReportContext";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ReportCharts = () => {
  const { reports } = useReports();
  const latest = reports[reports.length - 1];

  if (!latest) return <p>No reports generated yet.</p>;

  const data = Object.keys(latest.data).map((status, i) => ({
    name: status,
    value: latest.data[status],
  }));

  return (
    <div className="report-charts">
      <h3>Latest Report (Project Status Distribution)</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ReportCharts;
