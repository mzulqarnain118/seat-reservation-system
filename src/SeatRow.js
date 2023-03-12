// import React from 'react';
// import Seat from './Seat';

// const SeatRow = ({ row, seats, onSelect }) => {

//   return (
//     <div className="seat-row">
//       {arr.map((item) => (
//         <Seat
//           key={item}
//           number={item}
//         empty={item === 0}
//           available={seats.available}
//           onClick={() => onSelect(seats)}
//         />
//       ))}
//     </div>
//   );
// };

// export default SeatRow;


// const SeatRow = ({ row, seats, onSelect }) => {
//   let arr = [];
//   for (let i = seats?.number; i >= 1; i--) {
//     if (seats?.row === 15 && i === 16) {
//       for (let j = 6; j >= 1; j--)
//         arr.push(0);
//     }
//     if (seats?.row === 16 && [16, 12, 8].includes(i)) {
//       for (let j = 2; j >= 1; j--)
//         arr.push(0);
//     }
//     if (seats?.row === 16 && i === 4) {
//       for (let j = 3; j >= 1; j--)
//         arr.push(0);
//     }
//     if (seats?.row === 16 && i === 20) {
//       for (let j = 4; j >= 1; j--)
//         arr.push(0);
//     }
//     arr.push(i);

//   }
//   return (
//     <div className="seat-row">
//       {arr.map((item) => (
//         <Seat
//           key={item + seats.row}
//           number={item}
//           empty={item === 0}
//           available={seats.available}
//           onClick={() => onSelect(seats)}
//         />
//       ))}
//     </div>
//   );
// };

