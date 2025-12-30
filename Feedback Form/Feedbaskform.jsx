import React, { useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const newFeedback = { name, email, message };
    setFeedbackList([...feedbackList, newFeedback]);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Feedback Form</h1>

      <div style={styles.container}>
        {/* Feedback Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Feedback</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Submit Feedback
          </button>
        </form>

        {/* Display Feedback */}
        <div style={styles.feedbackSection}>
          <h3 style={styles.subTitle}>Submitted Feedback</h3>

          {feedbackList.length === 0 ? (
            <p style={styles.noFeedback}>No feedback submitted yet</p>
          ) : (
            <ul style={styles.list}>
              {feedbackList.map((item, index) => (
                <li key={index} style={styles.card}>
                  <strong style={styles.name}>{item.name}</strong>
                  <p style={styles.email}>{item.email}</p>
                  <p style={styles.message}>{item.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#121212",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "30px",
    color: "#ffffff",
  },
  title: {
    marginBottom: "20px",
    fontSize: "32px",
    color: "#ffffff",
  },
  container: {
    display: "flex",
    gap: "30px",
  },
  form: {
    width: "300px",
    backgroundColor: "#000000",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(255,255,255,0.1)",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "5px",
    display: "block",
    color: "#ffffff",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    height: "80px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#333333",
    color: "#ffffff",
    border: "1px solid #777",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "600",
  },
  feedbackSection: {
    width: "320px",
  },
  subTitle: {
    marginBottom: "10px",
    color: "#ffffff",
  },
  noFeedback: {
    color: "#cccccc",
    fontStyle: "italic",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  card: {
    backgroundColor: "#000000",
    padding: "12px",
    borderRadius: "6px",
    marginBottom: "10px",
    border: "1px solid #444",
  },
  name: {
    color: "#ffffff",
    fontSize: "15px",
  },
  email: {
    color: "#cccccc",
    fontSize: "13px",
  },
  message: {
    color: "#ffffff",
    fontSize: "14px",
  },
};

export default FeedbackForm;import React, { useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const newFeedback = { name, email, message };
    setFeedbackList([...feedbackList, newFeedback]);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Feedback Form</h1>

      <div style={styles.container}>
        {/* Feedback Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Feedback</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Submit Feedback
          </button>
        </form>

        {/* Display Feedback */}
        <div style={styles.feedbackSection}>
          <h3 style={styles.subTitle}>Submitted Feedback</h3>

          {feedbackList.length === 0 ? (
            <p style={styles.noFeedback}>No feedback submitted yet</p>
          ) : (
            <ul style={styles.list}>
              {feedbackList.map((item, index) => (
                <li key={index} style={styles.card}>
                  <strong style={styles.name}>{item.name}</strong>
                  <p style={styles.email}>{item.email}</p>
                  <p style={styles.message}>{item.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#121212",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "30px",
    color: "#ffffff",
  },
  title: {
    marginBottom: "20px",
    fontSize: "32px",
    color: "#ffffff",
  },
  container: {
    display: "flex",
    gap: "30px",
  },
  form: {
    width: "300px",
    backgroundColor: "#000000",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(255,255,255,0.1)",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "5px",
    display: "block",
    color: "#ffffff",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    height: "80px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#333333",
    color: "#ffffff",
    border: "1px solid #777",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "600",
  },
  feedbackSection: {
    width: "320px",
  },
  subTitle: {
    marginBottom: "10px",
    color: "#ffffff",
  },
  noFeedback: {
    color: "#cccccc",
    fontStyle: "italic",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  card: {
    backgroundColor: "#000000",
    padding: "12px",
    borderRadius: "6px",
    marginBottom: "10px",
    border: "1px solid #444",
  },
  name: {
    color: "#ffffff",
    fontSize: "15px",
  },
  email: {
    color: "#cccccc",
    fontSize: "13px",
  },
  message: {
    color: "#ffffff",
    fontSize: "14px",
  },
};

export default FeedbackForm;import React, { useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const newFeedback = { name, email, message };
    setFeedbackList([...feedbackList, newFeedback]);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Feedback Form</h1>

      <div style={styles.container}>
        {/* Feedback Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Feedback</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Submit Feedback
          </button>
        </form>

        {/* Display Feedback */}
        <div style={styles.feedbackSection}>
          <h3 style={styles.subTitle}>Submitted Feedback</h3>

          {feedbackList.length === 0 ? (
            <p style={styles.noFeedback}>No feedback submitted yet</p>
          ) : (
            <ul style={styles.list}>
              {feedbackList.map((item, index) => (
                <li key={index} style={styles.card}>
                  <strong style={styles.name}>{item.name}</strong>
                  <p style={styles.email}>{item.email}</p>
                  <p style={styles.message}>{item.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#121212",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "30px",
    color: "#ffffff",
  },
  title: {
    marginBottom: "20px",
    fontSize: "32px",
    color: "#ffffff",
  },
  container: {
    display: "flex",
    gap: "30px",
  },
  form: {
    width: "300px",
    backgroundColor: "#000000",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(255,255,255,0.1)",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "5px",
    display: "block",
    color: "#ffffff",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    height: "80px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#333333",
    color: "#ffffff",
    border: "1px solid #777",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "600",
  },
  feedbackSection: {
    width: "320px",
  },
  subTitle: {
    marginBottom: "10px",
    color: "#ffffff",
  },
  noFeedback: {
    color: "#cccccc",
    fontStyle: "italic",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  card: {
    backgroundColor: "#000000",
    padding: "12px",
    borderRadius: "6px",
    marginBottom: "10px",
    border: "1px solid #444",
  },
  name: {
    color: "#ffffff",
    fontSize: "15px",
  },
  email: {
    color: "#cccccc",
    fontSize: "13px",
  },
  message: {
    color: "#ffffff",
    fontSize: "14px",
  },
};

export default FeedbackForm;import React, { useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const newFeedback = { name, email, message };
    setFeedbackList([...feedbackList, newFeedback]);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Feedback Form</h1>

      <div style={styles.container}>
        {/* Feedback Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Feedback</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Submit Feedback
          </button>
        </form>

        {/* Display Feedback */}
        <div style={styles.feedbackSection}>
          <h3 style={styles.subTitle}>Submitted Feedback</h3>

          {feedbackList.length === 0 ? (
            <p style={styles.noFeedback}>No feedback submitted yet</p>
          ) : (
            <ul style={styles.list}>
              {feedbackList.map((item, index) => (
                <li key={index} style={styles.card}>
                  <strong style={styles.name}>{item.name}</strong>
                  <p style={styles.email}>{item.email}</p>
                  <p style={styles.message}>{item.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#121212",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "30px",
    color: "#ffffff",
  },
  title: {
    marginBottom: "20px",
    fontSize: "32px",
    color: "#ffffff",
  },
  container: {
    display: "flex",
    gap: "30px",
  },
  form: {
    width: "300px",
    backgroundColor: "#000000",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(255,255,255,0.1)",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "5px",
    display: "block",
    color: "#ffffff",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    height: "80px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#333333",
    color: "#ffffff",
    border: "1px solid #777",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "600",
  },
  feedbackSection: {
    width: "320px",
  },
  subTitle: {
    marginBottom: "10px",
    color: "#ffffff",
  },
  noFeedback: {
    color: "#cccccc",
    fontStyle: "italic",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  card: {
    backgroundColor: "#000000",
    padding: "12px",
    borderRadius: "6px",
    marginBottom: "10px",
    border: "1px solid #444",
  },
  name: {
    color: "#ffffff",
    fontSize: "15px",
  },
  email: {
    color: "#cccccc",
    fontSize: "13px",
  },
  message: {
    color: "#ffffff",
    fontSize: "14px",
  },
};

export default FeedbackForm;import React, { useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const newFeedback = { name, email, message };
    setFeedbackList([...feedbackList, newFeedback]);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Feedback Form</h1>

      <div style={styles.container}>
        {/* Feedback Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Feedback</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Submit Feedback
          </button>
        </form>

        {/* Display Feedback */}
        <div style={styles.feedbackSection}>
          <h3 style={styles.subTitle}>Submitted Feedback</h3>

          {feedbackList.length === 0 ? (
            <p style={styles.noFeedback}>No feedback submitted yet</p>
          ) : (
            <ul style={styles.list}>
              {feedbackList.map((item, index) => (
                <li key={index} style={styles.card}>
                  <strong style={styles.name}>{item.name}</strong>
                  <p style={styles.email}>{item.email}</p>
                  <p style={styles.message}>{item.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#121212",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "30px",
    color: "#ffffff",
  },
  title: {
    marginBottom: "20px",
    fontSize: "32px",
    color: "#ffffff",
  },
  container: {
    display: "flex",
    gap: "30px",
  },
  form: {
    width: "300px",
    backgroundColor: "#000000",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(255,255,255,0.1)",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "5px",
    display: "block",
    color: "#ffffff",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    height: "80px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#333333",
    color: "#ffffff",
    border: "1px solid #777",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "600",
  },
  feedbackSection: {
    width: "320px",
  },
  subTitle: {
    marginBottom: "10px",
    color: "#ffffff",
  },
  noFeedback: {
    color: "#cccccc",
    fontStyle: "italic",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  card: {
    backgroundColor: "#000000",
    padding: "12px",
    borderRadius: "6px",
    marginBottom: "10px",
    border: "1px solid #444",
  },
  name: {
    color: "#ffffff",
    fontSize: "15px",
  },
  email: {
    color: "#cccccc",
    fontSize: "13px",
  },
  message: {
    color: "#ffffff",
    fontSize: "14px",
  },
};

export default FeedbackForm;import React, { useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const newFeedback = { name, email, message };
    setFeedbackList([...feedbackList, newFeedback]);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Feedback Form</h1>

      <div style={styles.container}>
        {/* Feedback Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Feedback</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Submit Feedback
          </button>
        </form>

        {/* Display Feedback */}
        <div style={styles.feedbackSection}>
          <h3 style={styles.subTitle}>Submitted Feedback</h3>

          {feedbackList.length === 0 ? (
            <p style={styles.noFeedback}>No feedback submitted yet</p>
          ) : (
            <ul style={styles.list}>
              {feedbackList.map((item, index) => (
                <li key={index} style={styles.card}>
                  <strong style={styles.name}>{item.name}</strong>
                  <p style={styles.email}>{item.email}</p>
                  <p style={styles.message}>{item.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#121212",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "30px",
    color: "#ffffff",
  },
  title: {
    marginBottom: "20px",
    fontSize: "32px",
    color: "#ffffff",
  },
  container: {
    display: "flex",
    gap: "30px",
  },
  form: {
    width: "300px",
    backgroundColor: "#000000",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(255,255,255,0.1)",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "5px",
    display: "block",
    color: "#ffffff",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    height: "80px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#333333",
    color: "#ffffff",
    border: "1px solid #777",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "600",
  },
  feedbackSection: {
    width: "320px",
  },
  subTitle: {
    marginBottom: "10px",
    color: "#ffffff",
  },
  noFeedback: {
    color: "#cccccc",
    fontStyle: "italic",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  card: {
    backgroundColor: "#000000",
    padding: "12px",
    borderRadius: "6px",
    marginBottom: "10px",
    border: "1px solid #444",
  },
  name: {
    color: "#ffffff",
    fontSize: "15px",
  },
  email: {
    color: "#cccccc",
    fontSize: "13px",
  },
  message: {
    color: "#ffffff",
    fontSize: "14px",
  },
};

export default FeedbackForm;import React, { useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const newFeedback = { name, email, message };
    setFeedbackList([...feedbackList, newFeedback]);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Feedback Form</h1>

      <div style={styles.container}>
        {/* Feedback Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Feedback</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Submit Feedback
          </button>
        </form>

        {/* Display Feedback */}
        <div style={styles.feedbackSection}>
          <h3 style={styles.subTitle}>Submitted Feedback</h3>

          {feedbackList.length === 0 ? (
            <p style={styles.noFeedback}>No feedback submitted yet</p>
          ) : (
            <ul style={styles.list}>
              {feedbackList.map((item, index) => (
                <li key={index} style={styles.card}>
                  <strong style={styles.name}>{item.name}</strong>
                  <p style={styles.email}>{item.email}</p>
                  <p style={styles.message}>{item.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#121212",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "30px",
    color: "#ffffff",
  },
  title: {
    marginBottom: "20px",
    fontSize: "32px",
    color: "#ffffff",
  },
  container: {
    display: "flex",
    gap: "30px",
  },
  form: {
    width: "300px",
    backgroundColor: "#000000",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(255,255,255,0.1)",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "5px",
    display: "block",
    color: "#ffffff",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    height: "80px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#333333",
    color: "#ffffff",
    border: "1px solid #777",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "600",
  },
  feedbackSection: {
    width: "320px",
  },
  subTitle: {
    marginBottom: "10px",
    color: "#ffffff",
  },
  noFeedback: {
    color: "#cccccc",
    fontStyle: "italic",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  card: {
    backgroundColor: "#000000",
    padding: "12px",
    borderRadius: "6px",
    marginBottom: "10px",
    border: "1px solid #444",
  },
  name: {
    color: "#ffffff",
    fontSize: "15px",
  },
  email: {
    color: "#cccccc",
    fontSize: "13px",
  },
  message: {
    color: "#ffffff",
    fontSize: "14px",
  },
};

export default FeedbackForm;import React, { useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const newFeedback = { name, email, message };
    setFeedbackList([...feedbackList, newFeedback]);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Feedback Form</h1>

      <div style={styles.container}>
        {/* Feedback Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Feedback</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Submit Feedback
          </button>
        </form>

        {/* Display Feedback */}
        <div style={styles.feedbackSection}>
          <h3 style={styles.subTitle}>Submitted Feedback</h3>

          {feedbackList.length === 0 ? (
            <p style={styles.noFeedback}>No feedback submitted yet</p>
          ) : (
            <ul style={styles.list}>
              {feedbackList.map((item, index) => (
                <li key={index} style={styles.card}>
                  <strong style={styles.name}>{item.name}</strong>
                  <p style={styles.email}>{item.email}</p>
                  <p style={styles.message}>{item.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#121212",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "30px",
    color: "#ffffff",
  },
  title: {
    marginBottom: "20px",
    fontSize: "32px",
    color: "#ffffff",
  },
  container: {
    display: "flex",
    gap: "30px",
  },
  form: {
    width: "300px",
    backgroundColor: "#000000",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(255,255,255,0.1)",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "5px",
    display: "block",
    color: "#ffffff",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    height: "80px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#333333",
    color: "#ffffff",
    border: "1px solid #777",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "600",
  },
  feedbackSection: {
    width: "320px",
  },
  subTitle: {
    marginBottom: "10px",
    color: "#ffffff",
  },
  noFeedback: {
    color: "#cccccc",
    fontStyle: "italic",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  card: {
    backgroundColor: "#000000",
    padding: "12px",
    borderRadius: "6px",
    marginBottom: "10px",
    border: "1px solid #444",
  },
  name: {
    color: "#ffffff",
    fontSize: "15px",
  },
  email: {
    color: "#cccccc",
    fontSize: "13px",
  },
  message: {
    color: "#ffffff",
    fontSize: "14px",
  },
};

export default FeedbackForm;import React, { useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const newFeedback = { name, email, message };
    setFeedbackList([...feedbackList, newFeedback]);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Feedback Form</h1>

      <div style={styles.container}>
        {/* Feedback Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Feedback</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Submit Feedback
          </button>
        </form>

        {/* Display Feedback */}
        <div style={styles.feedbackSection}>
          <h3 style={styles.subTitle}>Submitted Feedback</h3>

          {feedbackList.length === 0 ? (
            <p style={styles.noFeedback}>No feedback submitted yet</p>
          ) : (
            <ul style={styles.list}>
              {feedbackList.map((item, index) => (
                <li key={index} style={styles.card}>
                  <strong style={styles.name}>{item.name}</strong>
                  <p style={styles.email}>{item.email}</p>
                  <p style={styles.message}>{item.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#121212",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "30px",
    color: "#ffffff",
  },
  title: {
    marginBottom: "20px",
    fontSize: "32px",
    color: "#ffffff",
  },
  container: {
    display: "flex",
    gap: "30px",
  },
  form: {
    width: "300px",
    backgroundColor: "#000000",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(255,255,255,0.1)",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "5px",
    display: "block",
    color: "#ffffff",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    height: "80px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#333333",
    color: "#ffffff",
    border: "1px solid #777",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "600",
  },
  feedbackSection: {
    width: "320px",
  },
  subTitle: {
    marginBottom: "10px",
    color: "#ffffff",
  },
  noFeedback: {
    color: "#cccccc",
    fontStyle: "italic",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  card: {
    backgroundColor: "#000000",
    padding: "12px",
    borderRadius: "6px",
    marginBottom: "10px",
    border: "1px solid #444",
  },
  name: {
    color: "#ffffff",
    fontSize: "15px",
  },
  email: {
    color: "#cccccc",
    fontSize: "13px",
  },
  message: {
    color: "#ffffff",
    fontSize: "14px",
  },
};

export default FeedbackForm;import React, { useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const newFeedback = { name, email, message };
    setFeedbackList([...feedbackList, newFeedback]);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Feedback Form</h1>

      <div style={styles.container}>
        {/* Feedback Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Feedback</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Submit Feedback
          </button>
        </form>

        {/* Display Feedback */}
        <div style={styles.feedbackSection}>
          <h3 style={styles.subTitle}>Submitted Feedback</h3>

          {feedbackList.length === 0 ? (
            <p style={styles.noFeedback}>No feedback submitted yet</p>
          ) : (
            <ul style={styles.list}>
              {feedbackList.map((item, index) => (
                <li key={index} style={styles.card}>
                  <strong style={styles.name}>{item.name}</strong>
                  <p style={styles.email}>{item.email}</p>
                  <p style={styles.message}>{item.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#121212",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "30px",
    color: "#ffffff",
  },
  title: {
    marginBottom: "20px",
    fontSize: "32px",
    color: "#ffffff",
  },
  container: {
    display: "flex",
    gap: "30px",
  },
  form: {
    width: "300px",
    backgroundColor: "#000000",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(255,255,255,0.1)",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "5px",
    display: "block",
    color: "#ffffff",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    height: "80px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#333333",
    color: "#ffffff",
    border: "1px solid #777",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "600",
  },
  feedbackSection: {
    width: "320px",
  },
  subTitle: {
    marginBottom: "10px",
    color: "#ffffff",
  },
  noFeedback: {
    color: "#cccccc",
    fontStyle: "italic",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  card: {
    backgroundColor: "#000000",
    padding: "12px",
    borderRadius: "6px",
    marginBottom: "10px",
    border: "1px solid #444",
  },
  name: {
    color: "#ffffff",
    fontSize: "15px",
  },
  email: {
    color: "#cccccc",
    fontSize: "13px",
  },
  message: {
    color: "#ffffff",
    fontSize: "14px",
  },
};

export default FeedbackForm;import React, { useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const newFeedback = { name, email, message };
    setFeedbackList([...feedbackList, newFeedback]);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Feedback Form</h1>

      <div style={styles.container}>
        {/* Feedback Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Feedback</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Submit Feedback
          </button>
        </form>

        {/* Display Feedback */}
        <div style={styles.feedbackSection}>
          <h3 style={styles.subTitle}>Submitted Feedback</h3>

          {feedbackList.length === 0 ? (
            <p style={styles.noFeedback}>No feedback submitted yet</p>
          ) : (
            <ul style={styles.list}>
              {feedbackList.map((item, index) => (
                <li key={index} style={styles.card}>
                  <strong style={styles.name}>{item.name}</strong>
                  <p style={styles.email}>{item.email}</p>
                  <p style={styles.message}>{item.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#121212",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "30px",
    color: "#ffffff",
  },
  title: {
    marginBottom: "20px",
    fontSize: "32px",
    color: "#ffffff",
  },
  container: {
    display: "flex",
    gap: "30px",
  },
  form: {
    width: "300px",
    backgroundColor: "#000000",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(255,255,255,0.1)",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "5px",
    display: "block",
    color: "#ffffff",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    height: "80px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#333333",
    color: "#ffffff",
    border: "1px solid #777",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "600",
  },
  feedbackSection: {
    width: "320px",
  },
  subTitle: {
    marginBottom: "10px",
    color: "#ffffff",
  },
  noFeedback: {
    color: "#cccccc",
    fontStyle: "italic",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  card: {
    backgroundColor: "#000000",
    padding: "12px",
    borderRadius: "6px",
    marginBottom: "10px",
    border: "1px solid #444",
  },
  name: {
    color: "#ffffff",
    fontSize: "15px",
  },
  email: {
    color: "#cccccc",
    fontSize: "13px",
  },
  message: {
    color: "#ffffff",
    fontSize: "14px",
  },
};

export default FeedbackForm;
