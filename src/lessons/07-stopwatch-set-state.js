import React, { useEffect, useReducer, useRef } from "react";

const reducer = (state, action) => {
  return { ...state, ...action };
};

const useStopWatch = () => {
  const [state, setState] = useReducer(reducer, {
    lapse: 0,
    running: false,
  });
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleClickClear = () => {
    clearInterval(intervalRef.current);
    setState({ lapse: 0, running: false });
  };

  const handleClickRunning = () => {
    clearInterval(intervalRef.current);
    if (!state.running) {
      const startTime = Date.now() - state.lapse;
      intervalRef.current = setInterval(() => {
        setState({ lapse: Date.now() - startTime });
      }, 100);
    }
    setState({ running: !state.running });
  };

  return { state, handleClickRunning, handleClickClear };
};
export const StopWatch = () => {
  const stopWatchOne = useStopWatch();
  const stopWatchTwo = useStopWatch();
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <label style={{ fontSize: "5em", display: "block" }}>
          {stopWatchOne.state.lapse} ms
        </label>
        <button
          onClick={stopWatchOne.handleClickRunning}
          type="button"
          style={buttonStyles}
        >
          {stopWatchOne.state.running ? "Stop" : "Start"}
        </button>
        <button
          onClick={stopWatchOne.handleClickClear}
          type="button"
          style={buttonStyles}
        >
          Clear
        </button>

        <hr />
        <strong
          style={{
            fontSize: "3em",
          }}
        >
          Lapse Differece :
        </strong>
        <span
          style={{
            fontSize: "3em",
            marginLeft: "0.3em",
          }}
        >
          {stopWatchOne.state.lapse - stopWatchTwo.state.lapse}
        </span>
        <hr />
        <label style={{ fontSize: "5em", display: "block" }}>
          {stopWatchTwo.state.lapse} ms
        </label>
        <button
          onClick={stopWatchTwo.handleClickRunning}
          type="button"
          style={buttonStyles}
        >
          {stopWatchTwo.state.running ? "Stop" : "Start"}
        </button>
        <button
          onClick={stopWatchTwo.handleClickClear}
          type="button"
          style={buttonStyles}
        >
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
