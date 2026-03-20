/*
========================================================
        REACT ROUTER - useParams HOOK
========================================================

Author: Ashutosh
Topic: useParams
Description:
This file demonstrates:

1. Accessing route parameters
2. Dynamic routing with params
3. Multiple params usage
4. Rendering dynamic content
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

const posts = [
  { id: 1, title: "React Basics" },
  { id: 2, title: "useState Hook" },
  { id: 3, title: "useEffect Hook" },
];

/*
--------------------------------------------------------
2️⃣ Posts List
--------------------------------------------------------
*/

function Posts() {
  return (
    <div>
      <h2>Posts</h2>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/*
--------------------------------------------------------
3️⃣ Post Detail
--------------------------------------------------------
*/

function PostDetail() {
  const { id } = useParams();

  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <h3>Post not found</h3>;

  return (
    <div>
      <h2>Post Detail</h2>
      <p>ID: {post.id}</p>
      <p>Title: {post.title}</p>
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
      <h1>useParams Example</h1>

      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Outlet />
    </div>
  );
}

/*
--------------------------------------------------------
5️⃣ Home
--------------------------------------------------------
*/

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/posts">Go to Posts</Link>
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
      { path: "posts", element: <Posts /> },
      { path: "post/:id", element: <PostDetail /> },
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

1. useParams is used to access dynamic route parameters.

2. It returns an object of key-value pairs.

Example:
const { id } = useParams()

3. Params are always strings.

4. Use Number() if numeric comparison needed.

5. Must be used inside Router.

========================================================
*/