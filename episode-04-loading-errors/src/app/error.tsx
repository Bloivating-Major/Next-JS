'use client';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-8 text-center">
        <div className="mb-4">
        </div>
        <h2 className="text-xl font-bold mb-4">Something went wrong!</h2>
        <button
          onClick={reset}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}