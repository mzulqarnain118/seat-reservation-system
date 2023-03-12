
import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = ({setEnableThankYou }) => {
  return (
    <div className="thank-you-container">
      <h2>Thank you for your reservation!</h2>
      <p>Your seat has been reserved.</p>
      <div style={{ width: "120px", }}>
        <form action="https://www.paypal.com/donate" method="post" target="_top" >
          <input type="hidden" name="hosted_button_id" value="E2L4GV3YERCGY" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_IL/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
      {/* <Link to="/"> */}
        <button className="back-button" onClick={() => setEnableThankYou(false)}>Back to Seats</button>
      {/* </Link> */}
    </div>
  );
};

export default ThankYou;
