import React, { useState } from "react";

// useState : useState is a built-in React hook that enables functional components to have and manage state.
// It allows you to declare variables in your components to store stateful data, and it provides a function to
// update that state. When the state changes, React automatically re-renders the component with the new state values
function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return <button onClick={increment}>{count}</button>;
}

export default Counter;
