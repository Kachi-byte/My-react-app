import React, { useEffect, useState } from "react";
import "./Counter.css";
import "@fontsource/poppins/700-italic.css";
import "@fontsource/poppins/200.css";
const ExhangeCounter = () => {
  const [store, storeExchangeApi] = useState({});
  const [amount, setAmount] = useState(1);
  const [base, setBase] = useState("");
  const [symbol, setSymbol] = useState("");
  const [load, userLoading] = useState(false);
  const getExchangeApi = async () => {
    if (!base || !symbol) return;
    userLoading(true);
    try {
      const getApi = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${base}&to=${symbol}`
      );
      const convertApi = await getApi.json();
      storeExchangeApi(convertApi);
      console.log("Store state after fetch:", convertApi);
    } catch (error) {
      console.error("Cannot Fetch Data", error);
    } finally {
      userLoading(false);
    }
  };
  useEffect(() => {
    userLoading(false);
  }, []);
  return (
    <div className="Exchange-app">
      <h1 >Exchange counter</h1>
      <div className="main">
        <label>Input Amount:</label>
        <br />
        <input
          type="number"
          value={amount}
          onChange={(t) => setAmount(t.target.value)}className="number"
        />{" "}
        <br />
        <label>Covert From:</label>
        <br />
        <input
          type="text"
          value={base}
          onChange={(e) => setBase(e.target.value.toUpperCase())} className="convertfrom"
        />{" "}
        <br />
        <label>Convert to:</label>
        <br />
        <input
          type="text"
          value={symbol}
          onChange={(p) => setSymbol(p.target.value.toLocaleUpperCase())}className="convertto"
        />
        <br /> <br /> <br />
       
        {load && <p>loading...</p>}
        {store && store.rates && (
          <div className="feedback">
            <p>
              Converted from: {store.base} to {symbol}{" "}
            </p>
            <p>Date: {store.date}</p>
            <p>
              {amount} {base} = {store.rates[symbol].toFixed(2)} {symbol}
            </p>
          </div> 
          
        )}
        <br />
        <button onClick={getExchangeApi} className="btn">Convert</button>
      </div>
    </div>
  );
};

export default ExhangeCounter;
