type Todo = {
    id: number,
    title: string,
    completed: boolean,
}

export function getTodos(){
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`).then(res => res.json()).then(data => data as Todo[])
}