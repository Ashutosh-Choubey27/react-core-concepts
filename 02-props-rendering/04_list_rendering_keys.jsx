/*
====================================================
        REACT LIST RENDERING & KEYS
====================================================

Author: Ashutosh Choubey
Topic: List Rendering and Keys in React
Description:
This file demonstrates:

1. Rendering lists using map()
2. Using unique keys
3. Why index as key is bad
4. Proper key placement
5. Dynamic list update
6. Interview notes

====================================================
*/

import React, { useState } from "react";

/*
----------------------------------------------------
1️⃣ Basic List Rendering
----------------------------------------------------
*/

function NumberList() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <h3>Number List</h3>
      <ul>
        {numbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

/*
----------------------------------------------------
2️⃣ Rendering List of Objects (Best Practice)
----------------------------------------------------
*/

function UserList() {
  const users = [
    { id: 1, name: "Ashutosh" },
    { id: 2, name: "Anik" },
    { id: 3, name: "Riya" },
  ];

  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

/*
----------------------------------------------------
3️⃣ Dynamic List with State
----------------------------------------------------
*/

function DynamicList() {
  const [items, setItems] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Practice DSA" },
  ]);

  const addItem = () => {
    const newItem = {
      id: Date.now(), // unique id
      text: "New Task " + items.length,
    };

    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  return (
    <div>
      <h3>Dynamic Task List</h3>

      <button onClick={addItem}>Add Task</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button
              onClick={() => removeItem(item.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/*
----------------------------------------------------
4️⃣ Wrong Way: Index as Key (For Learning Only)
----------------------------------------------------
*/

function IndexKeyExample() {
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <div>
      <h3>Index as Key (Not Recommended)</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

/*
----------------------------------------------------
5️⃣ Main App Component
----------------------------------------------------
*/

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>List Rendering & Keys Demo</h1>

      <NumberList />
      <UserList />
      <DynamicList />
      <IndexKeyExample />
    </div>
  );
}

export default App;

/*
====================================================
                INTERVIEW NOTES
====================================================

1. Always use map() for list rendering.
2. Every list item must have a key.
3. Key should be unique and stable.
4. Avoid using index as key if list changes.
5. Keys help React's reconciliation algorithm.
6. Keys are not accessible inside component props.
7. Put key on the outermost returned element.

====================================================
*/