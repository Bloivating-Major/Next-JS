import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Todo Not Found</h2>
      <p className="text-gray-600 mb-6">
        The todo you are looking for does not exist or has been removed.
      </p>
      <Link 
        href="/" 
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Back to Todos List
      </Link>
    </div>
  )
}