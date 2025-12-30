import React, { useState } from "react";

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("All fields are required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setSuccess(true);
    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Course Enrollment</h1>
        <p style={styles.subtitle}>Create your student account</p>

        {success && (
          <div style={styles.successBox}>
            ✅ Registration Successful!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Register Now
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
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Segoe UI, sans-serif",
  },
  card: {
    width: "360px",
    backgroundColor: "#020617",
    borderRadius: "14px",
    padding: "30px",
    boxShadow: "0 0 25px rgba(0,0,0,0.6)",
    color: "white",
  },
  title: {
    textAlign: "center",
    marginBottom: "5px",
    fontSize: "26px",
  },
  subtitle: {
    textAlign: "center",
    color: "#94a3b8",
    marginBottom: "20px",
    fontSize: "14px",
  },
  successBox: {
    backgroundColor: "#16a34a",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
    marginBottom: "15px",
    fontSize: "14px",
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
    backgroundColor: "#22c55e",
    border: "none",
    borderRadius: "10px",
    color: "black",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default RegisterPage;
