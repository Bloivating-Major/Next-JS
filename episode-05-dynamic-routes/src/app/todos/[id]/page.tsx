import { notFound } from 'next/navigation'

// Function to fetch a single todo
function getTodo(id : string){
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => res.json())
}


export default async function Page({ params }: { params: { id: string } }) {
    const todo = await getTodo(params.id)

    // Check if todo exists and has required properties
    if (!todo || !todo.title) {
        return notFound()
    }

    return (
        <div className="space-y-4">
            {/* Todo Title */}
            <h1 className="text-2xl font-bold text-gray-900">
                {todo.title}
            </h1>



            {/* Todo Details */}
            <div className="space-y-2">
                <p>
                    <span className="font-semibold">Todo ID:</span> {todo.id}
                </p>
            </div>
        </div>
    )
}