# React Router - Introduction

## 1. What is Routing?

Routing means **navigating between different pages or views in an application**.

Example pages in a website:

* Home
* About
* Contact
* Products

In traditional websites, navigation loads a **new HTML page from the server**.

But in **React (Single Page Applications)**, routing happens **on the client side** without reloading the page.

---

# 2. Traditional Routing vs React Routing

### Traditional Website (Multi Page Application)

Flow:

User clicks link
↓
Browser requests new page
↓
Server sends new HTML file
↓
Page reload happens

Problems:

* Slow navigation
* Full page reload
* Poor user experience

---

### React Routing (Single Page Application)

Flow:

User clicks link
↓
React Router changes the URL
↓
React renders a different component
↓
No page reload

Benefits:

* Faster navigation
* Smooth user experience
* Only UI changes

---

# 3. What is React Router?

React Router is a **library used for routing in React applications**.

It allows us to create **multiple pages in a single page application (SPA)**.

Most used package:

```
react-router-dom
```

---

# 4. Installation

Install React Router in your project:

```
npm install react-router-dom
```

---

# 5. Core Components of React Router

React Router provides several important components.

### BrowserRouter

Wraps the entire application and enables routing.

Example:

```jsx
import { BrowserRouter } from "react-router-dom"

<BrowserRouter>
  <App />
</BrowserRouter>
```

---

### Routes

Container for route definitions.

```
<Routes>
</Routes>
```

---

### Route

Defines which component should render for a path.

Example:

```jsx
<Route path="/" element={<Home />} />
```

---

### Link

Used to navigate between pages without page reload.

Example:

```jsx
<Link to="/about">About</Link>
```

---

# 6. Basic Routing Example

Example structure:

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  );
}
```

Now navigation happens **without page refresh**.

---

# 7. Important Concepts

### Client Side Routing

Routing handled by **JavaScript instead of server**.

---

### Single Page Application (SPA)

Application loads **one HTML page** and dynamically updates UI.

---

### URL Mapping

Routes map URLs to components.

Example:

```
/          → Home
/about     → About
/contact   → Contact
```

---

# 8. Interview Traps

### Trap 1

Using `<a>` instead of `<Link>`

Wrong:

```
<a href="/about">About</a>
```

This causes **page reload**.

Correct:

```
<Link to="/about">About</Link>
```

---

### Trap 2

Forgetting BrowserRouter wrapper.

Routing will not work.

---

### Trap 3

Using old React Router syntax.

Old version:

```
<Route component={Home} />
```

New version (v6):

```
<Route element={<Home />} />
```

---

# 9. Why React Router is Important?

React Router helps us:

* Build **multi-page experiences in SPA**
* Improve **performance**
* Create **dynamic routes**
* Manage navigation easily

---

# 10. Interview Questions

### Q1: What is React Router?

React Router is a library used for **client-side routing in React applications**.

---

### Q2: What is the difference between `<Link>` and `<a>`?

`<Link>` → No page reload
`<a>` → Causes full page reload

---

### Q3: What is BrowserRouter?

A router component that enables **HTML5 history API based routing**.

---

### Q4: What is the purpose of Routes?

`Routes` acts as a container for multiple `Route` components.

---

### Q5: What is a Single Page Application (SPA)?

An application that loads **a single HTML page** and dynamically updates UI without full reload.

---

# Summary

React Router allows React applications to:

* Navigate between pages
* Map URLs to components
* Build fast single page applications
* Avoid full page reloads
