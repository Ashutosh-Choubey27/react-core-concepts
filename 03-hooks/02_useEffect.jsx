/*
========================================================
                REACT useEffect HOOK
========================================================

Author: Ashutosh Choubey
Topic: useEffect Hook
Description:
This file demonstrates:

1. useEffect basic example
2. useEffect with dependency
3. Timer with cleanup
4. API fetching
5. Component lifecycle behaviour
6. Interview notes

========================================================
*/

import React, { useState, useEffect } from "react";

/*
--------------------------------------------------------
1️⃣ useEffect without Dependency Array
Runs on every render
--------------------------------------------------------
*/

function EveryRenderEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered");
  });

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

/*
--------------------------------------------------------
2️⃣ useEffect with Empty Dependency
Runs only once (component mount)
--------------------------------------------------------
*/

function MountEffect() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return (
    <div style={{ border: "1px solid blue", margin: "10px", padding: "10px" }}>
      <h3>Check console for mount message</h3>
    </div>
  );
}

/*
--------------------------------------------------------
3️⃣ useEffect with Dependency
Runs when state changes
--------------------------------------------------------
*/

function DependencyEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div style={{ border: "1px solid green", margin: "10px", padding: "10px" }}>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </div>
  );
}

/*
--------------------------------------------------------
4️⃣ Timer with Cleanup
--------------------------------------------------------
*/

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ border: "1px solid purple", margin: "10px", padding: "10px" }}>
      <h3>Timer: {seconds}s</h3>
    </div>
  );
}

/*
--------------------------------------------------------
5️⃣ Fetch API Example
--------------------------------------------------------
*/

function FetchUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <div style={{ border: "1px solid orange", margin: "10px", padding: "10px" }}>
      <h3>Users List</h3>

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

/*
--------------------------------------------------------
6️⃣ Main App Component
--------------------------------------------------------
*/

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>useEffect Hook Demo</h1>

      <EveryRenderEffect />
      <MountEffect />
      <DependencyEffect />
      <TimerComponent />
      <FetchUsers />
    </div>
  );
}

export default App;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. useEffect handles side effects in React.
2. Without dependency array → runs every render.
3. Empty dependency array → runs once on mount.
4. Dependencies array → runs when those values change.
5. Cleanup function prevents memory leaks.
6. useEffect replaces lifecycle methods in functional components.
7. Never make useEffect callback directly async.

========================================================
*/