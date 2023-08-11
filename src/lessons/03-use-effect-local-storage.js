import React, { useState, useEffect } from "react";

// useEffect : useEffect is another built-in React hook that allows you to perform side effects in functional components.
// Side effects are operations that affect the outside world, such as data fetching, subscriptions, or manually interacting with the DOM.
function Counter() {
  const [count, setCount] = useState(() =>
    Number(window.localStorage.getItem("count") || 0)
  );

  const increment = () => setCount(count + 1);

  useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count]);

  return <button onClick={increment}>{count}</button>;
}

export default Counter;
