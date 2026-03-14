/*
========================================================
                REACT FORM HANDLING
========================================================

Author: Ashutosh
Topic: Form Handling
Description:
This file demonstrates:

1. React form handling
2. Multiple input fields
3. Universal change handler
4. Form validation
5. Form submission
6. Resetting form

========================================================
*/

import React, { useState } from "react";

/*
--------------------------------------------------------
1️⃣ Initial Form State
--------------------------------------------------------
*/

const initialState = {
  name: "",
  email: "",
  password: "",
  city: "",
  subscribe: false
};

/*
--------------------------------------------------------
2️⃣ Form Component
--------------------------------------------------------
*/

function UserForm() {
  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState("");

  /*
  Universal change handler
  */

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  }

  /*
  Form Submit
  */

  function handleSubmit(e) {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email) {
      setMessage("Name and Email are required");
      return;
    }

    if (!formData.email.includes("@")) {
      setMessage("Invalid email address");
      return;
    }

    console.log("Form Submitted:", formData);

    setMessage("Form submitted successfully!");

    // Reset form
    setFormData(initialState);
  }

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit}>

        {/* Name */}

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        {/* Email */}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        {/* Password */}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <br /><br />

        {/* Select */}

        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
        >
          <option value="">Select City</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
        </select>

        <br /><br />

        {/* Checkbox */}

        <label>
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />
          Subscribe to newsletter
        </label>

        <br /><br />

        <button type="submit">Submit</button>

      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

/*
--------------------------------------------------------
3️⃣ Main App
--------------------------------------------------------
*/

function App() {
  return (
    <div>
      <UserForm />
    </div>
  );
}

export default App;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. React forms are usually controlled components.

2. Form state is stored in React state.

3. Universal change handler pattern:

const {name,value} = e.target
setFormData({...formData,[name]:value})

4. Always use preventDefault() on form submit.

5. For checkbox use:

e.target.checked

6. Reset form using initial state.

========================================================
*/