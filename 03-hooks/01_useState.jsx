/*
========================================================
                REACT useState HOOK
========================================================

Author: Ashutosh Choubey
Topic: useState Hook
Description:
This file demonstrates:

1. Basic counter example
2. Functional updates
3. State with object
4. State with array
5. Multiple states
6. Interview notes

========================================================
*/

import React, { useState } from "react";

/*
--------------------------------------------------------
1️⃣ Basic Counter Example
--------------------------------------------------------
*/

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

/*
--------------------------------------------------------
2️⃣ Functional Update Example
--------------------------------------------------------
*/

function FunctionalCounter() {
  const [count, setCount] = useState(0);

  const incrementTwice = () => {
    // Correct way when depending on previous state
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

  return (
    <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
      <h2>Functional Count: {count}</h2>
      <button onClick={incrementTwice}>Increment Twice</button>
    </div>
  );
}

/*
--------------------------------------------------------
3️⃣ Object State Example
--------------------------------------------------------
*/

function UserProfile() {
  const [user, setUser] = useState({
    name: "Ashutosh",
    age: 21,
  });

  const updateName = () => {
    setUser(prev => ({
      ...prev,
      name: "Ashu Dev",
    }));
  };

  return (
    <div style={{ border: "1px solid green", padding: "10px", margin: "10px" }}>
      <h3>Name: {user.name}</h3>
      <p>Age: {user.age}</p>
      <button onClick={updateName}>Change Name</button>
    </div>
  );
}

/*
--------------------------------------------------------
4️⃣ Array State Example
--------------------------------------------------------
*/

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build Project" },
  ]);

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: "New Task",
    };

    setTodos(prev => [...prev, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ border: "1px solid purple", padding: "10px", margin: "10px" }}>
      <h3>Todo List</h3>
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button
              onClick={() => removeTodo(todo.id)}
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
--------------------------------------------------------
5️⃣ Multiple State Variables
--------------------------------------------------------
*/

function MultipleStateExample() {
  const [name, setName] = useState("Ashutosh");
  const [age, setAge] = useState(21);

  return (
    <div style={{ border: "1px solid orange", padding: "10px", margin: "10px" }}>
      <h3>{name}</h3>
      <p>{age}</p>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
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
      <h1>useState Hook Demo</h1>

      <Counter />
      <FunctionalCounter />
      <UserProfile />
      <TodoList />
      <MultipleStateExample />
    </div>
  );
}

export default App;

/*
========================================================
                    INTERVIEW NOTES
========================================================

1. useState allows functional components to have state.
2. State updates are asynchronous and batched.
3. Never mutate state directly.
4. Use functional updates when depending on previous state.
5. Updating object/array requires spreading (...).
6. State change triggers re-render.
7. Hooks must be called at top level (not inside loops/conditions).

========================================================
*/