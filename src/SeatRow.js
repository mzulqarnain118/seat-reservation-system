import React from 'react';
import Seat from './Seat';

const SeatRow = ({ row, seats, onSelect }) => {

  return (
    <div className="seat-row">
      {seats.map((seat) => (
        <Seat
          key={seat.number}
          number={seat.number}
          available={seat.available}
          onClick={() => onSelect(seat)}
        />
      ))}
    </div>
  );
};

export default SeatRow;
