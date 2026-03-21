/*
========================================================
        REACT ROUTER - useNavigate HOOK
========================================================

Author: Ashutosh Choubey
Topic: useNavigate
Description:
This file demonstrates:

1. Programmatic navigation
2. Redirect after login
3. Back/forward navigation
4. Replace navigation
5. Interview notes

========================================================
*/

import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";

/*
--------------------------------------------------------
1️⃣ Home Page
--------------------------------------------------------
*/

function Home() {
  const navigate = useNavigate();

  function handleLogin() {
    // Simulate login success
    alert("Login Successful!");

    // Redirect to dashboard
    navigate("/dashboard");
  }

  return (
    <div>
      <h2>Home Page</h2>

      <button onClick={handleLogin}>
        Login
      </button>

      <br /><br />

      <Link to="/about">Go to About</Link>
    </div>
  );
}

/*
--------------------------------------------------------
2️⃣ Dashboard Page
--------------------------------------------------------
*/

function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    alert("Logged out!");

    // Replace history
    navigate("/", { replace: true });
  }

  function goBack() {
    navigate(-1);
  }

  return (
    <div>
      <h2>Dashboard</h2>

      <button onClick={handleLogout}>
        Logout
      </button>

      <br /><br />

      <button onClick={goBack}>
        Go Back
      </button>
    </div>
  );
}

/*
--------------------------------------------------------
3️⃣ About Page
--------------------------------------------------------
*/

function About() {
  return <h2>About Page</h2>;
}

/*
--------------------------------------------------------
4️⃣ Layout
--------------------------------------------------------
*/

function Layout() {
  return (
    <div>
      <h1>useNavigate Example</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Outlet />
    </div>
  );
}

/*
--------------------------------------------------------
5️⃣ Router Setup
--------------------------------------------------------
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "about", element: <About /> },
    ],
  },
]);

/*
--------------------------------------------------------
6️⃣ Main App
--------------------------------------------------------
*/

function App() {
  return <RouterProvider router={router} />;
}

export default App;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. useNavigate is used for programmatic navigation.

2. Syntax:
   const navigate = useNavigate()

3. Navigate to route:
   navigate("/path")

4. Back navigation:
   navigate(-1)

5. Replace history:
   navigate("/path", { replace: true })

6. Common use cases:
   - login redirect
   - logout redirect
   - form submission redirect

========================================================
*/