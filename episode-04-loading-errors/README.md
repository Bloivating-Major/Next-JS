# 🔄 Next.js Episode 04: Data Fetching, Loading & Error Handling

Welcome to Episode 04 where we explore Next.js's powerful data fetching capabilities and built-in loading/error states!

## 🚀 Server-Side Data Fetching

### Direct Component Fetching
```typescript
export default async function Home() {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
  return <h1>This is Home {todos.length}</h1>
}
```
- No more `useEffect` needed for data fetching
- Data fetching happens on the server
- Results are passed to the client

## ⏳ Loading States

### 1. Built-in Loading State
- Create `loading.tsx` for automatic loading UI
- Next.js shows loading state while data fetches
- Seamless integration with React Suspense

### 2. Custom Loading with Suspense
```typescript
import { Suspense } from 'react'

export default function Home() {
  return (
    <Suspense fallback={"Loading..."}>
      <TodoList />
    </Suspense>
  )
}
```

## ❌ Error Handling

### Custom Error Component
- Create `error.tsx` for error handling
- Must use `'use client'` directive
- Provides retry functionality
- Automatically cached by Next.js

## 🏗️ Route Structure Flow

### Root Level
1. Root Layout
2. Root Error
3. Root Loading
4. Root Page

### Nested Routes (e.g., Team)
1. Team Layout
2. Team Error
3. Team Loading
4. Team Page

## 💡 Key Features

### 1. Server-Side Operations
- Data fetching runs on server
- Better performance
- Improved SEO

### 2. Built-in Loading States
- Automatic loading UI
- Suspense integration
- Nested loading states

### 3. Error Boundaries
- Automatic error catching
- Custom error UI
- Retry functionality

### 4. Caching
- Automatic caching
- Error page caching
- Performance optimization

## 🔍 Code Examples

### Data Fetching with Delay
```typescript
async function getTodos() {
  await wait(2000)
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
}

function wait(duration: number) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}
```

## 📚 Best Practices

1. Error Handling:
   - Always implement error boundaries
   - Provide clear error messages
   - Include retry functionality

2. Loading States:
   - Show meaningful loading UI
   - Use Suspense for granular control
   - Consider nested loading states

3. Data Fetching:
   - Leverage server-side fetching
   - Implement proper error handling
   - Consider caching strategies

## 🔗 Related Documentation
- [Next.js Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)
- [Error Handling](https://nextjs.org/docs/app/building-your-application/routing/error-handling)
- [Loading UI](https://nextjs.org/docs/app/building-your-application/routing/loading-ui)
- [React Suspense](https://react.dev/reference/react/Suspense)

---
Happy coding! 🚀