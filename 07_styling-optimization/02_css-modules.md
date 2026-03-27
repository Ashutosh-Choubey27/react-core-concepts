
# CSS Modules in React

## 1. What are CSS Modules?

CSS Modules are a way to:

> Write CSS such that class names are **locally scoped to a component**

Meaning:

* No global conflicts
* No accidental override
* Clean and maintainable styling

---

## 2. Problem with Normal CSS

### ❌ Traditional CSS

```css
.btn {
  background: red;
}
```

Issue:

* Global scope
* Same class name can clash across components

---

## 3. Solution: CSS Modules

File naming:

```bash
Button.module.css
```

Example:

```css
.btn {
  background: green;
  color: white;
}
```

---

## 4. How It Works Internally

React converts:

```css
.btn
```

into something like:

```css
.btn_xyz123
```

👉 Unique class name → no conflict

---

## 5. How to Use CSS Modules

### Step 1: Create file

```bash
Button.module.css
```

---

### Step 2: Import in component

```jsx
import styles from "./Button.module.css";
```

---

### Step 3: Use class

```jsx
<button className={styles.btn}>
  Click
</button>
```

---

## 6. Multiple Classes

```jsx
<div className={`${styles.box} ${styles.active}`}>
```

---

## 7. Conditional Styling with CSS Modules

```jsx
<button
  className={`${styles.btn} ${
    isActive ? styles.active : ""
  }`}
>
  Click
</button>
```

---

## 8. Dynamic Class Access

```jsx
styles["btn"]
```

---

## 9. Advantages

* Scoped styles
* No naming conflicts
* Better maintainability
* Cleaner code structure

---

## 10. Limitations

* Slightly verbose syntax
* Not global (sometimes needed)
* No dynamic runtime styles like JS-based styling

---

## 11. Best Practices

* Use `.module.css` naming
* Keep component-specific styles
* Avoid global CSS unless necessary
* Combine with conditional styling

---

## 12. Interview Traps

### Trap 1

Using normal className:

```jsx
className="btn" ❌
```

Correct:

```jsx
className={styles.btn} ✅
```

---

### Trap 2

Forgetting `.module.css`

---

### Trap 3

Mixing global and module styles improperly

---

## 13. Interview Questions

### Q1: What are CSS Modules?

Locally scoped CSS for React components.

---

### Q2: Why use CSS Modules?

To avoid global CSS conflicts.

---

### Q3: How do you import CSS Modules?

```jsx
import styles from "./file.module.css"
```

---

### Q4: Can we use conditional styling with CSS Modules?

✅ Yes

---

### Q5: Difference between CSS Modules and normal CSS?

| CSS               | CSS Modules |
| ----------------- | ----------- |
| global            | scoped      |
| conflict possible | no conflict |

---

## Summary

CSS Modules help to:

* Avoid global CSS conflicts
* Scope styles per component
* Improve maintainability
* Write cleaner UI code

They are widely used in **production-level React apps**.
