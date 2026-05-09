/*
========================================================
            REACT.SUSPENSE + REACT.LAZY
========================================================

Author: Ashutosh
Topic: Suspense & Lazy Loading
Description:
This file demonstrates:

1. React.lazy()
2. Suspense
3. Code Splitting
4. Dynamic Imports
5. Fallback UI
6. Performance Optimization

========================================================
*/

import React, {
  Suspense,
} from "react";

/*
--------------------------------------------------------
1️⃣ Lazy Loaded Component
--------------------------------------------------------

React.lazy() loads component
ONLY when required.

Dynamic import is used here.

*/

const Dashboard = React.lazy(() =>
  import("./Dashboard")
);

/*
--------------------------------------------------------
2️⃣ Main App Component
--------------------------------------------------------
*/

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>
        React Suspense + Lazy Example
      </h1>

      {/*
      Suspense shows fallback UI
      until lazy component loads
      */}

      <Suspense
        fallback={
          <h2>
            ⏳ Loading Dashboard...
          </h2>
        }
      >
        <Dashboard />
      </Suspense>
    </div>
  );
}

export default App;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. React.lazy() enables
   code splitting.

--------------------------------------------------------

2. Lazy loading improves
   application performance.

--------------------------------------------------------

3. Suspense provides
   fallback UI while loading.

--------------------------------------------------------

4. Dynamic import syntax:

   import("./Component")

--------------------------------------------------------

5. Benefits:
   - Smaller bundle size
   - Faster loading
   - Better user experience

--------------------------------------------------------

6. React.lazy() works only
   with default exports.

--------------------------------------------------------

7. Suspense does NOT handle
   errors.

Use Error Boundaries for that.

--------------------------------------------------------

8. Common use cases:
   - Admin dashboards
   - Analytics pages
   - Large applications
   - Route-based splitting

--------------------------------------------------------

9. Common Interview Question:

Q) Why use lazy loading?

Answer:
Lazy loading reduces initial
bundle size and loads components
only when needed, improving
performance and user experience.

========================================================
*/