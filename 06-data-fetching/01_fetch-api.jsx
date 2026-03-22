/*
========================================================
            REACT FETCH API (GET REQUEST)
========================================================

Author: Ashutosh Choubey
Topic: Fetch API
Description:
This file demonstrates:

1. Fetching data using fetch API
2. useEffect for API call
3. Loading state
4. Error handling
5. Rendering API data

========================================================
*/

import React, { useEffect, useState } from "react";

/*
--------------------------------------------------------
1️⃣ Fetch Component
--------------------------------------------------------
*/

function FetchPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  /*
  --------------------------------------------------------
  Rendering UI based on state
  --------------------------------------------------------
  */

  if (loading) return <h3>Loading...</h3>;

  if (error) return <h3>Error: {error}</h3>;

  return (
    <div>
      <h2>Posts</h2>

      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

/*
--------------------------------------------------------
2️⃣ Main App
--------------------------------------------------------
*/

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Fetch API Example</h1>
      <FetchPosts />
    </div>
  );
}

export default App;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. Fetch API is used to make HTTP requests.

2. useEffect is used to call API on component mount.

3. async/await is preferred over .then()

4. Always handle:
   - loading state
   - error state

5. Check response.ok before parsing JSON.

6. Dependency array [] prevents infinite calls.

========================================================
*/