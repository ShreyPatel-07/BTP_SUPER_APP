import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Money_Convertor/Money.css";

const Money = () => {
  const [resultText, setResultText] = useState("");
  const navigate = useNavigate();

  const handleConvert = (event) => {
    event.preventDefault();

    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;

    const endpoint = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        const conversionRate = data.rates[toCurrency];
        const convertedAmount = amount * conversionRate;
        setResultText(
          `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`
        );
      })
      .catch((error) => console.error(error));
  };

  const handleBack = () => {
    navigate("/Categories");
  };

  return (
    <div className="Money_Convertor_bckgd">
      <img src="money.png" alt="money_image" />
    <div className="Money_Convertor">
      <title>Money Converter</title>
      <h1>Money Converter</h1>
      <form className="moneyform" onSubmit={handleConvert}>
        <label htmlFor="amount">Amount:</label>
        <input className="Moneynumber" type="number" id="amount" name="amount" required />
        <label htmlFor="from-currency">From:</label>
        <select id="from-currency" name="from-currency">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="INR">INR</option>
        </select>
        <label htmlFor="to-currency">To:</label>
        <select id="to-currency" name="to-currency">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="INR">INR</option>
        </select>
        <button type="submit">Convert</button>
      </form>
      <div id="result">{resultText}</div>
      <button className="backbtn" onClick={handleBack}>Back</button>
    </div>
    </div>
  );
};

export default Money;