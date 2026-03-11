/*
========================================================
                REACT EVENT HANDLING
========================================================

Author: Ashutosh
Topic: Event Handling in React
Description:
This file demonstrates:

1. Button click event
2. Passing parameters to events
3. Handling input change
4. Form submission with preventDefault
5. Synthetic events
6. Event bubbling example

========================================================
*/

import React, { useState } from "react";

/*
--------------------------------------------------------
1️⃣ Basic Click Event
--------------------------------------------------------
*/

function ClickExample() {
  function handleClick() {
    alert("Button Clicked!");
  }

  return (
    <div>
      <h3>Basic Click Event</h3>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

/*
--------------------------------------------------------
2️⃣ Passing Arguments
--------------------------------------------------------
*/

function ArgumentExample() {
  function greet(name) {
    alert(`Hello ${name}`);
  }

  return (
    <div>
      <h3>Passing Arguments</h3>

      <button onClick={() => greet("Ashutosh")}>
        Say Hello
      </button>
    </div>
  );
}

/*
--------------------------------------------------------
3️⃣ Input Change Event
--------------------------------------------------------
*/

function InputExample() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <h3>Input Event</h3>

      <input
        type="text"
        placeholder="Type something"
        onChange={handleChange}
      />

      <p>You typed: {text}</p>
    </div>
  );
}

/*
--------------------------------------------------------
4️⃣ Form Submission
--------------------------------------------------------
*/

function FormExample() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    alert(`Form submitted by ${name}`);
  }

  return (
    <div>
      <h3>Form Example</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

/*
--------------------------------------------------------
5️⃣ Event Bubbling Example
--------------------------------------------------------
*/

function BubblingExample() {
  function parentClick() {
    console.log("Parent clicked");
  }

  function childClick() {
    console.log("Child clicked");
  }

  return (
    <div
      onClick={parentClick}
      style={{ border: "1px solid black", padding: "20px" }}
    >
      <h3>Event Bubbling</h3>

      <button onClick={childClick}>
        Click Child Button
      </button>
    </div>
  );
}

/*
--------------------------------------------------------
6️⃣ Main App
--------------------------------------------------------
*/

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Event Handling Examples</h1>

      <ClickExample />
      <ArgumentExample />
      <InputExample />
      <FormExample />
      <BubblingExample />
    </div>
  );
}

export default App;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. React events use camelCase naming.
   Example: onClick, onChange, onSubmit

2. Event handlers are passed as function references.

3. React uses SyntheticEvent system.

4. preventDefault() stops default browser behavior.

5. Events bubble up the DOM tree.

6. To pass arguments, use arrow function.

Example:
<button onClick={() => handleClick(id)}>

========================================================
*/