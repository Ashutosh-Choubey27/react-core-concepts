/*
========================================================
                REACT useContext HOOK
========================================================

Author: Ashutosh Choubey
Topic: useContext Hook
Description:
This file demonstrates:

1. Creating Context
2. Providing Context
3. Consuming Context with useContext
4. Avoiding props drilling
5. Multiple component usage
6. Interview notes

========================================================
*/

import React, { createContext, useContext, useState } from "react";

/*
--------------------------------------------------------
1️⃣ Create Context
--------------------------------------------------------
*/

const UserContext = createContext();

/*
--------------------------------------------------------
2️⃣ GrandChild Component (Consumes Context)
--------------------------------------------------------
*/

function GrandChild() {
  const user = useContext(UserContext);

  return (
    <div style={{ border: "1px solid purple", padding: "10px", margin: "10px" }}>
      <h3>GrandChild Component</h3>
      <p>User from Context: {user}</p>
    </div>
  );
}

/*
--------------------------------------------------------
3️⃣ Child Component
--------------------------------------------------------
*/

function Child() {
  return (
    <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
      <h3>Child Component</h3>
      <GrandChild />
    </div>
  );
}

/*
--------------------------------------------------------
4️⃣ Parent Component
--------------------------------------------------------
*/

function Parent() {
  return (
    <div style={{ border: "1px solid green", padding: "10px", margin: "10px" }}>
      <h3>Parent Component</h3>
      <Child />
    </div>
  );
}

/*
--------------------------------------------------------
5️⃣ Main App Component (Provider)
--------------------------------------------------------
*/

function App() {
  const [user] = useState("Ashutosh");

  return (
    <UserContext.Provider value={user}>
      <div style={{ padding: "20px" }}>
        <h1>useContext Hook Demo</h1>
        <Parent />
      </div>
    </UserContext.Provider>
  );
}

export default App;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. useContext allows components to access global data.
2. It solves props drilling problem.
3. Context consists of:
   - createContext
   - Provider
   - Consumer (useContext)
4. All consumers re-render when provider value changes.
5. Context should be used for global data like:
   - theme
   - authentication
   - language
6. Do not overuse context for all state.

========================================================
*/