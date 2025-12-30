import React, { useState } from "react";

const CourseEnrollment = () => {
  const [studentName, setStudentName] = useState("");
  const [department, setDepartment] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const departments = [
    "Computer Science",
    "Artificial Intelligence",
    "Cognitive Systems",
  ];

  const courses = [
    "Full Stack Development",
    "Machine Learning",
    "Mobile App Development",
    "DevOps Engineering",
    "UI / UX Design",
  ];

  const handleEnroll = (e) => {
    e.preventDefault();

    if (!studentName || !department || !selectedCourse) {
      alert("Please fill all the fields");
      return;
    }

    const newEnrollment = {
      name: studentName,
      department,
      course: selectedCourse,
    };

    setEnrolledCourses([...enrolledCourses, newEnrollment]);

    setStudentName("");
    setDepartment("");
    setSelectedCourse("");
  };

  return (
    <div style={styles.page}>
      {/* Main Page Title */}
      <h1 style={styles.mainTitle}>Course Enrollment</h1>

      <div style={styles.card}>
        <form onSubmit={handleEnroll}>
          <label style={styles.label}>Student Name</label>
          <input
            type="text"
            placeholder="Enter student name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Department</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            style={styles.input}
          >
            <option value="">Select Department</option>
            {departments.map((dept, index) => (
              <option key={index} value={dept}>
                {dept}
              </option>
            ))}
          </select>

          <label style={styles.label}>Course</label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            style={styles.input}
          >
            <option value="">Select Course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>

          <button type="submit" style={styles.button}>
            Enroll Student
          </button>
        </form>

        <hr style={styles.divider} />

        <h3 style={styles.subtitle}>Enrolled Students</h3>

        {enrolledCourses.length === 0 ? (
          <p style={styles.empty}>No enrollments yet</p>
        ) : (
          <ul style={styles.list}>
            {enrolledCourses.map((item, index) => (
              <li key={index} style={styles.listItem}>
                <div>
                  <strong>{item.name}</strong>
                  <div style={styles.meta}>{item.department}</div>
                </div>
                <span style={styles.course}>{item.course}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f4f6f8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
  },
  mainTitle: {
    marginBottom: "30px",
    fontSize: "32px",
    fontWeight: "700",
    color: "#1976d2",
    textAlign: "center",
  },
  card: {
    width: "430px",
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "6px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
  },
  divider: {
    margin: "20px 0",
  },
  subtitle: {
    marginBottom: "10px",
  },
  empty: {
    fontStyle: "italic",
    color: "#777",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
  },
  meta: {
    fontSize: "12px",
    color: "#666",
  },
  course: {
    fontWeight: "600",
    color: "#1976d2",
  },
};

export default CourseEnrollment;
