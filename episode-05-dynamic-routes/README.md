# 🚀 Next.js Episode 05: Dynamic Routes

## 📝 Overview
Learn how to implement dynamic routing in Next.js, handle 404 errors, and create flexible URL patterns.

## 🔑 Key Concepts

### 1. Dynamic Routes
- Create dynamic routes using square brackets `[paramName]`
- Example: `todos/[id]` matches paths like `todos/1`, `todos/2`, etc.
- Access parameters via `params` prop in page components

```typescript
// app/todos/[id]/page.tsx
export default async function Page({ params }: { params: { id: string } }) {
    const todo = await getTodo(params.id);
    return (
        <>
            <h1>Todo {todo.id}</h1>
            <h1>{todo.title}</h1>
        </>
    );
}
```

### 2. Custom 404 Pages
- Next.js provides default 404 error pages
- Customize by creating `not-found.tsx` in your route folder
- Trigger custom 404 using `notFound()` function

### 3. Layouts in Dynamic Routes
- Regular layout files work with dynamic routes
- Create `layout.tsx` in dynamic route folders
- Nested routes can have their own layouts

### 4. Client Components
- Use `useParams` hook to access route parameters
- Import from `next/navigation`
- Only works in client components

### 5. Catch-all Routes
- `[...id]` - Catches all routes like `todos/1/2/3`
- `[[...id]]` - Optional catch-all, works for base path too
- Useful for handling multiple segments

## 🏗️ Project Structure
```
app/
├── todos/
│   ├── [id]/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── not-found.tsx
│   └── page.tsx
```

## 💡 Best Practices
1. Always handle loading and error states
2. Implement proper type checking for parameters
3. Use meaningful parameter names
4. Create custom 404 pages for better UX
5. Organize layouts efficiently

## 🔍 Example: Fetching Todo Data
```typescript
async function getTodo(id: string) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => res.json());
}
```

## 📚 Key Takeaways
- Dynamic routes enable flexible URL patterns
- Custom 404 pages improve user experience
- Layouts can be shared across dynamic routes
- Catch-all routes handle complex URL structures
- Client-side access to route parameters via hooks

## 🔗 Related Documentation
- [Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- [Not Found Pages](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
- [Layout RFC](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)