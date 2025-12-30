import React, { useState } from "react";

const EventRegistration = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    event: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.event) {
      alert("⚠️ Please fill all the details");
      return;
    }

    const confirmRegister = confirm(
      `Confirm your registration?\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Event: ${form.event}`
    );

    if (confirmRegister) {
      alert(
        `✅ Registration Successful!\n\n` +
        `You are registered for "${form.event}".\n` +
        `Confirmation sent to ${form.email}`
      );
      setForm({ name: "", email: "", event: "" });
    } else {
      alert("❌ Registration cancelled");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>🎟 Event Registration</h1>
        <p style={styles.subtitle}>
          Join exciting events and workshops
        </p>

        <form onSubmit={handleRegister}>
          <div style={styles.field}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Select Event</label>
            <select
              name="event"
              value={form.event}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Choose an event --</option>
              <option>Tech Conference 2025</option>
              <option>AI & ML Workshop</option>
              <option>Startup Bootcamp</option>
              <option>Cyber Security Seminar</option>
            </select>
          </div>

          <button type="submit" style={styles.button}>
            Register Now 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #020617, #0f172a)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Segoe UI, sans-serif",
  },
  card: {
    width: "380px",
    backgroundColor: "rgba(15, 23, 42, 0.9)",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 0 30px rgba(56, 189, 248, 0.15)",
    color: "white",
  },
  title: {
    textAlign: "center",
    marginBottom: "6px",
    fontSize: "28px",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#94a3b8",
    fontSize: "14px",
  },
  field: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "13px",
    color: "#cbd5f5",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #334155",
    backgroundColor: "#020617",
    color: "white",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "14px",
    marginTop: "10px",
    borderRadius: "12px",
    border: "none",
    backgroundColor: "#38bdf8",
    color: "#020617",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
  },
};

export default EventRegistration;
