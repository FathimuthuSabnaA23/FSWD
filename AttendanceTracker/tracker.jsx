import React, { useState } from "react";

const AttendanceTracker = () => {
  const studentsList = [
    { id: 1, name: "Sabna " },
    { id: 2, name: "Mohana" },
    { id: 3, name: "Manusha" },
    { id: 4, name: "Hannah Candice" },
  ];

  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  // attendance[date][studentId] = true/false
  const [attendance, setAttendance] = useState({});

  const toggleAttendance = (studentId) => {
    setAttendance((prev) => ({
      ...prev,
      [selectedDate]: {
        ...prev[selectedDate],
        [studentId]: !prev[selectedDate]?.[studentId],
      },
    }));
  };

  const presentCount =
    Object.values(attendance[selectedDate] || {}).filter(Boolean).length;

  return (
    <div style={styles.container}>
      <h2>📋 Attendance Tracker</h2>

      {/* Date Picker */}
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        style={styles.date}
      />

      <ul style={styles.list}>
        {studentsList.map((student) => {
          const isPresent = attendance[selectedDate]?.[student.id] || false;

          return (
            <li key={student.id} style={styles.item}>
              <span>{student.name}</span>

              <button
                onClick={() => toggleAttendance(student.id)}
                style={{
                  ...styles.button,
                  backgroundColor: isPresent ? "#4CAF50" : "#F44336",
                }}
              >
                {isPresent ? "Present" : "Absent"}
              </button>
            </li>
          );
        })}
      </ul>

      <h3>
        ✅ Present: {presentCount} / {studentsList.length}
      </h3>
    </div>
  );
};

const styles = {
  container: {
    width: "350px",
    margin: "20px auto",
    padding: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontFamily: "Arial",
  },
  date: {
    marginBottom: "15px",
    padding: "5px",
    width: "100%",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    alignItems: "center",
  },
  button: {
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default AttendanceTracker;
