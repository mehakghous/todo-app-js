var todos = getTodos()

var todoList = document.getElementById("todo-list");

let editTodoIndex = -1;

function renderTodoList() {
    todoList.innerHTML = '';
    for (var i = 0; i < todos.length; i++) {
        todoList.innerHTML += `
        <li>
            <h1>
            ${todos[i].title} 
            <button onclick="editTodo(${i})">Edit</button>
            <button onclick="deleteTodo(${i})">Delete</button>
            </h1> 
            <p>${todos[i].description}</p>
        </li>`;

    }
}

renderTodoList();

function onTodoSubmit(form) {
    let formData = new FormData(form);
    if (!formData.get("todo-title") || !formData.get("todo-description")) {
        alert("please fill input");
        return;
    }

    const todo = {
        title: formData.get('todo-title'),
        description: formData.get('todo-description'),
    }

    if (editTodoIndex !== -1) {
        // edit mode;
        todos[editTodoIndex] = todo;
        editTodoIndex = -1;
    } else {
        // add mode;
        todos.push(todo);
    }

    form.reset()
    setTodos()
    renderTodoList();
}

function deleteTodo(i) {
    todos.splice(i, 1);
    setTodos()
    renderTodoList();
}

function getTodos() {
    return JSON.parse(localStorage.getItem("todoList") || '[]')
}

function setTodos() {
    localStorage.setItem('todoList', JSON.stringify(todos))
}

function editTodo(i) {
    console.log(i);
    const form = document.getElementById('todo-form');
    form['todo-title'].value = todos[i].title;
    form['todo-description'].value = todos[i].description;
    editTodoIndex = i;
}