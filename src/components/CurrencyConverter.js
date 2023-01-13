import React, { useEffect, useState } from "react";

export default function CurrencyConverter() {
  const [currencyOne, setCurrencyOne] = useState("");
  const [currencyTwo, setCurrencyTwo] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("INR");

  const [currencySelectorOne, setCurrencySelectorOne] = useState([]);
  useEffect(() => {
    currencyData();
    console.log("Success");
  }, []);
  //fetch("https://api.apilayer.com/exchangerates_data/convert?to=INR&from=USD&amount=5", requestOptions)
  const currencyData = async () => {
    try {
      let myHeaders = new Headers();
      myHeaders.append("apikey", "dznzx2HwMzCohBpZq2JXpPyldLRWUT5L");
      const requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };
      const response = await fetch(
        "https://api.apilayer.com/exchangerates_data/symbols",
        requestOptions
      );
      const data = await response.json();
      setCurrencySelectorOne(Object.keys(data.symbols));
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = async (e) => {
    console.log("Change");
  };

  const selectFrom = (e) => {
    setCurrencyFrom(e.target.value);
  };
  const selectTo = (e) => {
    setCurrencyTo(e.target.value);
  };

  return (
    <div>
      <h1>Currency Convertor</h1>
      <select
        name="Select"
        id="currencySelector1"
        value={currencyFrom}
        onChange={selectFrom}
      >
        {currencySelectorOne &&
          currencySelectorOne.map((currency, i) => (
            <option value={currency} key={i}>
              {currency}
            </option>
          ))}
      </select>
      <input
        id="currency1"
        type="text"
        value={currencyOne}
        onChange={handleChange}
      />
      <br />
      <select
        name="Select"
        id="currencySelector2"
        value={currencyTo}
        onChange={selectTo}
      >
        {currencySelectorOne &&
          currencySelectorOne.map((currency, i) => (
            <option value={currency} key={i}>
              {currency}
            </option>
          ))}
      </select>
      <input id="currency2" type="text" value={currencyTwo} />
    </div>
  );
}
