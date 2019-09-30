// function showTodo(todo: { title: string; name: string }) {
//   console.log(todo.title + ': ' + todo.name)
// }

// let myTodo = { title: 'Meeting', text: 'Attend job interview' }

// showTodo(myTodo)

// Code above shows problems. Make further Google search on it

// -----------------------------------------------------------------

interface Todo {
  title: string
  text: string
}

const myTodo = { title: 'Meeting', text: 'Attend job interview' }

function showTodo(todo: Todo) {
  console.log(todo.title + ': ' + todo.text)
}

showTodo(myTodo)

// This way you can create a custom type
