// This is our function to get todos

import { Suspense } from "react"

// Where we are awaiting for 2 seconds
async function getTodos(){
  await wait(2000)
  // throw new Error("sldfj")
  return fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json())
}

// This is our main function here
export default function Home(){
  return <>
  <h1>This is Todos</h1>
  <Suspense fallback={"Loading..."}>
    <TodoList/>
  </Suspense>
  </>
}

// For our Suspense to work we are using another component to await our call and return the todos
async function TodoList(){
  const todos = await getTodos()
  return <h1>This is Home {todos.length}</h1>
}


// This is our function wait which takes and argument to wait 
function wait(duration : number){
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}