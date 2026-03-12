/*
========================================================
                REACT CUSTOM HOOKS
========================================================

Author: Ashutosh
Topic: Custom Hooks
Description:
This file demonstrates:

1. Creating a custom hook
2. Reusable state logic
3. useCounter custom hook
4. useToggle custom hook
5. Using hooks inside components
6. Interview notes

========================================================
*/

import React, { useState } from "react";

/*
--------------------------------------------------------
1️⃣ Custom Hook: useCounter
--------------------------------------------------------
Reusable counter logic
*/

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return { count, increment, decrement, reset };
}

/*
--------------------------------------------------------
2️⃣ Custom Hook: useToggle
--------------------------------------------------------
Used for toggle states like modal, theme etc
*/

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue((prev) => !prev);
  };

  return [value, toggle];
}

/*
--------------------------------------------------------
3️⃣ Component using useCounter
--------------------------------------------------------
*/

function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>Counter: {count}</h3>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>
      <button onClick={reset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

/*
--------------------------------------------------------
4️⃣ Component using useToggle
--------------------------------------------------------
*/

function ToggleComponent() {
  const [isVisible, toggle] = useToggle(false);

  return (
    <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
      <button onClick={toggle}>
        Toggle Message
      </button>

      {isVisible && <p>Hello Ashutosh 👋</p>}
    </div>
  );
}

/*
--------------------------------------------------------
5️⃣ Main App
--------------------------------------------------------
*/

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Custom Hooks Demo</h1>

      <CounterComponent />
      <ToggleComponent />
    </div>
  );
}

export default App;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. Custom hooks allow reusable stateful logic.
2. A custom hook is just a JavaScript function.
3. Custom hooks must start with "use".
4. They can use other hooks like useState, useEffect etc.
5. Each component using a custom hook gets its own state.

Example:

function useCounter(){
  const [count,setCount] = useState(0)
  return count
}

========================================================
*/