import React, { useState } from 'react'

const Counter = () => {
  const [ticker, setTicker] = useState(0);

  const handleIncrement = () => {
    setTicker(ticker + 1);
  }

  return (
    <div>
      <h2>Counter | Testing Click & State update with button Demo</h2>
      <p data-testid='tickerValue'>{ticker}</p>
      <button type="button" className="btn btn-success btn-sm" 
        onClick={handleIncrement} data-testid='incrementBtn'>
        Increment
      </button>
      <button type="button" className="btn btn-danger btn-sm">
        Decrement
      </button>
    </div>
  );
}

export default Counter