import React from "react";

function CurrencyConverter(props) {
  return (
    <div className="conveter_container">
      <p>
        {props.fromAmount} {props.firstInput} is eqauls to
      </p>
      <h3>
        {props.toAmount} {props.secondInput}
      </h3>
      <div>
        
        <select value={props.firstInput} onChange={props.handleFromCurreny}>
          {props.data.map((rate) => {
            return (
              <option key={rate} value={rate}>
                {rate}
              </option>
            );
          })}
        </select>
        <input
          type="number"
          value={props.fromAmount}
          onChange={props.onMoneyChangeFrom}
          min="1"
        />
      </div>
      <div>
        
        <select value={props.secondInput} onChange={props.handleToCurrency}>
          {props.data.map((rate) => {
            return (
              <option key={rate} value={rate}>
                {rate}
              </option>
            );
          })}
        </select>
        <input
          type="number"
          value={props.toAmount}
          onChange={props.onMoneyChangeTo}
          min="1"
        />
      </div>
    </div>
  );
}
export default CurrencyConverter;
