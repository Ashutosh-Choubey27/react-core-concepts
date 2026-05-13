
/*
========================================================
            REDUX TOOLKIT (RTK)
========================================================

Author: Ashutosh
Topic: Redux Toolkit
Description:
This file demonstrates:

1. configureStore()
2. createSlice()
3. Redux Toolkit flow
4. useSelector()
5. useDispatch()
6. Simplified Redux setup

========================================================
*/

import React from "react";

import {
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";

import {
  Provider,
  useSelector,
  useDispatch,
} from "react-redux";

/*
--------------------------------------------------------
1️⃣ Slice Creation
--------------------------------------------------------

createSlice() automatically creates:
- reducer
- actions

*/

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    count: 0,
  },

  reducers: {

    increment: (state) => {
      /*
      Looks like mutation,
      but Immer handles immutable update
      internally.
      */

      state.count++;
    },

    decrement: (state) => {
      state.count--;
    },

    incrementByAmount: (
      state,
      action
    ) => {
      state.count += action.payload;
    },
  },
});

/*
--------------------------------------------------------
2️⃣ Export Actions
--------------------------------------------------------
*/

const {
  increment,
  decrement,
  incrementByAmount,
} = counterSlice.actions;

/*
--------------------------------------------------------
3️⃣ Store Configuration
--------------------------------------------------------
*/

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

/*
--------------------------------------------------------
4️⃣ Counter Component
--------------------------------------------------------
*/

function Counter() {

  /*
  Access Redux state
  */

  const count = useSelector(
    (state) => state.counter.count
  );

  /*
  Dispatch actions
  */

  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h1>
        Redux Toolkit Example
      </h1>

      <h2>
        Count: {count}
      </h2>

      {/* Increment */}

      <button
        onClick={() =>
          dispatch(increment())
        }
      >
        Increment
      </button>

      {/* Decrement */}

      <button
        onClick={() =>
          dispatch(decrement())
        }
        style={{
          marginLeft: "10px",
        }}
      >
        Decrement
      </button>

      {/* Payload Example */}

      <button
        onClick={() =>
          dispatch(
            incrementByAmount(5)
          )
        }
        style={{
          marginLeft: "10px",
        }}
      >
        +5
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
    Provider gives store access
    to entire application
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

1. Redux Toolkit (RTK) is the
   official modern Redux approach.

--------------------------------------------------------

2. RTK reduces Redux boilerplate.

--------------------------------------------------------

3. configureStore():
   Creates Redux store.

--------------------------------------------------------

4. createSlice():
   Automatically creates:
   - reducers
   - actions

--------------------------------------------------------

5. RTK uses Immer internally.

--------------------------------------------------------

6. State appears mutable:

   state.count++

But actual update remains immutable.

--------------------------------------------------------

7. useSelector():
   Reads Redux state.

--------------------------------------------------------

8. useDispatch():
   Dispatches actions.

--------------------------------------------------------

9. Benefits of RTK:
   - Cleaner code
   - Easier debugging
   - Better scalability
   - Faster development

--------------------------------------------------------

10. Redux Toolkit is preferred
    over classic Redux in
    modern applications.

========================================================
*/