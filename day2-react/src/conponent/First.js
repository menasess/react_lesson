import React, { useState } from 'react';

function First() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [result, setResult] = useState();

  const Add = () => {
    setResult(Number(first) + Number(second));
  };

  const Add1 = () => {
    setResult(first - second);
  };

  const  Add2 = () => {
    setResult(first * second);
  };

  const Add3 = () => {
   
      setResult(first / second);
     
  };

  return (
    <div>
      <input
        type="number"
        
        value={first}
        onChange={(e) => setFirst(e.target.value)}
      />
      <input
        type="number"
       
        value={second}
        onChange={(e) => setSecond(e.target.value)} 
      />
      
      <button onClick={Add}><h3>+</h3></button>
      <button onClick={Add1}><h3>-</h3></button>
      <button onClick={Add2}><h3>x</h3></button>
      <button onClick={Add3}><h3>÷</h3></button>
      
      <h1>결과 = {result}</h1>
    </div>
  );
}

export default First;
