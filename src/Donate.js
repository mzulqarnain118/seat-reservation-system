
import React, { useState } from "react";
import "./DonationForm.css";

function DonationForm() {
  const [donationAmount, setDonationAmount] = useState("75");
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [otherAmount, setOtherAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const handleDonationAmountChange = (event) => {
    const value = event.target.value;
    setDonationAmount(value);
    setIsOtherSelected(value === "other");
  };

  const handleOtherAmountChange = (event) => {
    const value = event.target.value;
    setOtherAmount(value);
    setDonationAmount(value);
  };

  const handleCardNumberChange = (event) => {
    const value = event.target.value;
    setCardNumber(value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };



  const handleExpirationDateChange = (event) => {
    setExpirationDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <form className="donation-form" onSubmit={handleSubmit}>
      <h2>Donate</h2>
      <div className="donation-amount-blocks">
        <div
          className={`donation-amount-block ${donationAmount === "75" && !isOtherSelected ? "selected" : ""
            }`}
          onClick={() => handleDonationAmountChange({ target: { value: "75" } })}
        >
          <p className="donation-amount-value">75 ILS</p>
        </div>
        <div
          className={`donation-amount-block ${donationAmount === "150" ? "selected" : ""
            }`}
          onClick={() => handleDonationAmountChange({ target: { value: "150" } })}
        >
          <p className="donation-amount-value">150 ILS</p>
        </div>
        <div
          className={`donation-amount-block ${donationAmount === "300" ? "selected" : ""
            }`}
          onClick={() => handleDonationAmountChange({ target: { value: "300" } })}
        >
          <p className="donation-amount-value">300 ILS</p>
        </div>
        <div
          className={`donation-amount-block ${isOtherSelected ? "selected" : ""}`}
          onClick={() => handleDonationAmountChange({ target: { value: "other" } })}
        >
          <p className="donation-amount-value">Other Amount</p>
        </div>
      </div>
      {isOtherSelected && (
        <div>
          <label htmlFor="other-amount" className="donation-label">
            Other Amount:
          </label>
          <input
            className="donation-input"
            id="other-amount"
            type="number"
            min="1"
            value={otherAmount}
            onChange={handleOtherAmountChange}
          />
        </div>
      )}
      <div>
        <label className="donation-label" htmlFor="name">Name:</label>
        <input className="donation-input" type="text" id="name" name="name" value={name} onChange={handleNameChange} required />
      </div>
      <div>
          <label className="donation-label" htmlFor="email">Email:</label>
          <input className="donation-input" type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
      </div>
      <div>
        <label htmlFor="card-number" className="donation-label">
          Card Number:
        </label>
        <input
          className="donation-input"
          id="card-number"
          type="text"
          pattern="[0-9]*"
          inputMode="numeric"
          value={cardNumber}
          onChange={handleCardNumberChange}
        />
      </div>
      <div >
        <label className="donation-label" htmlFor="expiration-date">Expiration date:</label>
        <input className="donation-input" type="text" id="expiration-date" name="expiration-date" value={expirationDate} onChange={handleExpirationDateChange} required />
      </div>

      <div >
        <label className="donation-label" htmlFor="cvv">CVV:</label>
        <input className="donation-input" type="text" id="cvv" name="cvv" value={cvv} onChange={handleCvvChange} required />
      </div>
      <button className="donate-button" type="submit">
        Donate
      </button>
    </form>
  );
}

export default DonationForm;
