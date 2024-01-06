import React, { useState, useEffect } from 'react';
import useCurrencyInfo from '../Hooks/useCurrencyInfo';

const Curncey = () => {
  const [amount, setAmount] = useState(0);
  const [fromValue, setFromValue] = useState('usd');
  const [toValue, setToValue] = useState('inr');
  const [toAmount, setToAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromValue);
  const optionData = Object.keys(currencyInfo);

  const selectDataFrom = (e) => {
    setFromValue(e.target.value);
  };

  const selectDataTo = (e) => {
    setToValue(e.target.value);
  };

  const amountChange = (e) => {
    setAmount(e.target.value);
  };

  const valueConvert = () => {
    const conversionRate = currencyInfo[toValue];
    const converted = (amount * conversionRate).toFixed(2);
    setToAmount(converted);

  };
  useEffect(() => {
    valueConvert();
  }, [amount, fromValue, toValue]);

  return (
    <div>
      <div>
        <input type="number" value={amount} onChange={(e) => amountChange(e)} />

        <select name="from" value={fromValue} onChange={(e) => selectDataFrom(e)}>
          {optionData.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <input type="text" value={toAmount} readOnly />

        <select name="to" value={toValue} onChange={(e) => selectDataTo(e)}>
          {optionData.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>


      </div>
    </div>
  );
};

export default Curncey;
