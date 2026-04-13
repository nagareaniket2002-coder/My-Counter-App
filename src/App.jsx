import React, { useState } from "react";

function App() {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [booking, setBooking] = useState(null);

  const hotels = [
    { id: 1, name: "Sea View Resort", price: 2500 },
    { id: 2, name: "Mountain Stay", price: 1800 },
    { id: 3, name: "City Hotel", price: 2200 },
  ];

  const calculateDays = () => {
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diff = (outDate - inDate) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const handleBooking = () => {
    if (!name || !checkIn || !checkOut || !selectedHotel) {
      alert("Please fill all details");
      return;
    }

    const days = calculateDays();
    const total = days * selectedHotel.price;

    setBooking({
      name,
      hotel: selectedHotel.name,
      days,
      total,
    });
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to right, #89f7fe, #66a6ff)",
      fontFamily: "Arial",
      padding: "20px"
    }}>

      {/* Header */}
      <h1 style={{
        textAlign: "center",
        color: "#003566",
        marginBottom: "30px"
      }}>
        🏨 Hotel Booking App
      </h1>

      {/* Hotel Cards */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap"
      }}>
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            onClick={() => setSelectedHotel(hotel)}
            style={{
              padding: "20px",
              borderRadius: "15px",
              width: "220px",
              background: "white",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              cursor: "pointer",
              transform: selectedHotel?.id === hotel.id ? "scale(1.05)" : "scale(1)",
              border: selectedHotel?.id === hotel.id ? "2px solid green" : "none",
              transition: "0.3s"
            }}
          >
            <h3>{hotel.name}</h3>
            <p>₹{hotel.price} / night</p>
          </div>
        ))}
      </div>

      {/* Form */}
      <div style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        background: "white",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
      }}>
        <h2 style={{ textAlign: "center" }}>Booking Details</h2>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          style={inputStyle}
        />

        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleBooking} style={btnStyle}>
          Book Now
        </button>
      </div>

      {/* Booking Summary */}
      {booking && (
        <div style={{
          maxWidth: "400px",
          margin: "20px auto",
          padding: "20px",
          background: "#ffffff",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}>
          <h2 style={{ color: "green" }}>🧾 Booking Summary</h2>
          <p><b>Name:</b> {booking.name}</p>
          <p><b>Hotel:</b> {booking.hotel}</p>
          <p><b>Days:</b> {booking.days}</p>
          <p><b>Total:</b> ₹{booking.total}</p>
        </div>
      )}
    </div>
  );
}

// styles
const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const btnStyle = {
  width: "100%",
  padding: "10px",
  background: "#0077b6",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};

export default App;