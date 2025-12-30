import React, { useState } from "react";

const UserProfileEditor = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    age: "22",
  });

  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!profile.name.trim()) {
      newErrors.name = "Name cannot be empty";
    }

    if (!profile.email.includes("@")) {
      newErrors.email = "Enter a valid email address";
    }

    if (!profile.age || profile.age <= 0) {
      newErrors.age = "Age must be greater than 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
    setSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (validate()) {
      setSaved(true);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Edit Profile</h1>
        <p style={styles.subtitle}>Update your personal information</p>

        <form onSubmit={handleSave}>
          <div style={styles.field}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.name && <p style={styles.error}>{errors.name}</p>}
          </div>

          <div style={styles.field}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.email && <p style={styles.error}>{errors.email}</p>}
          </div>

          <div style={styles.field}>
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={profile.age}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.age && <p style={styles.error}>{errors.age}</p>}
          </div>

          <button type="submit" style={styles.button}>
            Save Changes
          </button>

          {saved && (
            <p style={styles.success}>
              ✅ Profile updated successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#020617",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Segoe UI, sans-serif",
    color: "white",
  },
  card: {
    width: "360px",
    backgroundColor: "#0f172a",
    padding: "30px",
    borderRadius: "14px",
    boxShadow: "0 0 25px rgba(56, 189, 248, 0.15)",
  },
  title: {
    textAlign: "center",
    fontSize: "26px",
    marginBottom: "5px",
  },
  subtitle: {
    textAlign: "center",
    fontSize: "14px",
    marginBottom: "20px",
    color: "#94a3b8",
  },
  field: {
    marginBottom: "14px",
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
    marginTop: "10px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#38bdf8",
    color: "#020617",
    fontWeight: "bold",
    cursor: "pointer",
  },
  error: {
    fontSize: "12px",
    color: "#f87171",
    marginTop: "4px",
  },
  success: {
    marginTop: "12px",
    textAlign: "center",
    color: "#22c55e",
    fontSize: "14px",
  },
};

export default UserProfileEditor;
