export default function ActivityFeed({ activities }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Recent Activity</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {activities.map((a, idx) => (
          <li key={idx} style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>{a.user}</span>: {a.action}
            <br />
            <small style={{ color: "gray" }}>{a.time}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
