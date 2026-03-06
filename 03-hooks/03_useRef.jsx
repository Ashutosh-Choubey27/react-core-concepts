/*
========================================================
                REACT useRef HOOK
========================================================

Author: Ashutosh choubey
Topic: useRef Hook
Description:
This file demonstrates:

1. Accessing DOM elements
2. Focusing input field
3. Tracking previous state
4. Storing mutable values
5. Counting renders
6. Interview notes

========================================================
*/

import React, { useState, useEffect, useRef } from "react";

/*
--------------------------------------------------------
1️⃣ DOM Access Example (Focus Input)
--------------------------------------------------------
*/

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>Focus Input Example</h3>

      <input ref={inputRef} type="text" placeholder="Type here..." />

      <button onClick={focusInput} style={{ marginLeft: "10px" }}>
        Focus Input
      </button>
    </div>
  );
}

/*
--------------------------------------------------------
2️⃣ Persist Value Between Renders
--------------------------------------------------------
*/

function RenderCounter() {
  const renderCount = useRef(0);

  renderCount.current += 1;

  return (
    <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
      <h3>Component Rendered: {renderCount.current} times</h3>
    </div>
  );
}

/*
--------------------------------------------------------
3️⃣ Storing Previous State
--------------------------------------------------------
*/

function PreviousValueExample() {
  const [count, setCount] = useState(0);

  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div style={{ border: "1px solid green", padding: "10px", margin: "10px" }}>
      <h3>Current Count: {count}</h3>
      <h4>Previous Count: {prevCount.current}</h4>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

/*
--------------------------------------------------------
4️⃣ Storing Mutable Value (Timer Example)
--------------------------------------------------------
*/

function TimerExample() {
  const timerRef = useRef(null);
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div style={{ border: "1px solid purple", padding: "10px", margin: "10px" }}>
      <h3>Timer: {seconds}s</h3>

      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer} style={{ marginLeft: "10px" }}>
        Stop
      </button>
    </div>
  );
}

/*
--------------------------------------------------------
5️⃣ Main App Component
--------------------------------------------------------
*/

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>useRef Hook Demo</h1>

      <FocusInput />
      <RenderCounter />
      <PreviousValueExample />
      <TimerExample />
    </div>
  );
}

export default App;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. useRef stores a mutable value.
2. Updating ref does NOT cause re-render.
3. Useful for accessing DOM elements.
4. Ref values persist across renders.
5. Access ref value using ref.current.
6. useRef commonly used for:
   - DOM manipulation
   - Storing timers
   - Tracking previous state
   - Avoiding unnecessary re-renders

========================================================
*/