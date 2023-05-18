import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IBAN_validator.css";

const IBAN = () => {
  const apiKey = "YOUR API KEY";
  const ibanValidationUrl = "https://ibanvalidation.abstractapi.com/v1/";

  const [validationResult, setValidationResult] = useState("");

  const validateIban = () => {
    const iban = document.querySelector("#iban-input").value.trim();
    if (!iban) {
      setValidationResult("Please enter an IBAN.");
      return;
    }

    const url = `${ibanValidationUrl}?api_key=${apiKey}&iban=${iban}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const result = data.is_valid ? "valid" : "invalid";
        const message = `The IBAN ${iban} is ${result}.`;
        setValidationResult(message);
      })
      .catch((error) => console.error(error));
  };

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/Categories");
  };

  return (
    <div className="IBAN_Validator_bckgd">
      <img src={"IBAN.jpg"} alt="IBAN_img"/>
      <div className="IBAN_Validator">
        <div>
          <h1>IBAN Validation</h1>
          <div>
            <label htmlFor="iban-input">Enter an IBAN:</label>
            <input type="text" id="iban-input" />
          </div>
          <br/>
          <br/>
          <br/>
          <div>
            <button id="validate-btn" onClick={validateIban}>
              Validate IBAN
            </button>
          </div>
          <div id="validation-result">{validationResult}</div>
        </div>

        <button className="backbtn" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default IBAN;
