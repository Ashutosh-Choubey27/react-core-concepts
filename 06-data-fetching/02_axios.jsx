/*
========================================================
                REACT AXIOS API
========================================================

Author: Ashutosh Choubey
Topic: Axios API
Description:
This file demonstrates:

1. GET request using axios
2. POST request
3. Loading and error handling
4. Rendering API data
5. Interview notes

========================================================
*/

import React, { useEffect, useState } from "react";
import axios from "axios";

/*
--------------------------------------------------------
1️⃣ Axios Component
--------------------------------------------------------
*/

function AxiosExample() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /*
  Fetch Data
  */

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setPosts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  /*
  POST Request Example
  */

  async function createPost() {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: "New Post",
          body: "Created using Axios",
        }
      );

      console.log("Created:", response.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  /*
  UI Rendering
  */

  if (loading) return <h3>Loading...</h3>;

  if (error) return <h3>Error: {error}</h3>;

  return (
    <div>
      <h2>Axios Posts</h2>

      <button onClick={createPost}>
        Create Post
      </button>

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
      <h1>Axios Example</h1>
      <AxiosExample />
    </div>
  );
}

export default App;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. Axios is a promise-based HTTP client.

2. Axios automatically parses JSON response.

3. Use response.data to access actual data.

4. Supports GET, POST, PUT, DELETE requests.

5. Better error handling than fetch.

6. Common use cases:
   - API integration
   - form submission
   - authentication

========================================================
*/