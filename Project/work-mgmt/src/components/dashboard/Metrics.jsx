export default function Metrics({ stats }) {
  return (
    <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
      <div style={{ background: "#f3f3f3", padding: "16px", borderRadius: "6px" }}>
        <h3>Total Projects</h3>
        <p>{stats.projects}</p>
      </div>
      <div style={{ background: "#f3f3f3", padding: "16px", borderRadius: "6px" }}>
        <h3>Total Tasks</h3>
        <p>{stats.tasks}</p>
      </div>
      <div style={{ background: "#f3f3f3", padding: "16px", borderRadius: "6px" }}>
        <h3>Completed</h3>
        <p>{stats.completed}</p>
      </div>
      <div style={{ background: "#f3f3f3", padding: "16px", borderRadius: "6px" }}>
        <h3>Pending</h3>
        <p>{stats.pending}</p>
      </div>
    </div>
  );
}
