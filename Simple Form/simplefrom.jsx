import React, { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill all fields");
      return;
    }
    alert("Form submitted successfully!");
    setName("");
    setEmail("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Contact Form</h1>
        <p style={styles.subtext}>Enter your details below</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Send Details
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#0f0f0f",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    width: "350px",
    backgroundColor: "#1a1a1a",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0, 255, 255, 0.15)",
    textAlign: "center",
  },
  heading: {
    color: "#ffffff",
    marginBottom: "5px",
  },
  subtext: {
    color: "#9ca3af",
    marginBottom: "20px",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #333",
    backgroundColor: "#000",
    color: "white",
    outline: "none",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#22d3ee",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "15px",
  },
};

export default SimpleForm;
