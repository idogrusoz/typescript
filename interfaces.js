// function showTodo(todo: { title: string; name: string }) {
//   console.log(todo.title + ': ' + todo.name)
// }
var myTodo = { title: 'Meeting', text: 'Attend job interview' };
function showTodo(todo) {
    console.log(todo.title + ': ' + todo.text);
}
showTodo(myTodo);
// This way you can create a custom type
