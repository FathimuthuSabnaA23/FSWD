import React, { useState } from "react";

const RoleBasedLogin = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [page, setPage] = useState("login");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !role) {
      alert("Please enter username and select role");
      return;
    }

    setPage(role);
  };

  // Dashboards
  const Dashboard = ({ title }) => (
    <div style={styles.dashboard}>
      <h1>{title}</h1>
      <button onClick={() => setPage("login")} style={styles.logout}>
        Logout
      </button>
    </div>
  );

  if (page === "admin") return <Dashboard title="🛠 Admin Dashboard" />;
  if (page === "student") return <Dashboard title="🎓 Student Dashboard" />;
  if (page === "faculty") return <Dashboard title="👩‍🏫 Faculty Dashboard" />;

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Login</h1>
        <p style={styles.subtitle}>Select your role to continue</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={styles.input}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
          </select>

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    color: "white",
  },
  card: {
    width: "350px",
    padding: "30px",
    backgroundColor: "#020617",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0,0,0,0.6)",
    textAlign: "center",
  },
  title: {
    marginBottom: "10px",
  },
  subtitle: {
    marginBottom: "20px",
    color: "#94a3b8",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #334155",
    backgroundColor: "#0f172a",
    color: "white",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#22c55e",
    fontWeight: "bold",
    cursor: "pointer",
  },
  dashboard: {
    minHeight: "100vh",
    backgroundColor: "#020617",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  logout: {
    marginTop: "20px",
    padding: "10px 20px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#ef4444",
    color: "white",
    cursor: "pointer",
  },
};

export default RoleBasedLogin;
