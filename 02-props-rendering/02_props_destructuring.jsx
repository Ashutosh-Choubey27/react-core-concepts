/*
==================================================
        REACT PROPS DESTRUCTURING
==================================================

Author: Ashutosh Choubey
Topic: Props Destructuring in React
Description:
This file demonstrates:

1. Basic props destructuring
2. Destructuring inside function body
3. Default values
4. Nested object destructuring
5. Function destructuring
6. Safe destructuring pattern
7. Interview notes

==================================================
*/

import React from "react";

/*
--------------------------------------------------
1️⃣ Basic Destructuring (Recommended Way)
--------------------------------------------------
*/

function User({ name, age }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

/*
--------------------------------------------------
2️⃣ Destructuring Inside Function Body
--------------------------------------------------
*/

function Employee(props) {
  const { name, role } = props;

  return (
    <div style={{ border: "1px solid blue", margin: "10px", padding: "10px" }}>
      <h2>Employee: {name}</h2>
      <p>Role: {role}</p>
    </div>
  );
}

/*
--------------------------------------------------
3️⃣ Default Values in Destructuring
--------------------------------------------------
*/

function Greeting({ message = "Hello Guest 👋" }) {
  return (
    <div style={{ border: "1px solid green", margin: "10px", padding: "10px" }}>
      <h3>{message}</h3>
    </div>
  );
}

/*
--------------------------------------------------
4️⃣ Nested Props Destructuring
--------------------------------------------------
*/

function Profile({ user: { username, email } }) {
  return (
    <div style={{ border: "1px solid purple", margin: "10px", padding: "10px" }}>
      <h2>Username: {username}</h2>
      <p>Email: {email}</p>
    </div>
  );
}

/*
--------------------------------------------------
5️⃣ Safe Nested Destructuring Pattern
--------------------------------------------------
*/

function SafeProfile({ user }) {
  const { username = "Unknown", email = "Not Provided" } = user || {};

  return (
    <div style={{ border: "1px solid orange", margin: "10px", padding: "10px" }}>
      <h2>Username: {username}</h2>
      <p>Email: {email}</p>
    </div>
  );
}

/*
--------------------------------------------------
6️⃣ Destructuring Function Props
--------------------------------------------------
*/

function Button({ handleClick }) {
  return (
    <button
      onClick={handleClick}
      style={{ padding: "8px 12px", margin: "10px" }}
    >
      Click Me
    </button>
  );
}

/*
--------------------------------------------------
7️⃣ Parent Component
--------------------------------------------------
*/

function App() {
  const showMessage = () => {
    alert("Button Clicked 🚀");
  };

  return (
    <div>
      <h1>Props Destructuring Demo</h1>

      <User name="Ashutosh" age={21} />

      <Employee name="Anik" role="Backend Developer" />

      {/* Default Value Example */}
      <Greeting />

      {/* Nested Object Passing */}
      <Profile user={{ username: "ashu_dev", email: "ashu@mail.com" }} />

      {/* Safe Nested Example (passing nothing) */}
      <SafeProfile />

      {/* Function Destructuring */}
      <Button handleClick={showMessage} />
    </div>
  );
}

export default App;

/*
==================================================
        INTERVIEW NOTES
==================================================

1. Destructuring improves readability.
2. It does NOT modify props.
3. Nested destructuring can crash if object is undefined.
4. Default values can be assigned during destructuring.
5. Function props can also be destructured.
6. Parameter destructuring is preferred in modern React.

==================================================
*/