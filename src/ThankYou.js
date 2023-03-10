const ThankYou = () => {
  return (
    <div className="thank-you">
      <h1>Thank you for your reservation!</h1>
      <p>Your seat has been reserved.</p>
      <div >
        <form action="https://www.paypal.com/donate" method="post" target="_top" style={{ float: "center" }}>
          <input type="hidden" name="hosted_button_id" value="E2L4GV3YERCGY" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_IL/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
    </div>
  );
};

export default ThankYou;