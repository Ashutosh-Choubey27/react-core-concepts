/*
========================================
        REACT PROPS - BASIC CONCEPT
========================================

Author: Ashutosh Choubey
Topic: Props in React (Basic)
Description:
This file demonstrates:
1. What are props
2. Passing props
3. Receiving props
4. Destructuring props
5. Default props
6. Passing functions as props
7. Props immutability
========================================
*/

import React from "react";

/* 
----------------------------------------
1️⃣ Child Component (Receiving Props)
----------------------------------------
*/

// Basic way (using props object)
function User(props) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Profession: {props.profession}</p>
    </div>
  );
}

/* 
----------------------------------------
2️⃣ Using Destructuring (Recommended)
----------------------------------------
*/

function Student({ name, course, city }) {
  return (
    <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
      <h2>Student Name: {name}</h2>
      <p>Course: {course}</p>
      <p>City: {city}</p>
    </div>
  );
}

/* 
----------------------------------------
3️⃣ Default Props Example
----------------------------------------
*/

function Greeting({ message = "Hello, Default User!" }) {
  return (
    <div style={{ border: "1px solid green", padding: "10px", margin: "10px" }}>
      <h3>{message}</h3>
    </div>
  );
}

/* 
----------------------------------------
4️⃣ Passing Function as Props
----------------------------------------
*/

function Button({ handleClick }) {
  return (
    <button onClick={handleClick} style={{ padding: "8px 12px" }}>
      Click Me
    </button>
  );
}

/* 
----------------------------------------
5️⃣ Parent Component
----------------------------------------
*/

function App() {
  const showAlert = () => {
    alert("Button Clicked! 🚀");
  };

  return (
    <div>
      <h1>React Props Demo</h1>

      {/* Passing Props */}
      <User name="Ashutosh" age={21} profession="Frontend Developer" />
      <User name="Anik" age={22} profession="Backend Developer" />

      {/* Destructured Props */}
      <Student name="Riya" course="B.Tech" city="Delhi" />

      {/* Default Props (No prop passed) */}
      <Greeting />

      {/* Passing Function as Prop */}
      <Button handleClick={showAlert} />
    </div>
  );
}

export default App;

/*
========================================
IMPORTANT INTERVIEW NOTES
========================================

1. Props are read-only (immutable).
2. Data flows only from Parent → Child.
3. Props make components reusable.
4. Functions can also be passed as props.
5. Destructuring props is considered clean practice.
6. If prop is not passed, it becomes undefined.
7. Default parameters can handle missing props.

========================================
*/