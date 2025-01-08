import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  amountDisable = false,
  currencyDisable = false,
  currencyOptions = [],
  selectCurrency = "usd",
}) {
  return (
    <div className="bg-white p-3 rounded-lg text-lg flex justify-between">
      <div className="w-1/3">
        <label className="text-black/70 mb-2 inline-block">{label}</label>
        <input
          type="number"
          placeholder="0"
          className="outline-none font-bold w-full bg-transparent py-1.5"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      <div className="flex flex-col">
        <p className="text-black/70 mb-2 inline-block">Currency Type</p>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className="bg-blue-600 text-white font-bold text-lg rounded-lg px-1 py-1 cursor-pointer outline-none"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
