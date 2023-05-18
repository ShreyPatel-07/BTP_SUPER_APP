import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import Money from "./components/Money_Convertor/Money";
import Email from "./components/Email_validator/Email_validator";
import Holiday from "./components/Holiday/Holiday_validator";
import IBAN from "./components/IBAN_Validator/IBAN_validator";
import PhoneValidator from "./components/phone_number_Validator/Phone_number_Validator";
import TimeZoneValidator from "./components/Time_Zone_Validator/Time_Zone_Validator";
import VATValidation from "./components/VAT_Validator/VAT_Validator";
import WeatherAPI from "./components/weather_api/weather_api";
import IPAddressValidator from "./components/IP_Address_Validator/Ip_Address_Validator";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Categories" element={<Category />} />
          <Route path="/Email_Validator" element={<Email />} />
          <Route path="/Holiday_Validator" element={<Holiday />} />
          <Route path="/IBAN_Validator" element={<IBAN />} />
          <Route path="/Money_Convertor" element={<Money />} />
          <Route path="/Phone_Number_Validation" element={<PhoneValidator />} />
          <Route path="/TimeZone_Validation" element={<TimeZoneValidator />} />
          <Route path="/VAT_Validation" element={<VATValidation />} />
          <Route path="/Weather_API" element={<WeatherAPI />} />
          <Route path="/Ip_Address_Validation" element={<IPAddressValidator />} />

          <Route path="*" element={<h1>Error 404!! Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
