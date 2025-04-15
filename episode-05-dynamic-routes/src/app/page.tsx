import Link from "next/link";

// Created the type of interface for todo
interface Todo {
  id : number;
  title : string;
  completed : boolean;
  userId : number;
}

async function getTodos() {
    return fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
    );
}

export default async function Home() {
  const todos = await getTodos();
  return (
    <div>
      <h1>This is Todos</h1>
      <ul>
        {/* Used here Todo Interface to define the type */}
        {todos.map(( todo : Todo ) => (
          <li key={todo.id}>
            <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}