/*
========================================================
        REACT ROUTER - createBrowserRouter (v6.4+)
========================================================

Author: Ashutosh
Topic: createBrowserRouter
Description:
This file demonstrates:

1. Modern routing setup
2. Route configuration using objects
3. Nested routes
4. Layout with Outlet
5. RouterProvider usage

========================================================
*/

import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";

/*
--------------------------------------------------------
1️⃣ Pages
--------------------------------------------------------
*/

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

/*
--------------------------------------------------------
2️⃣ Layout Component
--------------------------------------------------------
*/

function Layout() {
  return (
    <div>
      <h1>My App</h1>

      <nav style={{ marginBottom: "10px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Child routes render here */}
      <Outlet />
    </div>
  );
}

/*
--------------------------------------------------------
3️⃣ Router Configuration
--------------------------------------------------------
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

/*
--------------------------------------------------------
4️⃣ Main App
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

1. createBrowserRouter is a modern routing API (v6.4+).

2. Routes are defined as objects instead of JSX.

3. RouterProvider is required to enable routing.

4. Nested routes are defined using "children".

5. <Outlet /> is used to render child routes.

6. Do not mix BrowserRouter with createBrowserRouter.

========================================================
*/