import React from 'react';

const Seat = ({ number, available, onClick }) => {
  return (
    <div
      className={`seat ${available ? 'available' : 'unavailable'}`}
      onClick={available ? onClick : null}
    >
      {number}
    </div>
  );
};

export default Seat;
