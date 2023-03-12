import React from 'react';
import SeatRow from './SeatRow';

const SeatMap = ({ seats, onSeatSelect }) => {
const rows=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P']

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
            <th>{row}</th>
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
//             <th row={row}>{row}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           {rows.map((row) => (
//             <td row={row}>
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


// const SeatMap = ({ seats, onSeatSelect }) => {
//   const rows = [{ row: 16, number: 24, available: true, name: '', phone: '' }, { row: 15, number: 32, available: true, name: '', phone: '' }, { row: 14, number: 38, available: true, name: '', phone: '' }, { row: 13, number: 38, available: true, name: '', phone: '' },
//   { row: 12, number: 38, available: true, name: '', phone: '' }, { row: 11, number: 38, available: true, name: '', phone: '' }, { row: 10, number: 38, available: true, name: '', phone: '' },
//   { row: 9, number: 36, available: true, name: '', phone: '' }, { row: 8, number: 35, available: true, name: '', phone: '' }, { row: 7, number: 34, available: true, name: '', phone: '' },
//   { row: 6, number: 31, available: true, name: '', phone: '' }, { row: 5, number: 29, available: true, name: '', phone: '' }, { row: 4, number: 26, available: true, name: '', phone: '' },
//   { row: 3, number: 24, available: true, name: '', phone: '' }, { row: 2, number: 21, available: true, name: '', phone: '' }, { row: 1, number: 14, available: true, name: '', phone: '' },
//   ];

//   return (
//     <table className="seat-map">
//       <tbody>
//         {rows.map((row) => (
//           <tr key={row?.row}>
//             <th>{row?.row}</th>
//             <td>
//               <SeatRow
//                 row={row}
//                 seats={row}
//                 onSelect={onSeatSelect}
//               />
//             </td>
//             <th>{row?.row}</th>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };