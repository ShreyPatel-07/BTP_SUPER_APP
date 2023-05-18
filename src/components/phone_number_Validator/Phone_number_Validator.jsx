import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./phone_number_Validator.css";
const PhoneValidator = () => {
  const apiKey = "YOUR API KEY";
  const phoneValidationUrl = "https://phonevalidation.abstractapi.com/v1/";

  const [phoneInput, setPhoneInput] = useState("");
  const [validationResult, setValidationResult] = useState([]);

  const handlePhoneInputChange = (e) => {
    setPhoneInput(e.target.value);
  };

  const validatePhone = () => {
    if (!phoneInput) {
      setValidationResult([
        { phone: "", status: "Please enter at least one phone number." },
      ]);
      return;
    }

    const phoneNumbers = phoneInput.split(",");
    const messages = [];

    phoneNumbers.forEach((phone) => {
      const url = `${phoneValidationUrl}?api_key=${apiKey}&phone=${phone.trim()}`;
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          console.log(data);
          const result = data.valid ? "valid" : "invalid";
          const message = { phone, status: result };
          messages.push(message);

          if (messages.length === phoneNumbers.length) {
            setValidationResult(messages);
          }
        }
      };
      xhr.open("GET", url, true);
      xhr.send();
    });
  };

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/Categories");
  };

  return (
    <div className="PN_Validator_bckgd">
      <img src="phone.jpg" alt="phone_img"/>
      <div className="Phone_Number_Validator">
        <h1>Phone Number Validation</h1>
        <div>
          <label htmlFor="phone-input">
            Enter one or more phone numbers (separated by comma) with country
            code:
          </label>
          <br />
          <br />
          <input
            type="tel"
            id="phone-input"
            value={phoneInput}
            placeholder="+91 1234567891"
            onChange={handlePhoneInputChange}
          />
        </div>
        <div>
          <button id="validate-btn" onClick={validatePhone}>
            Validate Phone Number(s)
          </button>
        </div>
        <div className="validation-result">
          {validationResult.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th>Phone Number</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {validationResult.map((result, index) => (
                  <tr key={index}>
                    <td>{result.phone}</td>
                    <td>{result.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <button className="backbtn" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default PhoneValidator;
