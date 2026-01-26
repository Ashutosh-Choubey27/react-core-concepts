
/**
 * Topic: Functional Components in React
 *
 * A Functional Component is a JavaScript function
 * that returns JSX.
 *
 * Earlier, React had Class Components, but now
 * Functional Components are preferred because:
 * - Cleaner syntax
 * - Easier to understand
 * - Hooks can be used
 *
 * Interview Focus:
 * - What is a functional component?
 * - Functional vs Class component
 * - Why functional components are preferred?
 */

import React from "react";

/* 1️⃣ Basic Functional Component */
function FunctionalComponent() {
  return <h2>Hello from Functional Component</h2>;
}

/* 2️⃣ Functional Component with Props */
function Greeting(props) {
  return <p>Hello, {props.name}</p>;
}

/* 3️⃣ Functional Component with Props Destructuring */
function UserInfo({ username, age }) {
  return (
    <div>
      <p>Name: {username}</p>
      <p>Age: {age}</p>
    </div>
  );
}

/* 4️⃣ Functional Component with Conditional Rendering */
function Status({ isOnline }) {
  return <p>{isOnline ? "User is Online" : "User is Offline"}</p>;
}

/* 5️⃣ Functional Component Returning Multiple Elements
      (using React Fragment)
*/
function FragmentExample() {
  return (
    <>
      <p>First Line</p>
      <p>Second Line</p>
    </>
  );
}

/* 6️⃣ Exporting Component */
export default FunctionalComponent;

/*
 
🧠 Functional Component – Theory (Interview Ready)
 
1. What is a Functional Component?

  A functional component is a JavaScript function that returns JSX and is used to 
  create UI elements in React.

2. Functional vs Class Component (Classic Interview Question)

| Functional Component | Class Component        |
| -------------------- | ---------------------- |
| JavaScript function  | JavaScript class       |
| Uses Hooks           | Uses lifecycle methods |
| Cleaner & shorter    | Verbose                |
| Preferred today      | Mostly legacy          |

3. You must import React in every file

  With new JSX transform (React 17+), importing React is not mandatory.

*/
