import React, { useState } from "react";

const BlogWithComments = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = (e) => {
    e.preventDefault();

    if (!comment) {
      alert("Please enter a comment");
      return;
    }

    setComments([
      {
        id: Date.now(),
        text: comment,
      },
      ...comments,
    ]);
    setComment("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.blogContainer}>
        {/* Blog Section */}
        <div style={styles.post}>
          <h1>📘 Understanding React Basics</h1>
          <p style={styles.meta}>Posted on July 2025 • Admin</p>

          <p>
            React is a JavaScript library used for building fast and interactive
            user interfaces. It allows developers to create reusable UI
            components and manage application state efficiently.
          </p>

          <p>
            One of the key features of React is real-time UI updates using state
            and props, which improves user experience significantly.
          </p>
        </div>

        {/* Comment Section */}
        <div style={styles.comments}>
          <h2>💬 Comments</h2>

          <form onSubmit={addComment} style={styles.form}>
            <textarea
              placeholder="Write your comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              style={styles.textarea}
            />
            <button type="submit" style={styles.button}>
              Post Comment
            </button>
          </form>

          {comments.length === 0 ? (
            <p style={styles.noComment}>No comments yet</p>
          ) : (
            comments.map((c) => (
              <div key={c.id} style={styles.commentBox}>
                {c.text}
              </div>
            ))
          )}
        </div>
      </div>
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
  blogContainer: {
    maxWidth: "900px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "20px",
  },
  post: {
    backgroundColor: "#020617",
    padding: "20px",
    borderRadius: "12px",
  },
  meta: {
    fontSize: "12px",
    color: "#94a3b8",
    marginBottom: "10px",
  },
  comments: {
    backgroundColor: "#020617",
    padding: "20px",
    borderRadius: "12px",
  },
  form: {
    marginBottom: "15px",
  },
  textarea: {
    width: "100%",
    height: "70px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #334155",
    backgroundColor: "#0f172a",
    color: "white",
    resize: "none",
  },
  button: {
    marginTop: "8px",
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#22c55e",
    fontWeight: "bold",
    cursor: "pointer",
  },
  noComment: {
    color: "#94a3b8",
    fontSize: "14px",
  },
  commentBox: {
    backgroundColor: "#1e293b",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "8px",
    fontSize: "14px",
  },
};

/* Responsive layout */
const mediaQuery = `
@media (max-width: 768px) {
  .blogContainer {
    grid-template-columns: 1fr;
  }
}
`;

export default BlogWithComments;
