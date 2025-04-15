import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Todo Details',
  description: 'View detailed information about a specific todo',
}

export default function TodoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <nav className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Todo Details</h2>
      </nav>
      <main className="bg-white rounded-lg shadow-md p-6">
        {children}
      </main>
    </div>
  )
}