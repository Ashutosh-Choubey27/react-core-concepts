/*
========================================================
        REACT ROUTER - DYNAMIC ROUTING
========================================================

Author: Ashutosh
Topic: Dynamic Routing
Description:
This file demonstrates:

1. Dynamic routes using params
2. useParams hook
3. Linking dynamic routes
4. Rendering dynamic data
5. Interview notes

========================================================
*/

import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";

/*
--------------------------------------------------------
1️⃣ Dummy Data
--------------------------------------------------------
*/

const users = [
  { id: 1, name: "Ashutosh" },
  { id: 2, name: "Anik" },
  { id: 3, name: "Rahul" },
];

/*
--------------------------------------------------------
2️⃣ User List Page
--------------------------------------------------------
*/

function Users() {
  return (
    <div>
      <h2>Users List</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/*
--------------------------------------------------------
3️⃣ User Detail Page
--------------------------------------------------------
*/

function UserDetail() {
  const { id } = useParams();

  const user = users.find((u) => u.id === Number(id));

  if (!user) return <h3>User not found</h3>;

  return (
    <div>
      <h2>User Details</h2>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
    </div>
  );
}

/*
--------------------------------------------------------
4️⃣ Layout
--------------------------------------------------------
*/

function Layout() {
  return (
    <div>
      <h1>Dynamic Routing Example</h1>

      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Outlet />
    </div>
  );
}

/*
--------------------------------------------------------
5️⃣ Home Page
--------------------------------------------------------
*/

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/users">Go to Users</Link>
    </div>
  );
}

/*
--------------------------------------------------------
6️⃣ Router Setup
--------------------------------------------------------
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "users", element: <Users /> },
      { path: "user/:id", element: <UserDetail /> },
    ],
  },
]);

/*
--------------------------------------------------------
7️⃣ Main App
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

1. Dynamic routes use ":" to define parameters.

   Example:
   /user/:id

2. useParams() is used to access route parameters.

3. Params are always strings.

4. Dynamic routing is used for:
   - user profiles
   - product pages
   - blog posts

5. Links to dynamic routes use template literals.

========================================================
*/