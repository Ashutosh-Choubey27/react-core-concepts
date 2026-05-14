# Global State Patterns in React

---

# What is Global State?

Global state is shared application state that multiple components need to access or modify.

Examples:
- Authentication user
- Theme
- Shopping cart
- Notifications
- Language settings

---

# Why Global State Management?

Without global state:
- Props drilling increases
- Components become tightly coupled
- State management becomes difficult

---

# 1. Props Drilling

Passing props through multiple nested components.

## Example

```text
App
 └── Parent
      └── Child
           └── GrandChild
```

## Problem
Intermediate components may not need the data.

---

# 2. Context API

Built-in React global state solution.

## Best For
- Theme
- Authentication
- Language settings

## Pros
- Built into React
- Simple setup
- Lightweight

## Cons
- Frequent re-renders
- Not ideal for very large apps

---

# 3. Redux / Redux Toolkit

Centralized predictable state management.

## Best For
- Large applications
- Complex shared state
- Enterprise apps

## Features
- Single source of truth
- Middleware support
- Redux DevTools
- Predictable updates

---

# 4. Zustand

Lightweight modern state management library.

## Pros
- Minimal boilerplate
- Easy syntax
- Fast performance

## Use Case
Small-medium scalable apps.

---

# 5. Server State vs Client State

## Client State
UI-related application state.

Examples:
- Modal visibility
- Sidebar toggle
- Theme

## Server State
Data fetched from backend APIs.

Examples:
- Users
- Products
- Posts

## Tools
- React Query
- RTK Query
- SWR

---

# What Should Stay Local?

Examples:
- Input field state
- Hover state
- Modal open/close
- Temporary UI state

---

# What Should Be Global?

Examples:
- Auth user
- Shopping cart
- Theme
- Notifications
- Application settings

---

# State Management Decision Guide

```text
Single Component?
    ↓
useState

Small Shared State?
    ↓
Context API

Large Complex App?
    ↓
Redux Toolkit

Server/API State?
    ↓
React Query / RTK Query
```

---

# Context API vs Redux

| Context API | Redux |
|-------------|--------|
| Simple setup | Scalable |
| Lightweight | Powerful tooling |
| Small-medium apps | Large applications |
| Limited optimization | Better optimization |

---

# Common Interview Questions

## Q1. What is props drilling?

Passing props through unnecessary component layers.

---

## Q2. What is global state?

State shared across multiple components.

---

## Q3. Why use Redux?

For predictable and scalable global state management.

---

## Q4. Difference between client state and server state?

- Client state belongs to UI
- Server state comes from backend APIs

---

## Q5. When should Context API be avoided?

In very large apps with frequent state updates.

---

# Important Notes

1. Not all state should be global.

2. Keep component-specific state local.

3. Choose state management based on app complexity.

4. Redux Toolkit is preferred in modern Redux apps.

5. React Query is commonly used for server state management.

---

# Pro Interview Tip

A strong React architecture answer should mention:

- Local State
- Context API
- Redux Toolkit
- Server State
- React Query

This demonstrates scalable frontend architecture understanding.