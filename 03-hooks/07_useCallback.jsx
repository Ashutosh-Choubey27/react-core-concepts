/*
========================================================
                REACT useCallback HOOK
========================================================

Author: Ashutosh
Topic: useCallback Hook
Description:
This file demonstrates:

1. Function recreation problem
2. useCallback optimization
3. Preventing unnecessary re-renders
4. React.memo with useCallback
5. Interview notes

========================================================
*/

import React, { useState, useCallback, memo } from "react";

/*
--------------------------------------------------------
1️⃣ Child Component (Memoized)
--------------------------------------------------------
*/

const Button = memo(({ onClick, label }) => {
  console.log(`Rendering ${label} button`);

  return (
    <button onClick={onClick} style={{ margin: "5px" }}>
      {label}
    </button>
  );
});

/*
--------------------------------------------------------
2️⃣ Parent Component
--------------------------------------------------------
*/

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  /*
  Using useCallback so function reference
  does not change on every render
  */

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>Count: {count}</h3>

      <Button onClick={increment} label="Increment" />

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

/*
--------------------------------------------------------
3️⃣ Main App Component
--------------------------------------------------------
*/

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>useCallback Hook Demo</h1>

      <ParentComponent />
    </div>
  );
}

export default App;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. useCallback memoizes a function.
2. Prevents unnecessary function recreation.
3. Useful when passing functions to child components.
4. Often used with React.memo.
5. Difference:
   - useMemo → memoizes value
   - useCallback → memoizes function
6. Do not overuse useCallback.

========================================================
*/