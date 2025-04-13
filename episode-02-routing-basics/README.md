# 🗺️ Next.js Episode 02: Routing Basics

Welcome to the second episode of our Next.js journey! Let's explore the fascinating world of Next.js routing.

## 📂 Folder-Based Routing
Next.js introduces an intuitive folder-based routing system:
- 📁 Each folder represents a route segment
- 📄 `page.tsx` files define route endpoints
- 🔄 Routes can be nested for complex hierarchies

Example:
```tsx
app/
├── page.tsx         // → /
├── team/
│   ├── page.tsx     // → /team
│   └── about/
│       └── page.tsx // → /team/about
```

## 🎨 Layouts in Next.js
- 📐 Create custom layouts for specific routes
- 🔄 Layouts wrap child pages automatically
- 👶 Children are passed as `React.ReactNode`

```tsx
// layout.tsx
export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="layout">{children}</div>
}
```

## 🔗 Page Navigation
- 🚀 Use `Link` component for client-side navigation
- ⚡ Built-in performance optimizations
- 🎯 Clean, semantic routing structure

## 🏃‍♂️ Prefetching Magic
Next.js automatically optimizes page loading through prefetching:

### ⚙️ How it Works
- 🔄 Automatic prefetching of visible links
- 💨 Instant page transitions
- 📦 Smart resource caching

### 🎯 Prefetch States
- ✨ `fresh`: Recently prefetched
- 🔄 `reusable`: Ready for reuse
- 🕒 `stale`: Needs refresh
- ⏰ `expired`: Requires new fetch

### 🎛️ Configuration
- ⚡ Enabled by default in production
- 🛠️ Disabled in development
- 🎚️ Can be turned off: `<Link prefetch={false}>`

## 🚀 Key Takeaways
1. 📁 Folder structure = URL structure
2. 📄 Every route needs a `page.tsx`
3. 🎨 Layouts provide consistent UI
4. ⚡ Automatic performance optimization

---
Happy Routing! 🎉
