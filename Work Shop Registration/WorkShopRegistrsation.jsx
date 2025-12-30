import React, { useState } from "react";

const WorkshopRegistration = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    workshop: "",
    experience: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🎓 Workshop Registration</h1>

      <div style={styles.container}>
        {/* FORM SECTION */}
        <div style={styles.card}>
          <h2>Registration Form</h2>

          <div style={styles.field}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label>Select Workshop</label>
            <select
              name="workshop"
              value={form.workshop}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Choose --</option>
              <option>React Fundamentals</option>
              <option>AI & Machine Learning</option>
              <option>Cyber Security Basics</option>
              <option>Cloud Computing</option>
            </select>
          </div>

          <div style={styles.field}>
            <label>Experience Level</label>
            <select
              name="experience"
              value={form.experience}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select --</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          <button style={styles.button}>Register</button>
        </div>

        {/* LIVE PREVIEW */}
        <div style={styles.preview}>
          <h2>Live Preview</h2>

          <p><strong>Name:</strong> {form.name || "—"}</p>
          <p><strong>Email:</strong> {form.email || "—"}</p>
          <p><strong>Workshop:</strong> {form.workshop || "—"}</p>
          <p><strong>Experience:</strong> {form.experience || "—"}</p>

          <div style={styles.badge}>
            {form.workshop
              ? "🎯 Ready to Join!"
              : "⌛ Waiting for details"}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#020617",
    color: "white",
    padding: "30px",
    fontFamily: "Segoe UI, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "32px",
  },
  container: {
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    width: "360px",
    backgroundColor: "#0f172a",
    padding: "25px",
    borderRadius: "14px",
    boxShadow: "0 0 25px rgba(56, 189, 248, 0.15)",
  },
  preview: {
    width: "360px",
    backgroundColor: "#020617",
    padding: "25px",
    borderRadius: "14px",
    border: "1px solid #334155",
  },
  field: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #334155",
    backgroundColor: "#020617",
    color: "white",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#38bdf8",
    color: "#020617",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
  badge: {
    marginTop: "20px",
    padding: "10px",
    textAlign: "center",
    borderRadius: "8px",
    backgroundColor: "#1e293b",
    color: "#e0f2fe",
    fontSize: "14px",
  },
};

export default WorkshopRegistration;
