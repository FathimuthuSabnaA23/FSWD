import React, { useState } from "react";

const DashboardNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [showPanel, setShowPanel] = useState(false);

  const addNotification = () => {
    const messages = [
      "📢 New assignment uploaded",
      "📊 Attendance updated",
      "📅 Exam schedule released",
      "💬 New message from faculty",
      "✅ Profile verified successfully",
    ];

    const randomMessage =
      messages[Math.floor(Math.random() * messages.length)];

    setNotifications([
      {
        id: Date.now(),
        text: randomMessage,
        read: false,
      },
      ...notifications,
    ]);
  };

  const markAllRead = () => {
    setNotifications(
      notifications.map((n) => ({ ...n, read: true }))
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h2>Student Dashboard</h2>

        <div style={styles.bellContainer} onClick={() => setShowPanel(!showPanel)}>
          🔔
          {unreadCount > 0 && (
            <span style={styles.badge}>{unreadCount}</span>
          )}
        </div>
      </div>

      <button onClick={addNotification} style={styles.addBtn}>
        Generate Notification
      </button>

      {showPanel && (
        <div style={styles.panel}>
          <div style={styles.panelHeader}>
            <strong>Notifications</strong>
            <div>
              <button onClick={markAllRead} style={styles.smallBtn}>
                Mark All Read
              </button>
              <button onClick={clearAll} style={styles.smallBtn}>
                Clear
              </button>
            </div>
          </div>

          {notifications.length === 0 ? (
            <p style={styles.empty}>No notifications</p>
          ) : (
            notifications.map((note) => (
              <div
                key={note.id}
                style={{
                  ...styles.notification,
                  backgroundColor: note.read ? "#020617" : "#1e293b",
                }}
              >
                {note.text}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    color: "white",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bellContainer: {
    position: "relative",
    cursor: "pointer",
    fontSize: "26px",
  },
  badge: {
    position: "absolute",
    top: "-6px",
    right: "-8px",
    backgroundColor: "#ef4444",
    color: "white",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "12px",
  },
  addBtn: {
    marginTop: "20px",
    padding: "10px 15px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#22c55e",
    fontWeight: "bold",
    cursor: "pointer",
  },
  panel: {
    marginTop: "15px",
    width: "300px",
    backgroundColor: "#020617",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0 0 15px rgba(0,0,0,0.7)",
  },
  panelHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  smallBtn: {
    marginLeft: "5px",
    padding: "5px 8px",
    fontSize: "11px",
    backgroundColor: "#334155",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  notification: {
    padding: "8px",
    borderRadius: "6px",
    marginBottom: "6px",
    fontSize: "14px",
  },
  empty: {
    color: "#94a3b8",
    textAlign: "center",
  },
};

export default DashboardNotifications;
