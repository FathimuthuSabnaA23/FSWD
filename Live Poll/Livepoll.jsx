import React, { useState } from "react";

const ClassroomPoll = () => {
  const [votes, setVotes] = useState({
    clear: 0,
    partial: 0,
    confused: 0,
    lost: 0,
  });

  const totalVotes =
    votes.clear + votes.partial + votes.confused + votes.lost;

  const castVote = (type) => {
    setVotes({ ...votes, [type]: votes[type] + 1 });
  };

  const getPercentage = (count) =>
    totalVotes === 0 ? 0 : Math.round((count / totalVotes) * 100);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>📊 Classroom Pulse Poll</h1>
      <p style={styles.subtitle}>
        How well did you understand today’s topic?
      </p>

      <div style={styles.pollBox}>
        <button onClick={() => castVote("clear")} style={styles.voteBtn}>
          😄 Got it clearly
        </button>
        <button onClick={() => castVote("partial")} style={styles.voteBtn}>
          🙂 Mostly understood
        </button>
        <button onClick={() => castVote("confused")} style={styles.voteBtn}>
          😐 Somewhat confused
        </button>
        <button onClick={() => castVote("lost")} style={styles.voteBtn}>
          😟 Totally lost
        </button>
      </div>

      <div style={styles.resultBox}>
        <h2>Live Class Pulse</h2>

        {Object.entries(votes).map(([key, value]) => (
          <div key={key} style={styles.barRow}>
            <span style={styles.label}>
              {key === "clear" && "😄 Clear"}
              {key === "partial" && "🙂 Partial"}
              {key === "confused" && "😐 Confused"}
              {key === "lost" && "😟 Lost"}
            </span>

            <div style={styles.barContainer}>
              <div
                style={{
                  ...styles.barFill,
                  width: `${getPercentage(value)}%`,
                }}
              ></div>
            </div>

            <span>{getPercentage(value)}%</span>
          </div>
        ))}

        <p style={styles.totalVotes}>Total Responses: {totalVotes}</p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    color: "white",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    fontSize: "32px",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#cbd5f5",
  },
  pollBox: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxWidth: "400px",
    margin: "auto",
  },
  voteBtn: {
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#1e293b",
    color: "white",
    border: "1px solid #334155",
    borderRadius: "8px",
    cursor: "pointer",
  },
  resultBox: {
    marginTop: "40px",
    maxWidth: "500px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#020617",
    padding: "20px",
    borderRadius: "10px",
  },
  barRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  label: {
    width: "90px",
  },
  barContainer: {
    flex: 1,
    height: "14px",
    backgroundColor: "#1e293b",
    borderRadius: "10px",
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    backgroundColor: "#38bdf8",
  },
  totalVotes: {
    marginTop: "15px",
    textAlign: "center",
    color: "#e0f2fe",
  },
};

export default ClassroomPoll;import React, { useState } from "react";

const ClassroomPoll = () => {
  const [votes, setVotes] = useState({
    clear: 0,
    partial: 0,
    confused: 0,
    lost: 0,
  });

  const totalVotes =
    votes.clear + votes.partial + votes.confused + votes.lost;

  const castVote = (type) => {
    setVotes({ ...votes, [type]: votes[type] + 1 });
  };

  const getPercentage = (count) =>
    totalVotes === 0 ? 0 : Math.round((count / totalVotes) * 100);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>📊 Classroom Pulse Poll</h1>
      <p style={styles.subtitle}>
        How well did you understand today’s topic?
      </p>

      <div style={styles.pollBox}>
        <button onClick={() => castVote("clear")} style={styles.voteBtn}>
          😄 Got it clearly
        </button>
        <button onClick={() => castVote("partial")} style={styles.voteBtn}>
          🙂 Mostly understood
        </button>
        <button onClick={() => castVote("confused")} style={styles.voteBtn}>
          😐 Somewhat confused
        </button>
        <button onClick={() => castVote("lost")} style={styles.voteBtn}>
          😟 Totally lost
        </button>
      </div>

      <div style={styles.resultBox}>
        <h2>Live Class Pulse</h2>

        {Object.entries(votes).map(([key, value]) => (
          <div key={key} style={styles.barRow}>
            <span style={styles.label}>
              {key === "clear" && "😄 Clear"}
              {key === "partial" && "🙂 Partial"}
              {key === "confused" && "😐 Confused"}
              {key === "lost" && "😟 Lost"}
            </span>

            <div style={styles.barContainer}>
              <div
                style={{
                  ...styles.barFill,
                  width: `${getPercentage(value)}%`,
                }}
              ></div>
            </div>

            <span>{getPercentage(value)}%</span>
          </div>
        ))}

        <p style={styles.totalVotes}>Total Responses: {totalVotes}</p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    color: "white",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    fontSize: "32px",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#cbd5f5",
  },
  pollBox: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxWidth: "400px",
    margin: "auto",
  },
  voteBtn: {
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#1e293b",
    color: "white",
    border: "1px solid #334155",
    borderRadius: "8px",
    cursor: "pointer",
  },
  resultBox: {
    marginTop: "40px",
    maxWidth: "500px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#020617",
    padding: "20px",
    borderRadius: "10px",
  },
  barRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  label: {
    width: "90px",
  },
  barContainer: {
    flex: 1,
    height: "14px",
    backgroundColor: "#1e293b",
    borderRadius: "10px",
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    backgroundColor: "#38bdf8",
  },
  totalVotes: {
    marginTop: "15px",
    textAlign: "center",
    color: "#e0f2fe",
  },
};

export default ClassroomPoll;import React, { useState } from "react";

const ClassroomPoll = () => {
  const [votes, setVotes] = useState({
    clear: 0,
    partial: 0,
    confused: 0,
    lost: 0,
  });

  const totalVotes =
    votes.clear + votes.partial + votes.confused + votes.lost;

  const castVote = (type) => {
    setVotes({ ...votes, [type]: votes[type] + 1 });
  };

  const getPercentage = (count) =>
    totalVotes === 0 ? 0 : Math.round((count / totalVotes) * 100);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>📊 Classroom Pulse Poll</h1>
      <p style={styles.subtitle}>
        How well did you understand today’s topic?
      </p>

      <div style={styles.pollBox}>
        <button onClick={() => castVote("clear")} style={styles.voteBtn}>
          😄 Got it clearly
        </button>
        <button onClick={() => castVote("partial")} style={styles.voteBtn}>
          🙂 Mostly understood
        </button>
        <button onClick={() => castVote("confused")} style={styles.voteBtn}>
          😐 Somewhat confused
        </button>
        <button onClick={() => castVote("lost")} style={styles.voteBtn}>
          😟 Totally lost
        </button>
      </div>

      <div style={styles.resultBox}>
        <h2>Live Class Pulse</h2>

        {Object.entries(votes).map(([key, value]) => (
          <div key={key} style={styles.barRow}>
            <span style={styles.label}>
              {key === "clear" && "😄 Clear"}
              {key === "partial" && "🙂 Partial"}
              {key === "confused" && "😐 Confused"}
              {key === "lost" && "😟 Lost"}
            </span>

            <div style={styles.barContainer}>
              <div
                style={{
                  ...styles.barFill,
                  width: `${getPercentage(value)}%`,
                }}
              ></div>
            </div>

            <span>{getPercentage(value)}%</span>
          </div>
        ))}

        <p style={styles.totalVotes}>Total Responses: {totalVotes}</p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    color: "white",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    fontSize: "32px",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#cbd5f5",
  },
  pollBox: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxWidth: "400px",
    margin: "auto",
  },
  voteBtn: {
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#1e293b",
    color: "white",
    border: "1px solid #334155",
    borderRadius: "8px",
    cursor: "pointer",
  },
  resultBox: {
    marginTop: "40px",
    maxWidth: "500px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#020617",
    padding: "20px",
    borderRadius: "10px",
  },
  barRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  label: {
    width: "90px",
  },
  barContainer: {
    flex: 1,
    height: "14px",
    backgroundColor: "#1e293b",
    borderRadius: "10px",
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    backgroundColor: "#38bdf8",
  },
  totalVotes: {
    marginTop: "15px",
    textAlign: "center",
    color: "#e0f2fe",
  },
};

export default ClassroomPoll;
