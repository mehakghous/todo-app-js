var todos = [
    {
        title: "laundry",
        description: "i will do laundry at 10 p.m.",
    },
    {
        title: "JS",
        description: "i will learn JS at 11 p.m.",
    },
    {
        title: "practice",
        description: " i will practice JS",
    }
]

var todoList = document.getElementById("todo-list");

function renderTodoList() {
    todoList.innerHTML = '';
    for (var i = 0; i < todos.length; i++) {
        todoList.innerHTML += `
        <li>
            <h1>${todos[i].title} <button onclick="deleteTodo(${i})">Delete</button></h1> 
            <p>${todos[i].description}</p>
        </li>`;

    }
}

renderTodoList();

function onTodoSubmit(form) {
    let formData = new FormData(form);
    if (!formData.get("todo-title") || !formData.get("todo-description")) {
        alert("please fill input")
    } else {
        // good way of taking values from HtmlForm;
        todos.push({
            title: formData.get('todo-title'),
            description: formData.get('todo-description'),
        })
    }
    renderTodoList();
}
function deleteTodo(i) {
    todos.splice(i, 1);
    renderTodoList();
}