import React, { useEffect, useRef, useState } from "react";

export const StopWatch = () => {
  const [lapse, setLapse] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleClickClear = () => {
    clearInterval(intervalRef.current);
    setLapse(0);
    setRunning(false);
  };

  const handleClickRunning = () => {
    clearInterval(intervalRef.current);
    if (!running) {
      intervalRef.current = setInterval(() => {
        setLapse((lapse) => lapse + 1);
      }, 100);
    }
    setRunning(!running);
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <label style={{ fontSize: "5em", display: "block" }}>{lapse} ms</label>
        <button onClick={handleClickRunning} type="button" style={buttonStyles}>
          {running ? "Stop" : "Start"}
        </button>
        <button onClick={handleClickClear} type="button" style={buttonStyles}>
          Clear
        </button>
      </div>
    </>
  );
};

const buttonStyles = {
  border: "1px solid #ccc",
  background: "#fff",
  fontSize: "2em",
  padding: 15,
  margin: 5,
  width: 200,
};

export default StopWatch;
