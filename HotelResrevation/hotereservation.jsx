import React from "react";

const HotelReservation = () => {
  const reserveRoom = () => {
    // Guest Name
    const guestName = prompt("Enter Guest Name:");
    if (!guestName) {
      alert("❌ Reservation failed: Guest name is required");
      return;
    }

    // Room Type
    const roomType = prompt(
      "Select Room Type:\nSingle / Double / Deluxe"
    );
    if (!roomType) {
      alert("❌ Reservation failed: Room type is required");
      return;
    }

    // Number of Nights
    const nights = prompt("Enter Number of Nights:");
    if (!nights || isNaN(nights) || nights <= 0) {
      alert("❌ Invalid number of nights");
      return;
    }

    // Price Calculation
    let pricePerNight = 0;
    if (roomType.toLowerCase() === "single") {
      pricePerNight = 2000;
    } else if (roomType.toLowerCase() === "double") {
      pricePerNight = 3500;
    } else if (roomType.toLowerCase() === "deluxe") {
      pricePerNight = 6000;
    } else {
      alert("❌ Invalid room type selected");
      return;
    }

    const totalAmount = pricePerNight * nights;

    // Confirmation
    const confirmReservation = confirm(
      `Please confirm your reservation:\n\n` +
      `Guest: ${guestName}\n` +
      `Room Type: ${roomType}\n` +
      `Nights: ${nights}\n` +
      `Total Amount: ₹${totalAmount}\n\n` +
      `Do you want to proceed?`
    );

    // Final Status
    if (confirmReservation) {
      alert(
        `✅ Reservation Confirmed!\n\n` +
        `🏨 Guest: ${guestName}\n` +
        `🛏 Room: ${roomType}\n` +
        `🌙 Nights: ${nights}\n` +
        `💰 Amount Paid: ₹${totalAmount}\n\n` +
        `Enjoy your stay!`
      );
    } else {
      alert("⚠️ Reservation cancelled by user");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hotel Reservation System</h1>
      <p style={styles.subtext}>
        Reserve your room 
      </p>
      <button style={styles.button} onClick={reserveRoom}>
        Reserve Room 🏨
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
    backgroundColor: "#22c55e",
    color: "#020617",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default HotelReservation;
