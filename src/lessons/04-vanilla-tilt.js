import "./04-vanilla-tilt.css";
import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

// useRef :
// 1) It can be used to store a mutable value that does not cause a re-render when updated.
// 2) It can be used to access a DOM element directly.
function Tilt(props) {
  const tiltRef = useRef();
  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
    return () => tiltRef.current.vanillaTilt.destroy();
  }, []);
  return (
    <div ref={tiltRef} className="tilt-root">
      <div className="tilt-child">{props.children}</div>
    </div>
  );
}

function App() {
  return (
    <div className="totally-centered">
      <Tilt>
        <div className="totally-centered">vanilla-tilt.js</div>
      </Tilt>
    </div>
  );
}

export default App;
