// 04_react-memo.jsx

/*
========================================================
                REACT.MEMO
========================================================

Author: Ashutosh
Topic: React.memo
Description:
This file demonstrates:

1. Unnecessary re-rendering
2. Performance optimization
3. React.memo usage
4. Parent vs Child rendering
5. Stable vs unstable props

========================================================
*/

import React, { useState, useCallback } from "react";

/*
--------------------------------------------------------
1️⃣ Child Component
--------------------------------------------------------
*/

const Child = React.memo(function Child({ name, onClick }) {
  console.log("Child Rendered");

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        marginTop: "10px",
      }}
    >
      <h2>Child Component</h2>

      <p>Name: {name}</p>

      <button onClick={onClick}>
        Child Button
      </button>
    </div>
  );
});

/*
--------------------------------------------------------
2️⃣ Parent Component
--------------------------------------------------------
*/

function App() {
  const [count, setCount] = useState(0);

  /*
  Stable function reference
  */

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React.memo Example</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      {/* Child will NOT re-render unnecessarily */}
      <Child
        name="Ashutosh"
        onClick={handleClick}
      />
    </div>
  );
}

export default App;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. React.memo prevents unnecessary re-renders.

2. It performs shallow comparison of props.

3. Child re-renders only if props change.

4. Works best with stable references.

5. Use useCallback/useMemo with React.memo.

6. Do NOT overuse React.memo.

========================================================
*/