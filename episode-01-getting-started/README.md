# 🚀 Next.js Episode 01: Getting Started

Welcome to the first episode of our Next.js learning journey! Let's explore what we've learned.

## 📦 Project Setup
- Created a fresh Next.js app using `npx create-next-app@latest`

## 📁 Project Structure
- `app/` directory: The heart of our application
- `public/` folder: 🖼️ Static assets heaven
  - Images, fonts, icons
  - All publicly accessible via URL
- `.next/` folder: 🏗️ Build output
- Configuration files:
  - 📝 `eslint` for code quality
  - 🔍 `next.env.d.ts` for TypeScript support
  - ⚙️ `next.config.js` for Next.js configuration
  - 📦 `package.json` for dependencies
  - 🛠️ `tsconfig.json` for TypeScript settings

## 🏗️ Application Architecture
- Layout-based structure:
  - `layout.tsx`: 🌳 Root component
  - `page.tsx`: 📄 Content pages
  - Hierarchical relationship between layout and pages

## 🎯 Key Learnings

### 🖥️ Server-First Approach
- By default, everything runs on the server
- Console logs execute server-side
- Server components are the default

### 🔄 Client-Side Components
- Use the `'use client'` directive when needed
- Client components run on both server and client
- Important: Server components can't use:
  - React hooks
  - Browser APIs
  - Client-side only features

## 🏃‍♂️ Running the Project
```bash
npm run build   # Build the application
npm start       # Start production server
npm run dev     # Start development server
```

## 🎓 Key Takeaway
Next.js 13+ embraces server-first architecture while maintaining flexibility for client-side interactions when needed.

---
Happy coding! 🚀✨