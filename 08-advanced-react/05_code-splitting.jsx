/*
========================================================
                CODE SPLITTING
========================================================

Author: Ashutosh
Topic: Code Splitting
Description:
This file demonstrates:

1. Code Splitting
2. Dynamic Imports
3. React.lazy()
4. Suspense
5. Route-based splitting
6. Performance optimization

========================================================
*/

import React, {
  Suspense,
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

/*
--------------------------------------------------------
1️⃣ Lazy Loaded Components
--------------------------------------------------------

These components are loaded
ONLY when required.

Webpack/Vite creates separate
chunks automatically.

*/

const Home = React.lazy(() =>
  import("./Home")
);

const Dashboard = React.lazy(() =>
  import("./Dashboard")
);

const Admin = React.lazy(() =>
  import("./Admin")
);

/*
--------------------------------------------------------
2️⃣ Main App
--------------------------------------------------------
*/

function App() {
  return (
    <BrowserRouter>

      <div style={{ padding: "20px" }}>
        <h1>
          Code Splitting Example
        </h1>

        {/* Navigation */}

        <nav>
          <Link to="/">
            Home
          </Link>

          <br />

          <Link to="/dashboard">
            Dashboard
          </Link>

          <br />

          <Link to="/admin">
            Admin
          </Link>
        </nav>

        <hr />

        {/*
        Suspense handles loading UI
        */}

        <Suspense
          fallback={
            <h2>
              ⏳ Loading Component...
            </h2>
          }
        >

          <Routes>

            {/* Home Route */}
            <Route
              path="/"
              element={<Home />}
            />

            {/* Dashboard Route */}
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            {/* Admin Route */}
            <Route
              path="/admin"
              element={<Admin />}
            />

          </Routes>

        </Suspense>
      </div>

    </BrowserRouter>
  );
}

export default App;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. Code Splitting divides large
   bundles into smaller chunks.

--------------------------------------------------------

2. Improves initial loading
   performance.

--------------------------------------------------------

3. React.lazy() is used for
   lazy loading components.

--------------------------------------------------------

4. Suspense provides fallback UI
   while chunk loads.

--------------------------------------------------------

5. Dynamic Import syntax:

   import("./Component")

--------------------------------------------------------

6. Common types:
   - Route-based splitting
   - Component-based splitting

--------------------------------------------------------

7. Webpack/Vite automatically
   generate separate chunks.

--------------------------------------------------------

8. Benefits:
   - Faster app loading
   - Better performance
   - Reduced bundle size
   - Improved UX

--------------------------------------------------------

9. Common Interview Question:

Q) What is the difference between
code splitting and lazy loading?

Answer:
Code splitting is the strategy
of dividing bundles into chunks,
while lazy loading loads those
chunks only when needed.

--------------------------------------------------------

10. Real-world use cases:
   - Dashboards
   - Admin Panels
   - Large-scale apps
   - Analytics systems

========================================================
*/