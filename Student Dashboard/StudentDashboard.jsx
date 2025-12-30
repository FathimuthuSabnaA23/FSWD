import React, { useState } from "react";

const StudentDashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const students = [
    { id: 1, name: "Arjun", department: "Computer Science" },
    { id: 2, name: "Meera", department: "Artificial Intelligence" },
    { id: 3, name: "Rahul", department: "Data Science" },
    { id: 4, name: "Ananya", department: "Cyber Security" },
  ];

  const DashboardView = () => (
    <div>
      <h2>📊 Dashboard Overview</h2>
      <p>Total Students: <strong>{students.length}</strong></p>
    </div>
  );

  const StudentsView = () => (
    <div>
      <h2>🎓 Student List</h2>
      {students.map((student) => (
        <div key={student.id} style={styles.card}>
          <strong>{student.name}</strong>
          <p>{student.department}</p>
        </div>
      ))}
    </div>
  );

  const ProfileView = () => (
    <div>
      <h2>👤 Admin Profile</h2>
      <p>Name: Admin</p>
      <p>Role: Student Manager</p>
    </div>
  );

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>StudentSys</h2>
        <button
          style={styles.navBtn(activePage === "dashboard")}
          onClick={() => setActivePage("dashboard")}
        >
          Dashboard
        </button>
        <button
          style={styles.navBtn(activePage === "students")}
          onClick={() => setActivePage("students")}
        >
          Students
        </button>
        <button
          style={styles.navBtn(activePage === "profile")}
          onClick={() => setActivePage("profile")}
        >
          Profile
        </button>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        {activePage === "dashboard" && <DashboardView />}
        {activePage === "students" && <StudentsView />}
        {activePage === "profile" && <ProfileView />}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#0f172a",
    color: "white",
  },
  sidebar: {
    width: "220px",
    backgroundColor: "#020617",
    padding: "20px",
  },
  logo: {
    marginBottom: "20px",
    textAlign: "center",
  },
  navBtn: (active) => ({
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: active ? "#22c55e" : "#1e293b",
    color: active ? "black" : "white",
    cursor: "pointer",
    fontWeight: "bold",
  }),
  content: {
    flex: 1,
    padding: "25px",
  },
  card: {
    backgroundColor: "#020617",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  },
};

export default StudentDashboard;
