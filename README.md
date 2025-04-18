# Next.js Blog Application

A read-only blog application built with Next.js that demonstrates routing, data fetching, and component organization.

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Bloivating-Major/Next-JS.git
cd .\episode-08-read-only-blog\after\
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory:
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Start the API server (in a separate terminal):
```bash
cd api
npm install
npm run dev
```

## 📁 Project Structure

```
├── src/
│   ├── app/                 # App router directory
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   ├── posts/         # Posts routes
│   │   ├── users/         # Users routes
│   │   └── todos/         # Todos routes
│   ├── api/               # API utilities
│   └── components/        # Reusable components
├── public/                # Static assets
└── .env.local            # Environment variables
```

## 🛠️ Features

- **Posts Page**: Grid-based layout showing all blog posts
- **Users Page**: User profiles with associated posts and todos
- **Todos Page**: Task list with completion status
- **Dynamic Routing**: Individual post and user pages
- **Responsive Design**: Mobile-friendly layout
- **Server-Side Rendering**: Optimized page loading

## 🔄 API Endpoints

- `GET /posts` - All posts
- `GET /posts/:id` - Single post
- `GET /posts/:id/comments` - Post comments
- `GET /users` - All users
- `GET /users/:id` - Single user
- `GET /posts?userId=<userId>` - User's posts
- `GET /todos` - All todos
- `GET /todos?userId=<userId>` - User's todos

## 🧰 Tech Stack

- [Next.js 14](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📝 Development Notes

- Uses the new Next.js App Router
- Implements server-side data fetching
- Follows Next.js best practices for routing and layouts
- TypeScript for type safety
- CSS modules for component styling

## 🔨 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details