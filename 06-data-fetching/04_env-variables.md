
# Environment Variables in React

## 1. What are Environment Variables?

Environment variables are used to:

> Store sensitive or configurable data **outside your code**

Examples:

* API URLs
* API Keys
* Secret tokens
* App configurations

---

## 2. Why Use Environment Variables?

### ❌ Without Env Variables

```js
const API_KEY = "123456SECRET";
```

Problems:

* Security risk
* Hardcoded values
* Not flexible for different environments

---

### ✅ With Env Variables

```js
const API_KEY = process.env.REACT_APP_API_KEY;
```

Benefits:

* Secure
* Easy to manage
* Environment-specific configs

---

## 3. Creating .env File

Create a file in root:

```bash
.env
```

Example:

```env
REACT_APP_API_URL=https://api.example.com
REACT_APP_API_KEY=123456
```

---

## 4. Important Rule ⚠️

In React (Create React App):

> All variables must start with `REACT_APP_`

❌ Wrong:

```env
API_KEY=123
```

✅ Correct:

```env
REACT_APP_API_KEY=123
```

---

## 5. Accessing Env Variables

```js
const apiUrl = process.env.REACT_APP_API_URL;
```

---

## 6. Using in API Call

```js
const res = await fetch(
  `${process.env.REACT_APP_API_URL}/posts`
);
```

---

## 7. Restart Required

After changing `.env` file:

```bash
npm start
```

👉 Must restart server

---

## 8. Environment Types

You can have multiple env files:

```bash
.env                # default
.env.development    # dev
.env.production     # prod
```

---

## 9. Security Warning ⚠️

> Environment variables in React are **NOT fully secure**

Reason:

* They are visible in browser bundle

👉 Never store:

* Passwords
* Private keys
* Secret tokens

---

## 10. Best Practices

* Store only public config
* Use backend for sensitive data
* Use `.env.production` for deployment
* Keep `.env` in `.gitignore`

---

## 11. Interview Traps

### Trap 1

Forgetting prefix:

```env
API_KEY ❌
```

---

### Trap 2

Not restarting server

---

### Trap 3

Thinking env variables are fully secure

---

## 12. Interview Questions

### Q1: What are environment variables?

Variables used to store configuration outside code.

---

### Q2: Why use environment variables?

* security
* flexibility
* environment-based config

---

### Q3: Why prefix REACT_APP_ is needed?

React only exposes variables starting with this prefix.

---

### Q4: Are env variables secure in React?

❌ No (they are exposed in frontend bundle)

---

### Q5: Where should secrets be stored?

👉 Backend server

---

## Summary

Environment variables help to:

* Manage API URLs and keys
* Avoid hardcoding
* Handle multiple environments
* Improve project scalability

But:

* They are **not fully secure in frontend**
* Use backend for sensitive data
