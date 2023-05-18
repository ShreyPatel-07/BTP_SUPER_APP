import { useNavigate } from "react-router-dom";
import "../Email_validator/Email_validator.css";

const Email = () => {
  const apiKey = "d18f10398677417e86abfc609e02d909";
  const emailValidationUrl = "https://emailvalidation.abstractapi.com/v1/";

  function httpGetAsync(url, callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        callback(xmlHttp.responseText);
    };
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
  }

  const validateEmail = (email, callback) => {
    if (!email) {
      callback("Please enter an email address.", null);
      return;
    }

    const url = `${emailValidationUrl}?api_key=${apiKey}&email=${email}`;
    httpGetAsync(url, (response) => {
      const data = JSON.parse(response);
      console.log(data);
      const result = data.is_valid_format ? "valid" : "invalid";
      const message = data.deliverability;
      callback(null, { email, result, message });
    });
  };

  const validateEmails = () => {
    const emails = document
      .querySelector("#email-input")
      .value.trim()
      .split(",");
    if (!emails) {
      document.querySelector("#validation-result").innerHTML =
        "Please enter email addresses.";
      return;
    }

    const table = document.createElement("table");
    const header = table.createTHead();
    const row = header.insertRow(0);
    const emailCell = row.insertCell(0);
    const resultCell = row.insertCell(1);
    const messageCell = row.insertCell(2);
    emailCell.innerHTML = "Email";
    resultCell.innerHTML = "Result";
    messageCell.innerHTML = "Message";

    const tbody = table.createTBody();
    for (let i = 0; i < emails.length; i++) {
      const email = emails[i].trim();
      validateEmail(email, (err, data) => {
        const row = tbody.insertRow();
        const emailCell = row.insertCell(0);
        const resultCell = row.insertCell(1);
        const messageCell = row.insertCell(2);
        emailCell.innerHTML = data.email;
        resultCell.innerHTML = data.result;
        messageCell.innerHTML = data.message;
      });
    }

    document.querySelector("#validation-result").innerHTML = "";
    document.querySelector("#validation-result").appendChild(table);
  };

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/Categories");
  };

  return (
    <div className="email_background">
    <div className="Email_Validator">
      <title>Email Validation</title>
      <h1>Email Validation</h1>
      <div>
        <label htmlFor="email-input">
          Enter email addresses (comma-separated):
        </label>
        <input type="email" id="email-input" />
      </div>
      <div>
        <button id="validate-btn" onClick={validateEmails}>
          Validate Emails
        </button>
      </div>
      <div id="validation-result"></div>
      <br/>
      <button className="backbtn" onClick={handleBack}>
        Back
      </button>
    </div>
    </div>
  );
};

export default Email;
