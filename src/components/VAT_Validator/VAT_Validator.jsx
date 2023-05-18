import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VAT_Validator.css";

const apiKey = "YOUR API KEY"; //PLEASE use your API KEY as my API KEY IS limited you can find your API KEY from "https://app.abstractapi.com/api/vat/tester"
const vatValidationUrl = "https://vat.abstractapi.com/v1/validate/";

const httpGetAsync = (url, callback) => {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      callback(xmlHttp.responseText);
    }
  };
  xmlHttp.open("GET", url, true);
  xmlHttp.send(null);
};

const VATValidation = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/Categories");
  };

  const [validationResult, setValidationResult] = useState("");

  const validateVat = () => {
    const vatNumber = document.querySelector("#vat-input").value.trim();
    if (!vatNumber) {
      setValidationResult("Please enter a VAT number.");
      return;
    }

    const url = `${vatValidationUrl}?api_key=${apiKey}&vat_number=${vatNumber}`;
    httpGetAsync(url, (response) => {
      const data = JSON.parse(response);
      console.log(data);
      const result = data.valid ? "valid" : "invalid";
      const message = `The VAT number ${vatNumber} is ${result}.`;
      setValidationResult(message);
    });
  };

  return (
    <div className="VAT_bckgnd">
      <img src="vat.jpg" alt="VAT_imag"/>
      <div className="VAT">
        <h1>VAT Validation</h1>
        <div>
          <label htmlFor="vat-input">Enter a VAT number:</label>
          <input type="text" id="vat-input" />
        </div>
        <div>
          <button id="validate-btn" onClick={validateVat}>
            Validate VAT
          </button>
        </div>
        <div id="validation-result">{validationResult}</div>
        <div>
          <button className="backbtn" onClick={handleBack}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default VATValidation;
