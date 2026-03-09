/*
========================================================
                REACT useReducer HOOK
========================================================

Author: Ashutosh Choubey
Topic: useReducer Hook
Description:
This file demonstrates:

1. Basic counter using useReducer
2. Handling multiple actions
3. Managing complex state
4. Reducer pattern
5. Interview notes

========================================================
*/

import React, { useReducer } from "react";

/*
--------------------------------------------------------
1️⃣ Initial State
--------------------------------------------------------
*/

const initialState = {
  count: 0,
};

/*
--------------------------------------------------------
2️⃣ Reducer Function
--------------------------------------------------------
*/

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return { count: 0 };

    default:
      return state;
  }
}

/*
--------------------------------------------------------
3️⃣ Counter Component
--------------------------------------------------------
*/

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>

      <button
        onClick={() => dispatch({ type: "decrement" })}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>

      <button
        onClick={() => dispatch({ type: "reset" })}
        style={{ marginLeft: "10px" }}
      >
        Reset
      </button>
    </div>
  );
}

/*
--------------------------------------------------------
4️⃣ Complex State Example
--------------------------------------------------------
*/

const todoInitialState = {
  todos: [],
};

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload],
      };

    case "REMOVE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, todoInitialState);

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: "New Task",
    };

    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
  };

  return (
    <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
      <h3>Todo List</h3>

      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_TODO", payload: todo.id })
              }
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
5️⃣ Main App Component
--------------------------------------------------------
*/

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>useReducer Hook Demo</h1>

      <Counter />
      <TodoApp />
    </div>
  );
}

export default App;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. useReducer manages complex state logic.
2. It follows Redux-like pattern.
3. State updates happen via dispatching actions.
4. Reducer function determines how state changes.
5. State must remain immutable.
6. Useful for large forms or complex state transitions.

========================================================
*/