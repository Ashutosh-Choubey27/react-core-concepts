/*
========================================================
            ROLE-BASED ROUTING (REACT)
========================================================

Author: Ashutosh
Topic: Role-Based Routing
Description:
This file demonstrates:

1. Protected Routes
2. Role-based access control
3. Conditional rendering of routes
4. React Router usage
5. Unauthorized access handling

========================================================
*/

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

/*
--------------------------------------------------------
1️⃣ Fake Auth System (For Demo)
--------------------------------------------------------
*/

const fakeAuth = {
  isAuthenticated: true,
  user: {
    name: "Ashutosh",
    role: "admin", // change to "user" to test
  },
};

/*
--------------------------------------------------------
2️⃣ Pages
--------------------------------------------------------
*/

function Home() {
  return <h1>🏠 Home Page</h1>;
}

function Dashboard() {
  return <h1>📊 Admin Dashboard</h1>;
}

function Profile() {
  return <h1>👤 User Profile</h1>;
}

function Unauthorized() {
  return <h1>❌ Unauthorized Access</h1>;
}

/*
--------------------------------------------------------
3️⃣ Protected Route Component
--------------------------------------------------------
*/

function ProtectedRoute({ children, allowedRoles }) {
  if (!fakeAuth.isAuthenticated) {
    return <Navigate to="/" />;
  }

  const userRole = fakeAuth.user.role;

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
}

/*
--------------------------------------------------------
4️⃣ App Routing
--------------------------------------------------------
*/

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Route */}
        <Route path="/" element={<Home />} />

        {/* User Route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute allowedRoles={["user", "admin"]}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Admin Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Unauthorized */}
        <Route path="/unauthorized" element={<Unauthorized />} />

      </Routes>
    </Router>
  );
}

export default App;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. Role-based routing restricts access based on user roles.

2. Implemented using a wrapper component (ProtectedRoute).

3. React Router's <Navigate /> is used for redirection.

4. Always check:
   - Authentication
   - Authorization (role)

5. allowedRoles defines who can access the route.

6. Common roles:
   - admin
   - user
   - guest

7. Real apps use:
   - JWT tokens
   - Context API / Redux for auth state

8. Never trust frontend only → backend validation is MUST.

========================================================
*/