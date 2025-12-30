import React, { useState } from "react";

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (!taskInput.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: taskInput,
        completed: false,
      },
    ]);
    setTaskInput("");
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.completed));
  };

  return (
    <div style={styles.container}>
      <h2>📝 Task Dashboard</h2>

      <div style={styles.inputBox}>
        <input
          type="text"
          placeholder="Enter a task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} style={styles.item}>
            <span
              onClick={() => toggleComplete(task.id)}
              style={{
                ...styles.taskText,
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "#777" : "#000",
              }}
            >
              {task.text}
            </span>

            <button
              onClick={() => removeTask(task.id)}
              style={styles.removeButton}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      {tasks.some((t) => t.completed) && (
        <button onClick={clearCompleted} style={styles.clearButton}>
          Clear Completed
        </button>
      )}

      <p>
        Total: {tasks.length} | Completed:{" "}
        {tasks.filter((t) => t.completed).length}
      </p>
    </div>
  );
};

const styles = {
  container: {
    width: "360px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    fontFamily: "Arial",
    background: "#fafafa",
  },
  inputBox: {
    display: "flex",
    marginBottom: "15px",
  },
  input: {
    flex: 1,
    padding: "8px",
  },
  addButton: {
    marginLeft: "6px",
    padding: "8px 12px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
    background: "#fff",
    padding: "6px 8px",
    borderRadius: "6px",
  },
  taskText: {
    cursor: "pointer",
    flex: 1,
  },
  removeButton: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },
  clearButton: {
    marginTop: "10px",
    padding: "6px",
    width: "100%",
    cursor: "pointer",
  },
};

export default TaskDashboard;
