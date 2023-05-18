import "./ELeftside.css";
import { useNavigate } from "react-router-dom";
export const ELeftside = () => {
  const navigate = useNavigate();

  const Money_page = () => {
    navigate("/Money_Convertor");
  };

  const Email_page = () => {
    navigate("/Email_Validator");
  };
  const Holiday_page = () => {
    navigate("/Holiday_Validator");
  };
  const IBAN_page = () => {
    navigate("/IBAN_Validator");
  };
  const Phone_page = () => {
    navigate("/Phone_Number_Validation");
  };
  const TimeZone_page = () => {
    navigate("/TimeZone_Validation");
  };
  const VAT_page = () => {
    navigate("/VAT_Validation");
  };
  const Weather_page = () => {
    navigate("/Weather_API");
  };
  const IP_page = () => {
    navigate("/Ip_Address_Validation");
  };

  function Github_Page() {
    window.location.href = 'https://shreypatel-07.github.io/GitHub_Finder/';
  }
  function IP_Address_Page() {
    window.location.href = 'https://shreypatel-07.github.io/IP_Addess_Tracker_Frontend/';
  }
  function PayPal_Page() {
    window.location.href = 'https://shreypatel-07.github.io/PayPal_API/';
  }

  return (
    <div className="Rightside">
      <div className="containerL">
        <div className="slf-tested">SELF TESTED</div>
        <div className="optionsL">
          <button
            className="EmailValidator"
            value="EmailValidator"
            onClick={Email_page}
          >
            <p className="btn_text">Email_Validator</p>
          </button>
          <button className="Holiday_Validator" value="Holiday" onClick={Holiday_page}>
            <p className="btn_text">Holiday_Validator</p>
          </button>
          <button className="IBAN" value="IBAN" onClick={IBAN_page}>
            <p className="btn_text">IBAN_Validator</p>
          </button>
        </div>
        <br />
        <div className="optionsL">
        <button
            className="MoneyConvertor"
            value="Money_Convertor"
            onClick={Money_page}
          >
            <p className="btn_text">Money_Convertor</p>
          </button>
          <button
            className="PayPal"
            value="PayPal"
            onClick={PayPal_Page}
          >
            <p className="btn_text">PayPal_API</p>
          </button>
          <button className="Phone_Number_Validation" value="Phone_Number_Validation" onClick={Phone_page}>
            <p className="btn_text">Phone_No_Validation</p>
          </button>
        </div>
        <br />
        <div className="optionsL">
        <button className="TimeZone_Validator" value="TimeZone_Validator" onClick={TimeZone_page}>
            <p className="btn_text">TimeZone_Validator</p>
          </button>
          <button className="VAT_Validator" value="VAT_Validator" onClick={VAT_page}>
            <p className="btn_text">VAT_Validator</p>
          </button>
          <button className="WeatherAPI" value="WeatherAPI" onClick={Weather_page}>
            <p className="btn_text">Weather_API</p>
          </button>
        </div>
        <br/>
        <div className="optionsL">
        <button className="Github_Finder" value="Github_Finder" onClick={Github_Page}>
            <p className="btn_text">Github_Finder</p>
          </button>
          <button className="IPAddressValidator" value="IP_Address_Validator" onClick={IP_Address_Page}>
            <p className="btn_text">IP_Address_Validator(MOD)</p>
          </button>
          <button className="IP_Address_Validator2" value="IP_Address_Validator2" onClick={IP_page}>
            <p className="btn_text">IP_Address_Validator</p>
          </button>
        </div>
      </div>
    </div>
  );
};

