function TaskCard() {
  return (
    <div
      style={{
        width: "350px",
        padding: "24px",
        margin: "50px auto",
        border: "1px solid #ddd",
        borderRadius: "12px",
        fontFamily: "Arial",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>High Priority</span>
        <span>Not Started</span>
      </div>

      <h2>Build Login Page</h2>

      <p>Owner: Alex</p>

      <button
        style={{
          padding: "10px 16px",
          cursor: "pointer",
        }}
      >
        Start Task
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Project Tasks</h1>
      <TaskCard />
    </div>
  );
}
