import React from "react";
import "./Finish.css";

function Finish({ setEnableThankYou }) {
  const { name, phone, row, number } = JSON.parse(localStorage.getItem("currentBooking"));
  return (
    <div className="thank-you-container">
      <h2 className="thank-you-title">Thank You!</h2>
      <p className="thank-you-message">
        Your booking has been confirmed. Please find your details below:
      </p>
      <div className="booking-details">
        <div className="booking-detail">
          <p className="booking-label">Name:</p>
          <p className="booking-value">{name}</p>
        </div>
        <div className="booking-detail">
          <p className="booking-label">Phone Number:</p>
          <p className="booking-value">{phone}</p>
        </div>
        <div className="booking-detail">
          <p className="booking-label">Row:</p>
          <p className="booking-value">{row+1}</p>
        </div>
        <div className="booking-detail">
          <p className="booking-label">Seat:</p>
          <p className="booking-value">{number}</p>
        </div>
      </div>
      <button onClick={() => setEnableThankYou(false)}>Back to Seats</button>

    </div>
  );
}

export default Finish;
