
/**
 * Topic: Component Reusability in React
 *
 * Reusability means:
 * "Write once, use multiple times with different data or behavior."
 *
 * This is one of the MOST IMPORTANT React concepts for:
 * - Real projects
 * - Clean code
 * - Interviews
 *
 * Interview Focus:
 * - What is reusable component?
 * - Why reusability is important?
 * - How props & children help in reusability?
 */

import React from "react";

/* ------------------------------------------------------------------ */
/* 1️⃣ REUSABLE BUTTON COMPONENT */
/* ------------------------------------------------------------------ */

/**
 * This Button component can be reused anywhere
 * by just changing props.
 */
function Button({ text, onClick, type = "button", disabled = false }) {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* 2️⃣ USING CHILDREN PROP (VERY IMPORTANT) */
/* ------------------------------------------------------------------ */

/**
 * children prop allows us to pass JSX
 * inside a component.
 */
function Card({ children }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 3️⃣ CONDITIONAL RENDERING FOR REUSABILITY */
/* ------------------------------------------------------------------ */

function UserStatus({ isLoggedIn }) {
  return <p>{isLoggedIn ? "Welcome User 👋" : "Please Login 🔐"}</p>;
}

/* ------------------------------------------------------------------ */
/* 4️⃣ DEFAULT PROPS (FALLBACK VALUES) */
/* ------------------------------------------------------------------ */

function Profile({ name = "Guest", age = "Not provided" }) {
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* 5️⃣ REAL-WORLD USAGE (COMPOSITION) */
/* ------------------------------------------------------------------ */

function ComponentReusability() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h2>Component Reusability Demo</h2>

      {/* Reusing Button component */}
      <Button text="Click Me" onClick={handleClick} />
      <Button text="Disabled Button" disabled={true} />

      {/* Reusing Card with different content */}
      <Card>
        <h3>User Info</h3>
        <Profile name="Ashutosh" age={22} />
      </Card>

      <Card>
        <h3>Status</h3>
        <UserStatus isLoggedIn={true} />
      </Card>
    </div>
  );
}

export default ComponentReusability;

/*

 🧠 CORE THEORY (Interview Ready)

1. What is a Reusable Component?

👉 Component reusability in React means creating components that can be used multiple
    times with different data using props. It improves code maintainability,
    reduces duplication, and makes applications scalable.

2. Why Component Reusability is Important?
  
 👉 Avoids code duplication

 👉 Easy maintenance

 👉 Clean and scalable code

 👉 Faster development

 3. Reusability means copy-paste component?

 👉 Reusability means using the same component with different props.

 4. Default props are mandatory ?

 👉 Default props are optional and used as fallback values.

*/