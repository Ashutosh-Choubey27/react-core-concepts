# React Optimization Patterns

---

# What are Optimization Patterns?

Optimization patterns are techniques used to improve React application performance and reduce unnecessary rendering or computation.

Goals:
- Faster rendering
- Better user experience
- Reduced memory usage
- Smaller bundle size

---

# 1. React.memo()

Prevents unnecessary re-rendering of child components.

## Example

```jsx
const Child = React.memo(() => {
  return <h1>Child</h1>;
});
```

## Use Case
- Pure components
- Stable props

## Important Point
React.memo performs shallow comparison of props.

---

# 2. useCallback()

Memoizes functions to avoid recreation on every render.

## Example

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

## Use Case
- Passing functions to memoized children

---

# 3. useMemo()

Memoizes expensive calculations.

## Example

```jsx
const value = useMemo(() => {
  return heavyCalculation(data);
}, [data]);
```

## Use Case
- Expensive computations
- Filtering/sorting large data

---

# Difference: useMemo vs useCallback

| Hook | Purpose |
|------|----------|
| useMemo | Memoizes value |
| useCallback | Memoizes function |

---

# 4. Code Splitting

Divides large bundles into smaller chunks.

## Tools
- React.lazy()
- Suspense

## Benefits
- Faster initial loading
- Better performance

---

# 5. Lazy Loading

Loads components only when needed.

## Example

```jsx
const Dashboard = React.lazy(() =>
  import("./Dashboard")
);
```

---

# 6. Virtualization

Renders only visible items in huge lists.

## Libraries
- react-window
- react-virtualized

## Use Case
Large datasets (1000+ items)

---

# 7. Debouncing

Delays function execution until user stops typing.

## Use Case
- Search inputs
- API calls

---

# 8. Throttling

Limits function execution frequency.

## Use Case
- Scroll events
- Resize events

---

# 9. Proper Key Usage

## Wrong

```jsx
key={index}
```

## Correct

```jsx
key={item.id}
```

---

# Common Optimization Tools

- React DevTools Profiler
- Lighthouse
- Bundle Analyzer

---

# Common Interview Questions

## Q1. Why use React.memo?

To prevent unnecessary component re-renders.

---

## Q2. Difference between useMemo and useCallback?

- useMemo memoizes values
- useCallback memoizes functions

---

## Q3. What is shallow comparison?

React compares primitive values and object references, not deeply nested objects.

---

## Q4. What is virtualization?

Rendering only visible list items for better performance.

---

## Q5. What causes unnecessary re-renders?

- Inline functions
- New object references
- Parent re-renders
- State updates

---

# Important Notes

1. Avoid premature optimization.

2. Optimization adds complexity.

3. Use optimization only when performance problems exist.

4. Measure performance before optimizing.

5. React DevTools Profiler is commonly used for analysis.

---

# Pro Interview Tip

A strong optimization answer should mention:
- React.memo
- useMemo
- useCallback
- code splitting
- lazy loading
- virtualization
- profiling

This gives a senior-level impression in interviews.