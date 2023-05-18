import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Holiday_validator.css";

const countryOptions = [
  { label: "Select a country", value: "" },
  { label: "United States", value: "US" },
  { label: "Canada", value: "CA" },
  { label: "Mexico", value: "MX" },
  { label: "Australia", value: "AU" },
  { label: "New Zealand", value: "NZ" },
  { label: "United Kingdom", value: "GB" },
  { label: "France", value: "FR" },
  { label: "Germany", value: "DE" },
  { label: "Italy", value: "IT" },
  { label: "Spain", value: "ES" },
];

const monthOptions = [
  { label: "Select a month", value: "" },
  { label: "January", value: "1" },
  { label: "February", value: "2" },
  { label: "March", value: "3" },
  { label: "April", value: "4" },
  { label: "May", value: "5" },
  { label: "June", value: "6" },
  { label: "July", value: "7" },
  { label: "August", value: "8" },
  { label: "September", value: "9" },
  { label: "October", value: "10" },
  { label: "November", value: "11" },
  { label: "December", value: "12" },
];

const dayOptions = Array.from({ length: 31 }, (_, i) => ({
  label: `${i + 1}`,
  value: `${i + 1}`,
}));
const Holiday = () => {
  const [result, setResult] = useState("");
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/Categories");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = `https://holidays.abstractapi.com/v1/?api_key=YOUR API KEY &country=${country}&year=${year}&month=${month}&day=${day}`;

    try {
      const response = await fetch(url);
      const holiday = await response.json();

      if (holiday.length > 0) {
        console.log(holiday);
        setResult(`It's ${holiday[0].name} in ${country}!`);
      } else {
        setResult(`No holiday in ${country} on ${year}-${month}-${day}.`);
      }
    } catch (error) {
      console.log(error);
      setResult(`Error: ${error.message}`);
    }
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  return (
    <div className="Holiday_background">
      <div className="Holiday">
        <h2>Find Holiday</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Country:
            <select value={country} onChange={handleCountryChange}>
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            Year:
            <input type="number" value={year} onChange={handleYearChange} />
          </label>
          <label>
            Month:
            <select value={month} onChange={handleMonthChange}>
              {monthOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            Day:
            <select value={day} onChange={handleDayChange}>
              {dayOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
        <div className="Holiday-result">{result}</div>
        <button className="Holiday-back" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Holiday;
