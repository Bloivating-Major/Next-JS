import { getTodos } from "@/api/todos";
import { TodoItem } from "../components/TodoItem";
import { Suspense } from "react";
import { Skeleton, SkeletonList } from "../components/Skeleton";

export default function TodosPage() {
    return <>
        <h1 className="page-title">Todos</h1>
        <ul>
            <Suspense fallback={<>
                <SkeletonList amount={10}>
                    <li>
                        <Skeleton short />
                    </li>
                </SkeletonList>
            </>}>
                <TodoList />
            </Suspense>
        </ul>
    </>
}

async function TodoList() {
    const todos = await getTodos();
    return todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
    ))
}

// if you want to use suspense then you have to make sure that everything inside your function is removed and only suspense component is present

// <SkeletonList amount={10}>
//     <li>
//         <Skeleton short  />
//     </li>
// </SkeletonList>


// Either you can use loading component or you can use suspense component