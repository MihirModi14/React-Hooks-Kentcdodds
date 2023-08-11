import React, { useEffect, useReducer, useRef, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "LAPSE":
      return {
        ...state,
        lapse: state.lapse + 1,
      };
    case "TOGGLE_RUNNING":
      return {
        ...state,
        running: !state.running,
      };
    case "CLEAR":
      return {
        lapse: 0,
        running: false,
      };
  }

  return state;
};

export const StopWatch = () => {
  const [state, dispatch] = useReducer(reducer, {
    lapse: 0,
    running: false,
  });
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleClickClear = () => {
    clearInterval(intervalRef.current);
    dispatch({ type: "CLEAR" });
  };

  const handleClickRunning = () => {
    clearInterval(intervalRef.current);
    if (!state.running) {
      intervalRef.current = setInterval(() => {
        dispatch({ type: "LAPSE" });
      }, 100);
    }
    dispatch({ type: "TOGGLE_RUNNING" });
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <label style={{ fontSize: "5em", display: "block" }}>
          {state.lapse} ms
        </label>
        <button onClick={handleClickRunning} type="button" style={buttonStyles}>
          {state.running ? "Stop" : "Start"}
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
