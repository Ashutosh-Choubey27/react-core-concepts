
/*
========================================================
        REACT PROTECTED ROUTES
========================================================

Author: Ashutosh
Topic: Protected Routes
Description:
This file demonstrates:

1. Route protection
2. Authentication check
3. Redirecting unauthorized users
4. Using Outlet & Navigate
5. Interview notes

========================================================
*/

import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";

/*
--------------------------------------------------------
1️⃣ Dummy Auth State
--------------------------------------------------------
*/

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return {
    isAuthenticated,
    login: () => setIsAuthenticated(true),
    logout: () => setIsAuthenticated(false),
  };
}

/*
--------------------------------------------------------
2️⃣ Protected Route Component
--------------------------------------------------------
*/

function ProtectedRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

/*
--------------------------------------------------------
3️⃣ Pages
--------------------------------------------------------
*/

function Home() {
  return <h2>Home Page</h2>;
}

function Login({ login }) {
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}

function Dashboard({ logout }) {
  return (
    <div>
      <h2>Dashboard (Protected)</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

/*
--------------------------------------------------------
4️⃣ App Wrapper
--------------------------------------------------------
*/

function AppWrapper() {
  const auth = useAuth();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Protected Routes Example</h1>
          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/dashboard">Dashboard</Link>
          </nav>
          <Outlet />
        </div>
      ),
      children: [
        { path: "", element: <Home /> },

        {
          path: "login",
          element: <Login login={auth.login} />,
        },

        {
          path: "dashboard",
          element: (
            <ProtectedRoute isAuth={auth.isAuthenticated} />
          ),
          children: [
            {
              path: "",
              element: <Dashboard logout={auth.logout} />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppWrapper;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. Protected routes restrict access to authenticated users.

2. Navigate is used for redirection.

3. Outlet renders child routes.

4. Auth logic should come from context or global state.

5. Common use cases:
   - dashboards
   - profile pages
   - admin panels

========================================================
*/