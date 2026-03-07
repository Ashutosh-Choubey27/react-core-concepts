/*
========================================================
                REACT useMemo HOOK
========================================================

Author: Ashutosh
Topic: useMemo Hook
Description:
This file demonstrates:

1. Expensive calculation example
2. Optimization using useMemo
3. Filtering list with useMemo
4. Performance comparison
5. Interview notes

========================================================
*/

import React, { useState, useMemo } from "react";

/*
--------------------------------------------------------
1️⃣ Expensive Calculation Function
--------------------------------------------------------
*/

function expensiveCalculation(num) {
  console.log("Running expensive calculation...");

  for (let i = 0; i < 1000000000; i++) {}

  return num * 2;
}

/*
--------------------------------------------------------
2️⃣ Without useMemo (Re-runs every render)
--------------------------------------------------------
*/

function WithoutMemo() {
  const [number, setNumber] = useState(1);
  const [theme, setTheme] = useState("light");

  const result = expensiveCalculation(number);

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>Without useMemo</h3>

      <p>Result: {result}</p>

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>

      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{ marginLeft: "10px" }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

/*
--------------------------------------------------------
3️⃣ With useMemo (Optimized)
--------------------------------------------------------
*/

function WithMemo() {
  const [number, setNumber] = useState(1);
  const [theme, setTheme] = useState("light");

  const result = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <div style={{ border: "1px solid blue", margin: "10px", padding: "10px" }}>
      <h3>With useMemo</h3>

      <p>Result: {result}</p>

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>

      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{ marginLeft: "10px" }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

/*
--------------------------------------------------------
4️⃣ Filtering Large List Example
--------------------------------------------------------
*/

function FilterExample() {
  const [search, setSearch] = useState("");

  const users = [
    "Ashutosh",
    "Anik",
    "Riya",
    "Rahul",
    "Aman",
    "Neha",
    "Priya",
  ];

  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");
    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div style={{ border: "1px solid green", margin: "10px", padding: "10px" }}>
      <h3>User Search</h3>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredUsers.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
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
      <h1>useMemo Hook Demo</h1>

      <WithoutMemo />
      <WithMemo />
      <FilterExample />
    </div>
  );
}

export default App;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. useMemo memoizes a computed value.
2. Prevents expensive recalculations.
3. Runs only when dependencies change.
4. Should not be overused.
5. Helps in performance optimization.
6. Difference:
   - useMemo → memoizes value
   - useCallback → memoizes function

========================================================
*/