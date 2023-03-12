
import React from 'react';
import { Link } from 'react-router-dom';
import DonationForm from './Donate';

const ThankYou = ({ setEnableThankYou }) => {
  const handleDownloadJSON = () => {
    const data = localStorage.getItem('seatReservationDownloadData');
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'seat_data.json');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadDataCSV = () => {
    const data = JSON.parse(localStorage.getItem('seatReservationData'));
      const csvData = "data:text/csv;charset=utf-8,"
        + Object.keys(data).join(",")
        + "\n"
        + data.map(d => Object.values(d).join(",")).join("\n");

      const encodedUri = encodeURI(csvData);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "seat_data.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    
  };

  const downloadDataTXT = () => {
    const data = JSON.parse(localStorage.getItem('seatReservationData'));

    if (data && data.length > 0) {
      const textData = data.map((row, i) => {
        const rowNumber = i + 16; // Add 16 to get the row number
        const seatData = row.map((seat, j) => {
          const seatNumber = j + 1; // Add 1 to get the seat number
          const name = seat.name ? seat.name : '-';
          const phone = seat.phone ? seat.phone : '-';
          return `${rowNumber}-${seatNumber}: ${name} ${phone}`;
        }).join('\n');
        return seatData;
      }).join('\n\n');

      const encodedUri = encodeURI(textData);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "seat_data.txt");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="thank-you-container">
      <h2>Thank you to be with us.</h2>
      <p>If you like to donate. You have below options.</p>
      {/* <div style={{ width: "120px", }}>
        <form action="https://www.paypal.com/donate" method="post" target="_top" >
          <input type="hidden" name="hosted_button_id" value="E2L4GV3YERCGY" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_IL/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div> */}
      {/* <Link to="/"> */}
      <DonationForm />
      <div>
        <button  onClick={() => setEnableThankYou(false)}>Back to Seats</button>
        <button style={{marginLeft:10}} onClick={handleDownloadJSON}>Download Data</button>
      </div>
      
      {/* <button onClick={downloadDataCSV}>Download Data IN CSV</button> */}

      {/* </Link> */}
    </div>
  );
};

export default ThankYou;
