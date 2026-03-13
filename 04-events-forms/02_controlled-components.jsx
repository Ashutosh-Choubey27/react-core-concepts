/*
========================================================
            REACT CONTROLLED COMPONENTS
========================================================

Author: Ashutosh
Topic: Controlled Components
Description:
This file demonstrates:

1. Controlled input field
2. Handling multiple form inputs
3. Checkbox handling
4. Select dropdown
5. Form submission
6. Interview notes

========================================================
*/

import React, { useState } from "react";

/*
--------------------------------------------------------
1️⃣ Simple Controlled Input
--------------------------------------------------------
*/

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Controlled Input</h3>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Your name: {name}</p>
    </div>
  );
}

/*
--------------------------------------------------------
2️⃣ Multiple Input Form
--------------------------------------------------------
*/

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Form Data:", formData);
  }

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>User Form</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

/*
--------------------------------------------------------
3️⃣ Checkbox Example
--------------------------------------------------------
*/

function CheckboxExample() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Checkbox Example</h3>

      <label>
        <input
          type="checkbox"
          checked={isSubscribed}
          onChange={(e) => setIsSubscribed(e.target.checked)}
        />
        Subscribe to newsletter
      </label>

      <p>Status: {isSubscribed ? "Subscribed" : "Not Subscribed"}</p>
    </div>
  );
}

/*
--------------------------------------------------------
4️⃣ Select Dropdown
--------------------------------------------------------
*/

function SelectExample() {
  const [city, setCity] = useState("Delhi");

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Select City</h3>

      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bangalore">Bangalore</option>
      </select>

      <p>Selected city: {city}</p>
    </div>
  );
}

/*
--------------------------------------------------------
5️⃣ Main App
--------------------------------------------------------
*/

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Controlled Components</h1>

      <NameInput />
      <UserForm />
      <CheckboxExample />
      <SelectExample />
    </div>
  );
}

export default App;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. Controlled components are inputs controlled by React state.

2. React state becomes the single source of truth.

3. Every input must have:
   - value
   - onChange

4. Multiple inputs handled using "name" attribute.

Example:

const {name,value} = e.target

5. Checkbox uses "checked" instead of "value".

6. Controlled components are preferred in React forms.

========================================================
*/