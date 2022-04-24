const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let toDos = [];

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    
}

function deletTodo(event) {
    const li = event.target.parentElement;

    li.remove();
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
    saveTodo();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;    
    const btn = document.createElement("span");
    btn.innerText = "❌";

    btn.addEventListener("click", deletTodo);

    li.appendChild(btn);
    li.appendChild(span);
    
    todoList.appendChild(li);
}

function handleTodoSbmit(event) {
    event.preventDefault();

    const newTodoObj = {
        id: Date.now(), text: todoInput.value
    }
    toDos.push(newTodoObj);
    //localStorage cannot save array ["a", "b", "c"]> save them as String a, b, c
    //JSON.stringify
    todoInput.value = "";

    paintTodo(newTodoObj);
    saveTodo();
}

todoForm.addEventListener("submit", handleTodoSbmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    // JSON.stringify > JSON.parse = String > Array
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
    todoList.classList.remove(HIDDEN_CLASSNAME);
}else {
    todoList.classList.add(HIDDEN_CLASSNAME);
}