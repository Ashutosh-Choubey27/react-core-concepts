/*
====================================================
        REACT CONDITIONAL RENDERING
====================================================

Author: Ashutosh Choubey
Topic: Conditional Rendering in React
Description:
This file demonstrates:

1. if-else rendering
2. Ternary operator
3. Logical && operator
4. Element variables
5. Switch case rendering
6. Returning null
7. Interview edge cases

====================================================
*/

import React, { useState } from "react";

/*
----------------------------------------------------
1️⃣ if-else Example
----------------------------------------------------
*/

function LoginStatus({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Welcome Back 🚀</h2>;
  } else {
    return <h2>Please Login 🔐</h2>;
  }
}

/*
----------------------------------------------------
2️⃣ Ternary Operator Example
----------------------------------------------------
*/

function UserRole({ role }) {
  return (
    <div>
      <h3>
        {role === "admin"
          ? "Admin Panel Access Granted"
          : "User Dashboard Access"}
      </h3>
    </div>
  );
}

/*
----------------------------------------------------
3️⃣ Logical && Operator
----------------------------------------------------
*/

function Notification({ count }) {
  return (
    <div>
      <h4>Notifications</h4>
      {count > 0 && <p>You have {count} new messages 📩</p>}
    </div>
  );
}

/*
----------------------------------------------------
4️⃣ Element Variable Example
----------------------------------------------------
*/

function Subscription({ isPremium }) {
  let content;

  if (isPremium) {
    content = <h3>Premium Content Unlocked 💎</h3>;
  } else {
    content = <h3>Upgrade to Premium</h3>;
  }

  return <div>{content}</div>;
}

/*
----------------------------------------------------
5️⃣ Switch Case Example
----------------------------------------------------
*/

function StatusMessage({ status }) {
  switch (status) {
    case "loading":
      return <p>Loading... ⏳</p>;
    case "success":
      return <p>Data Loaded Successfully ✅</p>;
    case "error":
      return <p>Error Fetching Data ❌</p>;
    default:
      return <p>Unknown Status</p>;
  }
}

/*
----------------------------------------------------
6️⃣ Returning Null Example
----------------------------------------------------
*/

function Banner({ isVisible }) {
  if (!isVisible) return null;

  return <h3>Special Offer Today 🎉</h3>;
}

/*
----------------------------------------------------
7️⃣ Main App Component
----------------------------------------------------
*/

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Conditional Rendering Demo</h1>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login
      </button>

      {/* if-else */}
      <LoginStatus isLoggedIn={isLoggedIn} />

      {/* ternary */}
      <UserRole role="admin" />

      {/* && operator */}
      <Notification count={3} />

      {/* element variable */}
      <Subscription isPremium={false} />

      {/* switch case */}
      <StatusMessage status="loading" />

      {/* return null */}
      <Banner isVisible={true} />
    </div>
  );
}

export default App;

/*
====================================================
            INTERVIEW NOTES
====================================================

1. JSX supports expressions, not statements.
2. Use ternary for simple conditions.
3. Use if-else for complex logic.
4. Avoid nested ternaries.
5. && renders right side only if left is truthy.
6. Returning null means render nothing.
7. Conditional rendering is heavily used in:
   - Authentication
   - Loading states
   - Error handling
   - Role-based UI

====================================================
*/
