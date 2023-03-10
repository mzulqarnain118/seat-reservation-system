import React from 'react';

const Seat = ({ number, available, empty, onClick }) => {
  
  return (
    <div
      className={`seat ${empty?'empty':available ? 'available' : 'unavailable'}`}
      onClick={available ? onClick : null}
    >
      {number}
    </div>
  );
};

export default Seat;
