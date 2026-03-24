/*
========================================================
        REACT LOADING & ERROR STATE HANDLING
========================================================

Author: Ashutosh Choubey
Topic: Loading & Error State
Description:
This file demonstrates:

1. Loading state handling
2. Error handling
3. API data fetching
4. Conditional rendering
5. Retry functionality

========================================================
*/

import React, { useEffect, useState } from "react";
import axios from "axios";

/*
--------------------------------------------------------
1️⃣ Component
--------------------------------------------------------
*/

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /*
  Fetch Function
  */

  async function fetchData() {
    try {
      setLoading(true);
      setError(null); // Reset error on retry

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  /*
  useEffect
  */

  useEffect(() => {
    fetchData();
  }, []);

  /*
  UI States
  */

  if (loading) return <h3>Loading data...</h3>;

  if (error)
    return (
      <div>
        <h3>Error: {error}</h3>
        <button onClick={fetchData}>Retry</button>
      </div>
    );

  return (
    <div>
      <h2>Posts</h2>

      <button onClick={fetchData}>
        Refresh Data
      </button>

      <ul>
        {data.slice(0, 10).map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>
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
      <h1>Loading & Error State Example</h1>
      <DataFetcher />
    </div>
  );
}

export default App;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. Always handle 3 states:
   - Loading
   - Success
   - Error

2. Use try-catch-finally for API calls.

3. Set loading true before request.

4. Use finally to set loading false.

5. Reset error before retry.

6. Provide retry mechanism for better UX.

========================================================
*/