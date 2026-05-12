// 01-redux-basics.jsx

/*
========================================================
                REDUX BASICS
========================================================

Author: Ashutosh
Topic: Redux Basics
Description:
This file demonstrates:

1. Redux Store
2. Actions
3. Reducers
4. Dispatch
5. useSelector
6. useDispatch
7. Global State Management

========================================================
*/

import React from "react";

import {
  createStore,
} from "redux";

import {
  Provider,
  useSelector,
  useDispatch,
} from "react-redux";

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
2️⃣ Reducer
--------------------------------------------------------

Reducer is a pure function.

Parameters:
- current state
- action

Returns:
- updated state

*/

function counterReducer(
  state = initialState,
  action
) {
  switch (action.type) {

    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };

    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
}

/*
--------------------------------------------------------
3️⃣ Store
--------------------------------------------------------

Store holds global state.

*/

const store = createStore(
  counterReducer
);

/*
--------------------------------------------------------
4️⃣ Counter Component
--------------------------------------------------------
*/

function Counter() {

  /*
  Access state from store
  */

  const count = useSelector(
    (state) => state.count
  );

  /*
  Dispatch actions
  */

  const dispatch = useDispatch();

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>
        Redux Counter Example
      </h1>

      <h2>
        Count: {count}
      </h2>

      {/* Increment */}

      <button
        onClick={() =>
          dispatch({
            type: "increment",
          })
        }
      >
        Increment
      </button>

      {/* Decrement */}

      <button
        onClick={() =>
          dispatch({
            type: "decrement",
          })
        }
        style={{
          marginLeft: "10px",
        }}
      >
        Decrement
      </button>
    </div>
  );
}

/*
--------------------------------------------------------
5️⃣ App Component
--------------------------------------------------------
*/

function App() {
  return (

    /*
    Provider makes store
    available to entire app
    */

    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. Redux is a state management
   library.

--------------------------------------------------------

2. Redux stores shared/global
   application state.

--------------------------------------------------------

3. Core Redux concepts:
   - Store
   - Actions
   - Reducers
   - Dispatch

--------------------------------------------------------

4. Reducers must be pure
   functions.

--------------------------------------------------------

5. Redux follows unidirectional
   data flow.

--------------------------------------------------------

6. useSelector():
   Reads data from store.

--------------------------------------------------------

7. useDispatch():
   Sends actions to reducer.

--------------------------------------------------------

8. Provider gives Redux store
   access to entire app.

--------------------------------------------------------

9. Common Redux Flow:

   Component
      ↓
   Dispatch Action
      ↓
   Reducer
      ↓
   Store Update
      ↓
   UI Re-render

--------------------------------------------------------

10. Modern applications prefer
    Redux Toolkit (RTK).

========================================================
*/