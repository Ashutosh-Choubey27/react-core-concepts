/*
========================================================
        REACT ROUTER - Link vs NavLink
========================================================

Author: Ashutosh
Topic: Link vs NavLink
Description:
This file demonstrates:

1. Navigation using Link
2. Navigation using NavLink
3. Active link styling
4. Dynamic class and style
5. Interview notes

========================================================
*/

import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  NavLink,
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

      <nav style={{ marginBottom: "20px" }}>
        {/* Link Example */}
        <Link to="/" style={{ marginRight: "10px" }}>
          Home (Link)
        </Link>

        {/* NavLink Example */}
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            marginRight: "10px",
            color: isActive ? "red" : "black",
          })}
        >
          About (NavLink)
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Contact (NavLink)
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

/*
--------------------------------------------------------
3️⃣ Router Setup
--------------------------------------------------------
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
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

1. Link is used for navigation without page reload.

2. NavLink is used for navigation + active styling.

3. NavLink provides "isActive" property.

4. Use NavLink for navigation menus (navbar).

5. Use Link for simple navigation.

========================================================
*/