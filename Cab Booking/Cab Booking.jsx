import React from "react";

const CabBooking = () => {
  const bookCab = () => {
    // Passenger Name
    const passenger = prompt("Enter Passenger Name:");
    if (!passenger) {
      alert("❌ Booking failed: Passenger name is required");
      return;
    }

    // Pickup Location
    const pickup = prompt("Enter Pickup Location:");
    if (!pickup) {
      alert("❌ Booking failed: Pickup location is required");
      return;
    }

    // Drop Location
    const drop = prompt("Enter Drop Location:");
    if (!drop) {
      alert("❌ Booking failed: Drop location is required");
      return;
    }

    // Cab Type
    const cabType = prompt(
      "Select Cab Type:\nMini / Sedan / SUV"
    );
    if (!cabType) {
      alert("❌ Booking failed: Cab type is required");
      return;
    }

    // Distance
    const distance = prompt("Enter Distance (in km):");
    if (!distance || isNaN(distance) || distance <= 0) {
      alert("❌ Invalid distance entered");
      return;
    }

    // Fare Calculation
    let ratePerKm = 0;
    if (cabType.toLowerCase() === "mini") {
      ratePerKm = 10;
    } else if (cabType.toLowerCase() === "sedan") {
      ratePerKm = 15;
    } else if (cabType.toLowerCase() === "suv") {
      ratePerKm = 20;
    } else {
      alert("❌ Invalid cab type selected");
      return;
    }

    const totalFare = ratePerKm * distance;

    // Confirmation
    const confirmBooking = confirm(
      `Please confirm your cab booking:\n\n` +
      `Passenger: ${passenger}\n` +
      `Pickup: ${pickup}\n` +
      `Drop: ${drop}\n` +
      `Cab Type: ${cabType}\n` +
      `Distance: ${distance} km\n` +
      `Total Fare: ₹${totalFare}\n\n` +
      `Do you want to proceed?`
    );

    // Final Status
    if (confirmBooking) {
      alert(
        `✅ Cab Booked Successfully!\n\n` +
        `🚖 Passenger: ${passenger}\n` +
        `📍 Route: ${pickup} → ${drop}\n` +
        `🚘 Cab Type: ${cabType}\n` +
        `📏 Distance: ${distance} km\n` +
        `💰 Fare Paid: ₹${totalFare}\n\n` +
        `Driver will arrive shortly!`
      );
    } else {
      alert("⚠️ Cab booking cancelled by user");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Online Cab Booking</h1>
      <p style={styles.subtext}>
        Book your cab using JavaScript dialog boxes
      </p>
      <button style={styles.button} onClick={bookCab}>
        Book Cab 🚖
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
    backgroundColor: "#facc15",
    color: "#020617",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default CabBooking;
