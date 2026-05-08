/*
========================================================
                ERROR BOUNDARIES
========================================================

Author: Ashutosh
Topic: Error Boundaries
Description:
This file demonstrates:

1. What Error Boundaries are
2. Catching React component errors
3. Preventing app crash
4. Fallback UI
5. componentDidCatch()
6. getDerivedStateFromError()

========================================================
*/

import React from "react";

/*
--------------------------------------------------------
1️⃣ Component That Crashes
--------------------------------------------------------

This component intentionally throws
an error for demonstration.

*/

function BuggyComponent() {
  throw new Error(
    "Component Crashed!"
  );

  return <h1>Buggy Component</h1>;
}

/*
--------------------------------------------------------
2️⃣ Error Boundary Class Component
--------------------------------------------------------

Important:
Error Boundaries MUST be
class components.

They catch errors in:
- Child components
- Lifecycle methods
- Render phase

*/

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    /*
    State to track errors
    */

    this.state = {
      hasError: false,
    };
  }

  /*
  ------------------------------------------------------
  getDerivedStateFromError()

  Runs when child throws error.
  Updates UI state.
  ------------------------------------------------------
  */

  static getDerivedStateFromError(
    error
  ) {
    return {
      hasError: true,
    };
  }

  /*
  ------------------------------------------------------
  componentDidCatch()

  Used for:
  - Logging
  - Error reporting
  - Monitoring services

  Example:
  - Sentry
  - LogRocket
  - Datadog
  ------------------------------------------------------
  */

  componentDidCatch(
    error,
    errorInfo
  ) {
    console.log(
      "Error Caught:",
      error
    );

    console.log(
      "Error Info:",
      errorInfo
    );
  }

  /*
  ------------------------------------------------------
  Render fallback UI
  ------------------------------------------------------
  */

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: "20px",
            border: "2px solid red",
          }}
        >
          <h1>
            ❌ Something went wrong
          </h1>

          <p>
            Error Boundary prevented
            app crash.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

/*
--------------------------------------------------------
3️⃣ Main App
--------------------------------------------------------
*/

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>
        Error Boundaries Example
      </h1>

      {/* 
      Error Boundary wraps
      problematic components
      */}

      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. Error Boundaries catch runtime
   errors in React component tree.

--------------------------------------------------------

2. They prevent the entire app
   from crashing.

--------------------------------------------------------

3. Error Boundaries ONLY work in:
   - Child Components
   - Lifecycle Methods
   - Render Phase

--------------------------------------------------------

4. They DO NOT catch errors in:
   - Event handlers
   - setTimeout()
   - Async code
   - Server-side rendering

--------------------------------------------------------

5. Error Boundaries MUST be
   class components.

--------------------------------------------------------

6. Main lifecycle methods:

a) getDerivedStateFromError()
   -> Updates fallback UI

b) componentDidCatch()
   -> Logs errors

--------------------------------------------------------

7. Real-world usage:
   - Fallback UI
   - Error tracking
   - Monitoring systems

--------------------------------------------------------

8. Common Interview Question:

Q) Why use Error Boundaries?

Answer:
They improve application stability
by catching component crashes and
showing fallback UI instead of
breaking the whole app.

========================================================
*/