import './App.css';
import React, { useState } from 'react';
import SeatMap from './SeatMap';
import { useNavigate } from 'react-router-dom';
const initialSeats = [
  { id: 1, row: 'A', number: 1, available: true, name: '', phone: '' },
  { id: 2, row: 'A', number: 2, available: true, name: '', phone: '' },
  { id: 3, row: 'A', number: 3, available: false, name: '', phone: '' },
  { id: 4, row: 'A', number: 4, available: true, name: '', phone: '' },
  { id: 5, row: 'A', number: 5, available: true, name: '', phone: '' },
  { id: 6, row: 'A', number: 6, available: true, name: '', phone: '' },
  { id: 7, row: 'A', number: 7, available: false, name: '', phone: '' },
  { id: 8, row: 'A', number: 8, available: true, name: '', phone: '' },
  { id: 9, row: 'A', number: 9, available: true, name: '', phone: '' },
  { id: 10, row: 'A', number: 10, available: true, name: '', phone: '' },
  { id: 11, row: 'A', number: 11, available: true, name: '', phone: '' },
  { id: 12, row: 'A', number: 12, available: false, name: '', phone: '' },
  { id: 13, row: 'A', number: 13, available: true, name: '', phone: '' },
  { id: 14, row: 'A', number: 14, available: true, name: '', phone: '' },
  { id: 15, row: 'A', number: 15, available: true, name: '', phone: '' },
  { id: 16, row: 'B', number: 1, available: true, name: '', phone: '' },
  { id: 17, row: 'B', number: 2, available: true, name: '', phone: '' },
  { id: 18, row: 'B', number: 3, available: true, name: '', phone: '' },
  { id: 19, row: 'B', number: 4, available: true, name: '', phone: '' },
  { id: 20, row: 'B', number: 5, available: true, name: '', phone: '' },
  { id: 21, row: 'B', number: 6, available: true, name: '', phone: '' },
  { id: 22, row: 'B', number: 7, available: true, name: '', phone: '' },
  { id: 23, row: 'B', number: 8, available: false, name: '', phone: '' },
  { id: 24, row: 'B', number: 9, available: true, name: '', phone: '' },
  { id: 25, row: 'B', number: 10, available: true, name: '', phone: '' },
  { id: 26, row: 'B', number: 11, available: true, name: '', phone: '' },
  { id: 27, row: 'B', number: 12, available: true, name: '', phone: '' },
  { id: 28, row: 'B', number: 13, available: true, name: '', phone: '' },
  { id: 29, row: 'B', number: 14, available: true, name: '', phone: '' },
  { id: 30, row: 'B', number: 15, available: true, name: '', phone: '' },
  { id: 31, row: 'C', number: 1, available: true, name: '', phone: '' },
  { id: 32, row: 'C', number: 2, available: true, name: '', phone: '' },
  { id: 33, row: 'C', number: 3, available: true, name: '', phone: '' },
  { id: 34, row: 'C', number: 4, available: true, name: '', phone: '' },
  { id: 35, row: 'C', number: 5, available: true, name: '', phone: '' },
  { id: 36, row: 'C', number: 6, available: true, name: '', phone: '' },
  { id: 37, row: 'C', number: 7, available: true, name: '', phone: '' },
  { id: 38, row: 'C', number: 8, available: true, name: '', phone: '' },
  { id: 39, row: 'C', number: 9, available: true, name: '', phone: '' },
  { id: 40, row: 'C', number: 10, available: true, name: '', phone: '' },
  { id: 41, row: 'C', number: 11, available: true, name: '', phone: '' },
  { id: 42, row: 'C', number: 12, available: true, name: '', phone: '' },
  { id: 43, row: 'C', number: 13, available: true, name: '', phone: '' },
  { id: 44, row: 'C', number: 14, available: true, name: '', phone: '' },
  { id: 45, row: 'C', number: 15, available: true, name: '', phone: '' },
  { id: 46, row: 'D', number: 1, available: true, name: '', phone: '' },
  { id: 47, row: 'D', number: 2, available: true, name: '', phone: '' },
  { id: 48, row: 'D', number: 3, available: true, name: '', phone: '' },
  { id: 49, row: 'D', number: 4, available: true, name: '', phone: '' },
  { id: 50, row: 'D', number: 5, available: true, name: '', phone: '' },
  { id: 51, row: 'D', number: 6, available: true, name: '', phone: '' },
  { id: 52, row: 'D', number: 7, available: true, name: '', phone: '' },
  { id: 53, row: 'D', number: 8, available: true, name: '', phone: '' },
  { id: 54, row: 'D', number: 9, available: true, name: '', phone: '' },
  { id: 55, row: 'D', number: 10, available: true, name: '', phone: '' },
  { id: 56, row: 'D', number: 11, available: true, name: '', phone: '' },
  { id: 57, row: 'D', number: 12, available: true, name: '', phone: '' },
  { id: 58, row: 'D', number: 13, available: true, name: '', phone: '' },
  { id: 59, row: 'D', number: 14, available: true, name: '', phone: '' },
  { id: 60, row: 'D', number: 15, available: true, name: '', phone: '' },
]
  // ... and

const ReservationForm = () => {
  const navigate=useNavigate();
  const [seats, setSeats] = useState(initialSeats);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const handleSeatSelect = (seat) => {
    setSelectedSeat(seat);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedSeats = seats.map((seat) =>
      seat.id === selectedSeat.id
        ? { ...seat, available: false, name: formName, phone: formPhone }
        : seat
    );

    setSeats(updatedSeats);
    setSelectedSeat(null);
    setFormName('');
    setFormPhone('');
    // navigate("/thankyou")
  };
  // React.useEffect(() => {
  //   var modal = document.getElementById("myModal");
  //   selectedSeat ? modal.style.display = "block" : modal.style.display = "none"
  // }, [])
  return (
    <div className="App">
      <h1>Seat Reservation System</h1>
      <SeatMap seats={seats} onSeatSelect={handleSeatSelect} />
      <div >
        <form action="https://www.paypal.com/donate" method="post" target="_top" style={{ float: "center" }}>
          <input type="hidden" name="hosted_button_id" value="E2L4GV3YERCGY" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_IL/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
      {selectedSeat && (
        <div className="reservation-form modal">
          <h2>Selected Seat: {selectedSeat?.row}{selectedSeat?.number}</h2>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="name-input">Name:</label>
            <input
              id="name-input"
              type="text"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              required
            />
            <label htmlFor="phone-input">Phone:</label>
            <input
              id="phone-input"
              type="tel"
              value={formPhone}
              onChange={(e) => setFormPhone(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ReservationForm;
