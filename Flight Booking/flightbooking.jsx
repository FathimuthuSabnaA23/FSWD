import React from "react";

const FlightBooking = () => {
  const bookTicket = () => {
    // Passenger Name
    const name = prompt("Enter Passenger Name:");
    if (!name) {
      alert("❌ Booking failed: Passenger name is required");
      return;
    }

    // Destination
    const destination = prompt(
      "Enter Destination:\nDelhi / Mumbai / Chennai / Bangalore"
    );
    if (!destination) {
      alert("❌ Booking failed: Destination is required");
      return;
    }

    // Seat Class
    const seatClass = prompt(
      "Choose Seat Class:\nEconomy / Business"
    );
    if (!seatClass) {
      alert("❌ Booking failed: Seat class is required");
      return;
    }

    // Price Calculation
    let price = 0;
    if (seatClass.toLowerCase() === "economy") {
      price = 4500;
    } else if (seatClass.toLowerCase() === "business") {
      price = 8500;
    } else {
      alert("❌ Invalid seat class selected");
      return;
    }

    // Confirmation
    const confirmation = confirm(
      `Please confirm your booking details:\n\n` +
      `Passenger: ${name}\n` +
      `Destination: ${destination}\n` +
      `Class: ${seatClass}\n` +
      `Ticket Price: ₹${price}\n\n` +
      `Do you want to proceed?`
    );

    // Final Status
    if (confirmation) {
      alert(
        `✅ Booking Successful!\n\n` +
        `✈️ Passenger: ${name}\n` +
        `📍 Destination: ${destination}\n` +
        `💺 Class: ${seatClass}\n` +
        `💰 Paid: ₹${price}\n\n` +
        `Have a safe journey!`
      );
    } else {
      alert("⚠️ Booking cancelled by user");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Flight Ticket Booking</h1>
      <p style={styles.subtext}>
        Book your flight using interactive JavaScript dialog boxes
      </p>
      <button style={styles.button} onClick={bookTicket}>
        Book Flight ✈️
      </button>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#020617",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Segoe UI, sans-serif",
  },
  heading: {
    fontSize: "34px",
    marginBottom: "10px",
  },
  subtext: {
    fontSize: "15px",
    marginBottom: "25px",
    color: "#94a3b8",
    textAlign: "center",
    maxWidth: "400px",
  },
  button: {
    padding: "14px 30px",
    fontSize: "16px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#38bdf8",
    color: "#020617",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default FlightBooking;
