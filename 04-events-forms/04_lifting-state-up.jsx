/*
========================================================
                LIFTING STATE UP IN REACT
========================================================

Author: Ashutosh
Topic: Lifting State Up
Description:
This file demonstrates:

1. Sharing state between components
2. Moving state to parent component
3. Passing state via props
4. Updating parent state from child
5. Interview notes

========================================================
*/

import React, { useState } from "react";

/*
--------------------------------------------------------
1️⃣ Input Component
--------------------------------------------------------
Receives state and setter from parent
*/

function TemperatureInput({ temperature, setTemperature }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Enter Temperature</h3>

      <input
        type="number"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        placeholder="Enter temperature"
      />
    </div>
  );
}

/*
--------------------------------------------------------
2️⃣ Display Component
--------------------------------------------------------
Displays temperature
*/

function TemperatureDisplay({ temperature }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Temperature Display</h3>

      <p>Current Temperature: {temperature}</p>
    </div>
  );
}

/*
--------------------------------------------------------
3️⃣ Parent Component
--------------------------------------------------------
State is lifted here
*/

function TemperatureApp() {
  const [temperature, setTemperature] = useState("");

  return (
    <div style={{ border: "1px solid gray", padding: "20px" }}>
      <h2>Lifting State Up Example</h2>

      <TemperatureInput
        temperature={temperature}
        setTemperature={setTemperature}
      />

      <TemperatureDisplay
        temperature={temperature}
      />
    </div>
  );
}

/*
--------------------------------------------------------
4️⃣ Main App
--------------------------------------------------------
*/

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <TemperatureApp />
    </div>
  );
}

export default App;

/*
========================================================
                INTERVIEW NOTES
========================================================

1. Lifting State Up means moving shared state to a common parent.

2. Parent becomes the single source of truth.

3. Parent passes data to children via props.

4. Child components can update parent state using callback props.

5. This helps synchronize multiple components.

Example Flow:

Parent State
   ↓
Props
   ↓
Child Components

========================================================
*/