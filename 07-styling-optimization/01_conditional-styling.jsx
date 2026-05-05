/*
========================================================
        REACT CONDITIONAL STYLING
========================================================

Author: Ashutosh
Topic: Conditional Styling
Description:
This file demonstrates:

1. Inline conditional styling
2. Conditional className
3. Template literals
4. Multiple conditions
5. Real UI examples

========================================================
*/

import React, { useState } from "react";
import "./styles.css"; // assume basic CSS

/*
--------------------------------------------------------
1️⃣ Button Toggle Example
--------------------------------------------------------
*/

function ToggleButton() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <h3>Toggle Button</h3>

      <button
        className={`btn ${isActive ? "active" : "inactive"}`}
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? "Active" : "Inactive"}
      </button>
    </div>
  );
}

/*
--------------------------------------------------------
2️⃣ Status Message
--------------------------------------------------------
*/

function StatusMessage() {
  const [status, setStatus] = useState("default");

  return (
    <div>
      <h3>Status Message</h3>

      <div
        className={
          status === "error"
            ? "error"
            : status === "success"
            ? "success"
            : "default"
        }
      >
        {status.toUpperCase()}
      </div>

      <button onClick={() => setStatus("success")}>
        Success
      </button>

      <button onClick={() => setStatus("error")}>
        Error
      </button>
    </div>
  );
}

/*
--------------------------------------------------------
3️⃣ Inline Style Example
--------------------------------------------------------
*/

function InlineStyleExample() {
  const [dark, setDark] = useState(false);

  return (
    <div>
      <h3>Dark Mode</h3>

      <div
        style={{
          backgroundColor: dark ? "#333" : "#fff",
          color: dark ? "#fff" : "#000",
          padding: "10px",
        }}
      >
        Theme Box
      </div>

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  );
}

/*
--------------------------------------------------------
4️⃣ Main App
--------------------------------------------------------
*/

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Conditional Styling Examples</h1>

      <ToggleButton />
      <StatusMessage />
      <InlineStyleExample />
    </div>
  );
}

export default App;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. Conditional styling is used to change UI dynamically.

2. Common methods:
   - Inline style
   - className (ternary)
   - template literals

3. Avoid messy nested conditions.

4. className approach is most preferred.

5. Useful for:
   - active states
   - validation UI
   - themes

========================================================
*/