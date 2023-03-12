// import './App.css';
// import React, { useState } from 'react';
// import SeatMap from './SeatMap';
// import { useNavigate } from 'react-router-dom';
// const initialSeats = [
//   { id: 1, row: 'A', number: 1, available: true, name: '', phone: '' },
//   { id: 2, row: 'A', number: 2, available: true, name: '', phone: '' },
//   { id: 3, row: 'A', number: 3, available: false, name: '', phone: '' },
//   { id: 4, row: 'A', number: 4, available: true, name: '', phone: '' },
//   { id: 5, row: 'A', number: 5, available: true, name: '', phone: '' },
//   { id: 6, row: 'A', number: 6, available: true, name: '', phone: '' },
//   { id: 7, row: 'A', number: 7, available: false, name: '', phone: '' },
//   { id: 8, row: 'A', number: 8, available: true, name: '', phone: '' },
//   { id: 9, row: 'A', number: 9, available: true, name: '', phone: '' },
//   { id: 10, row: 'A', number: 10, available: true, name: '', phone: '' },
//   { id: 11, row: 'A', number: 11, available: true, name: '', phone: '' },
//   { id: 12, row: 'A', number: 12, available: false, name: '', phone: '' },
//   { id: 13, row: 'A', number: 13, available: true, name: '', phone: '' },
//   { id: 14, row: 'A', number: 14, available: true, name: '', phone: '' },
//   { id: 15, row: 'A', number: 15, available: true, name: '', phone: '' },
//   { id: 16, row: 'B', number: 1, available: true, name: '', phone: '' },
//   { id: 17, row: 'B', number: 2, available: true, name: '', phone: '' },
//   { id: 18, row: 'B', number: 3, available: true, name: '', phone: '' },
//   { id: 19, row: 'B', number: 4, available: true, name: '', phone: '' },
//   { id: 20, row: 'B', number: 5, available: true, name: '', phone: '' },
//   { id: 21, row: 'B', number: 6, available: true, name: '', phone: '' },
//   { id: 22, row: 'B', number: 7, available: true, name: '', phone: '' },
//   { id: 23, row: 'B', number: 8, available: false, name: '', phone: '' },
//   { id: 24, row: 'B', number: 9, available: true, name: '', phone: '' },
//   { id: 25, row: 'B', number: 10, available: true, name: '', phone: '' },
//   { id: 26, row: 'B', number: 11, available: true, name: '', phone: '' },
//   { id: 27, row: 'B', number: 12, available: true, name: '', phone: '' },
//   { id: 28, row: 'B', number: 13, available: true, name: '', phone: '' },
//   { id: 29, row: 'B', number: 14, available: true, name: '', phone: '' },
//   { id: 30, row: 'B', number: 15, available: true, name: '', phone: '' },
//   { id: 31, row: 'C', number: 1, available: true, name: '', phone: '' },
//   { id: 32, row: 'C', number: 2, available: true, name: '', phone: '' },
//   { id: 33, row: 'C', number: 3, available: true, name: '', phone: '' },
//   { id: 34, row: 'C', number: 4, available: true, name: '', phone: '' },
//   { id: 35, row: 'C', number: 5, available: true, name: '', phone: '' },
//   { id: 36, row: 'C', number: 6, available: true, name: '', phone: '' },
//   { id: 37, row: 'C', number: 7, available: true, name: '', phone: '' },
//   { id: 38, row: 'C', number: 8, available: true, name: '', phone: '' },
//   { id: 39, row: 'C', number: 9, available: true, name: '', phone: '' },
//   { id: 40, row: 'C', number: 10, available: true, name: '', phone: '' },
//   { id: 41, row: 'C', number: 11, available: true, name: '', phone: '' },
//   { id: 42, row: 'C', number: 12, available: true, name: '', phone: '' },
//   { id: 43, row: 'C', number: 13, available: true, name: '', phone: '' },
//   { id: 44, row: 'C', number: 14, available: true, name: '', phone: '' },
//   { id: 45, row: 'C', number: 15, available: true, name: '', phone: '' },
//   { id: 46, row: 'D', number: 1, available: true, name: '', phone: '' },
//   { id: 47, row: 'D', number: 2, available: true, name: '', phone: '' },
//   { id: 48, row: 'D', number: 3, available: true, name: '', phone: '' },
//   { id: 49, row: 'D', number: 4, available: true, name: '', phone: '' },
//   { id: 50, row: 'D', number: 5, available: true, name: '', phone: '' },
//   { id: 51, row: 'D', number: 6, available: true, name: '', phone: '' },
//   { id: 52, row: 'D', number: 7, available: true, name: '', phone: '' },
//   { id: 53, row: 'D', number: 8, available: true, name: '', phone: '' },
//   { id: 54, row: 'D', number: 9, available: true, name: '', phone: '' },
//   { id: 55, row: 'D', number: 10, available: true, name: '', phone: '' },
//   { id: 56, row: 'D', number: 11, available: true, name: '', phone: '' },
//   { id: 57, row: 'D', number: 12, available: true, name: '', phone: '' },
//   { id: 58, row: 'D', number: 13, available: true, name: '', phone: '' },
//   { id: 59, row: 'D', number: 14, available: true, name: '', phone: '' },
//   { id: 60, row: 'D', number: 15, available: true, name: '', phone: '' },
// ]
//   // ... and

// const ReservationForm = () => {
//   const navigate=useNavigate();
//   const [seats, setSeats] = useState(initialSeats);
//   const [selectedSeat, setSelectedSeat] = useState(null);
//   const [formName, setFormName] = useState('');
//   const [formPhone, setFormPhone] = useState('');
//   const handleSeatSelect = (seat) => {
//     setSelectedSeat(seat);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     const updatedSeats = seats.map((seat) =>
//       seat.id === selectedSeat.id
//         ? { ...seat, available: false, name: formName, phone: formPhone }
//         : seat
//     );

//     setSeats(updatedSeats);
//     setSelectedSeat(null);
//     setFormName('');
//     setFormPhone('');
//     navigate("/thankyou")
//   };
//   // React.useEffect(() => {
//   //   var modal = document.getElementById("myModal");
//   //   selectedSeat ? modal.style.display = "block" : modal.style.display = "none"
//   // }, [])
//   return (
//     <div className="App">
//       <h1>Seat Reservation System</h1>
//       <SeatMap seats={seats} onSeatSelect={handleSeatSelect} />
//       {selectedSeat && (
//         <div className="reservation-form modal">
//           <h2>Selected Seat: {selectedSeat?.row}{selectedSeat?.number}</h2>
//           <form onSubmit={handleFormSubmit}>
//             <label htmlFor="name-input">Name:</label>
//             <input
//               id="name-input"
//               type="text"
//               value={formName}
//               onChange={(e) => setFormName(e.target.value)}
//               required
//             />
//             <label htmlFor="phone-input">Phone:</label>
//             <input
//               id="phone-input"
//               type="tel"
//               value={formPhone}
//               onChange={(e) => setFormPhone(e.target.value)}
//               required
//             />
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReservationForm;
import React, { useState } from 'react';
import ThankYou from './ThankYou';

const SeatMap = () => {
  const [enableThankYou, setEnableThankYou] = useState(false);
  const rows = [...Array(16).keys()].reverse();
  const seatsInRow = [...Array(30).keys()].reverse();
  let id=null
  const [seats, setSeats] = useState(() => {
    const data = JSON.parse(localStorage.getItem('seatReservationData')) || {};
    return Array(16).fill().map((_, row) => Array(30).fill().map((_, number) => ({
      available: !data[row]?.[number],
      name: data[row]?.[number]?.name || '',
      phone: data[row]?.[number]?.phone || '',
    })));
  });
  const [selectedSeat, setSelectedSeat] = useState({ row: null, number: null });

  const handleSeatClick = (row, number) => {
    if (seats[row][number].available) {
      setSelectedSeat({ row, number });
    }
  };

  const handleFormSubmit = (data1) => {
    id = id + 1;
    const { name, phone,row,number } = data1;
    console.log(data1)
    const newSeats = [...seats];
    newSeats[selectedSeat.row][selectedSeat.number] = { available: false, name, phone, row, number };
    setSeats(newSeats);
    setSelectedSeat({ row: null, number: null });
    setEnableThankYou(true);

    // Save data to localStorage
    const data = JSON.parse(localStorage.getItem('seatReservationData')) || {};
    data[`${id} (${selectedSeat.row} - ${selectedSeat.number})`] = { name, phone };
    localStorage.setItem('seatReservationData', JSON.stringify(data));
  };


console.log('====================================');
console.log(seats, selectedSeat);
console.log('====================================');
  return (<>
    {enableThankYou ? <ThankYou setEnableThankYou={setEnableThankYou} />
      : <div className="seatmap-container">
        <h1 >Seat Reservation System</h1>
          
        <div >
          {rows.map(row => (
            <div className="row" key={row}>
              <div className="rowStyle">{row}</div>
              {seatsInRow.map(number => (
                <div
                  className={`seat ${seats[row][number].available ? 'available' : 'unavailable'} ${selectedSeat.row === row && selectedSeat.number === number ? 'selected' : ''}`}
                  key={number}
                  onClick={() => handleSeatClick(row, number)}
                >
                  {seats[row][number].available ?number:0}
                </div>
              ))}
              <div className="rowStyle">{row}</div>
            </div>
          ))}
        </div>
        {selectedSeat.row !== null && selectedSeat.number !== null && (
          <ReservationForm onSubmit={handleFormSubmit} row={selectedSeat.row} number={selectedSeat.number} setSelectedSeat={setSelectedSeat} />
        )}
       </div> }
  </>
    
  );
};

const ReservationForm = ({ row, number, onSubmit, setSelectedSeat }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ row, number, name, phone });
  };


  return (
    <div className="reservation-form-container">
      <div className="close-button" onClick={() => {setSelectedSeat({ row: null, number: null })}}>X</div>
      <h2>Reserve Seat {row}-{number}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value={phone} onChange={handlePhoneChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>

  );
};

export default SeatMap;
