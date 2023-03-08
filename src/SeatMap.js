import React from 'react';
import SeatRow from './SeatRow';

const SeatMap = ({ seats, onSeatSelect }) => {
  const rows = ['A', 'B', 'C', 'D'];

  return (
    <table className="seat-map">
      <tbody>
        {rows.map((row) => (
          <tr key={row}>
            <th>{row}</th>
            <td>
              <SeatRow
                row={row}
                seats={seats.filter((seat) => seat.row === row)}
                onSelect={onSeatSelect}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SeatMap;




// import React from 'react';
// import SeatRow from './SeatRow';

// const SeatMap = ({ seats, onSeatSelect }) => {
//   const rows = ['A', 'B', 'C', 'D'];

//   return (
//     <table className="seat-map">
//       <thead>
//         <tr>
//           {rows.map((row) => (
//             <th key={row}>{row}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           {rows.map((row) => (
//             <td key={row}>
//               <SeatRow
//                 row={row}
//                 seats={seats.filter((seat) => seat.row === row)}
//                 onSelect={onSeatSelect}
//               />
//             </td>
//           ))}
//         </tr>
//       </tbody>
//     </table>
//   );
// };

// export default SeatMap;
