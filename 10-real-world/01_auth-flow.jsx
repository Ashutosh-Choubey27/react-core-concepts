// 01_auth-flow.jsx

/*
========================================================
                AUTHENTICATION FLOW
========================================================

Author: Ashutosh
Topic: Authentication Flow
Description:
This file demonstrates:

1. Login flow
2. JWT token storage
3. Protected routes
4. Authentication state
5. Logout functionality
6. Conditional rendering

========================================================
*/

import React, {
  useState,
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

/*
--------------------------------------------------------
1️⃣ Fake Backend Login
--------------------------------------------------------

Normally backend:
- verifies credentials
- generates JWT token

*/

function fakeLogin(email, password) {

  if (
    email === "admin@gmail.com" &&
    password === "123456"
  ) {
    return {
      token: "fake-jwt-token",
      user: {
        name: "Ashutosh",
        role: "admin",
      },
    };
  }

  return null;
}

/*
--------------------------------------------------------
2️⃣ Login Component
--------------------------------------------------------
*/

function Login({
  setAuth,
}) {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  function handleLogin() {

    const response = fakeLogin(
      email,
      password
    );

    if (response) {

      /*
      Store token
      */

      localStorage.setItem(
        "token",
        response.token
      );

      /*
      Update auth state
      */

      setAuth({
        isLoggedIn: true,
        user: response.user,
      });

      alert("Login Successful!");

    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <div>
      <h1>🔐 Login Page</h1>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br />
      <br />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

/*
--------------------------------------------------------
3️⃣ Dashboard Component
--------------------------------------------------------
*/

function Dashboard({
  auth,
  setAuth,
}) {

  function handleLogout() {

    /*
    Remove token
    */

    localStorage.removeItem(
      "token"
    );

    /*
    Clear auth state
    */

    setAuth({
      isLoggedIn: false,
      user: null,
    });
  }

  return (
    <div>
      <h1>
        📊 Dashboard
      </h1>

      <h2>
        Welcome,
        {" "}
        {auth.user.name}
      </h2>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

/*
--------------------------------------------------------
4️⃣ Protected Route
--------------------------------------------------------
*/

function ProtectedRoute({
  auth,
  children,
}) {

  /*
  If NOT logged in
  redirect to login
  */

  if (!auth.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

/*
--------------------------------------------------------
5️⃣ Main App
--------------------------------------------------------
*/

function App() {

  /*
  Authentication State
  */

  const [auth, setAuth] =
    useState({
      isLoggedIn: false,
      user: null,
    });

  return (
    <BrowserRouter>

      <nav>
        <Link to="/">
          Home
        </Link>

        {" | "}

        <Link to="/login">
          Login
        </Link>

        {" | "}

        <Link to="/dashboard">
          Dashboard
        </Link>
      </nav>

      <hr />

      <Routes>

        {/* Home */}

        <Route
          path="/"
          element={
            <h1>
              🏠 Home Page
            </h1>
          }
        />

        {/* Login */}

        <Route
          path="/login"
          element={
            <Login setAuth={setAuth} />
          }
        />

        {/* Protected Dashboard */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute auth={auth}>
              <Dashboard
                auth={auth}
                setAuth={setAuth}
              />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. Authentication verifies
   user identity.

--------------------------------------------------------

2. JWT is commonly used for
   token-based authentication.

--------------------------------------------------------

3. Protected routes prevent
   unauthorized access.

--------------------------------------------------------

4. localStorage is commonly
   used for token storage.

--------------------------------------------------------

5. Authentication flow:

   Login
      ↓
   Backend Verification
      ↓
   JWT Token
      ↓
   Store Token
      ↓
   Access Protected Routes

--------------------------------------------------------

6. Logout removes token and
   clears auth state.

--------------------------------------------------------

7. Frontend authentication
   alone is NOT secure.

Backend validation is required.

--------------------------------------------------------

8. Common auth features:
   - Login
   - Signup
   - Logout
   - Protected Routes
   - Role-based Access

--------------------------------------------------------

9. Modern apps commonly use:
   - Context API
   - Redux Toolkit
   - Axios Interceptors
   - Refresh Tokens

--------------------------------------------------------

10. HTTP-only cookies are
    more secure than storing
    JWT in localStorage.

========================================================
*/