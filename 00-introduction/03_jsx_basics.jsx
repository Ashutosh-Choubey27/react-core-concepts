
/*
 * Topic: JSX Basics
 *
 * JSX stands for JavaScript XML.
 * It allows us to write HTML-like code inside JavaScript.
 *
 * IMPORTANT:
 * JSX is NOT HTML.
 * JSX gets converted into JavaScript by Babel.
 *
 * Interview Focus:
 * - JSX rules
 * - JSX vs HTML
 * - Why JSX exists
 */

import React from "react";

function JsxBasics() {
  // Normal JavaScript variable
  const name = "Ashutosh";
  const isLoggedIn = true;
  const score = 85;

  return (
    <div>
      {/* 1️⃣ JSX allows JavaScript inside {} */}
      <h2>Hello, {name}</h2>

      {/* 2️⃣ Expressions are allowed, statements are NOT */}
      <p>Score: {score + 5}</p>

      {/* ❌ This will NOT work */}
      {/* {if (isLoggedIn) {}} */}

      {/* ✅ Correct way: Conditional rendering */}
      <p>{isLoggedIn ? "Welcome back!" : "Please login"}</p>

      {/* 3️⃣ JSX must return a SINGLE parent element */}
      <div>
        <p>This is valid JSX</p>
        <p>Because it has one parent</p>
      </div>

      {/* 4️⃣ Self-closing tags are mandatory */}
      <input type="text" placeholder="Enter name" />

      {/* 5️⃣ class → className */}
      <p className="text-blue">JSX uses className</p>

      {/* 6️⃣ Inline styles are objects */}
      <p style={{ color: "green", fontSize: "18px" }}>
        Inline styling in JSX
      </p>

      {/* 7️⃣ Boolean, null, undefined are ignored */}
      <p>{false}</p>
      <p>{null}</p>
      <p>{undefined}</p>
    </div>
  );
}

export default JsxBasics;

/*

                            🧠 JSX RULES (Interview MUST)

✅ Allowed inside {}:

Variables

Expressions (+, &&, ?:)

Function calls

❌ NOT allowed inside {}:

if / else

for loops

switch statements

                🔥 JSX vs HTML (Direct Interview Question)
              
| JSX                         | HTML      |
| --------------------------- | --------- |
| className                   | class     |
| camelCase attributes        | lowercase |
| JS inside `{}`              | ❌         |
| Self-closing tags mandatory | optional  |

⚠️ Interview Traps (VERY IMPORTANT)

Question 1 : JSX is HTML ?

Answer:
JSX is syntax that looks like HTML but is converted to JavaScript

Question 2 : You can write if-else directly inside JSX ?

Answer:
JSX allows expressions, not statements. Use ternary or logical operators.

Question 3 : Inline styles are written like CSS strings ?

Answer:
style={{ color: "red" }}

                     🔥🔥🔥   IMPORTANT NOTE: 

 JSX is a syntax extension for JavaScript that allows writing HTML-like code in React.
 It is not HTML and gets converted into JavaScript by Babel. 
 JSX supports expressions inside curly braces and follows specific rules like single parent element 
 and camelCase attributes.

*/ 
