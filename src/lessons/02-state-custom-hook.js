import React, { useState } from "react";

// custom hook with useState
// Custom Hook : A custom hook is a user-defined React hook that allows you to extract and reuse stateful logic from components.
function useCounter(intialValue) {
  const [count, setCount] = useState(intialValue);
  const increment = (step) => setCount(count + Number(step));
  return { count, increment };
}

function Counter() {
  const [step, setStep] = useState(0);
  const { count, increment } = useCounter(5);
  return (
    <>
      <input
        type="number"
        value={step}
        onChange={(event) => {
          setStep(event.target.value);
        }}
        placeholder="steps"
      ></input>
      <button onClick={() => increment(step)}>Counter: {count}</button>
    </>
  );
}

export default Counter;
