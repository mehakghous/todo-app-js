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
    for(var i = 0; i<todos.length; i++){
        todoList.innerHTML += `
        <li>
            <h1>${todos[i].title}</h1>
            <p>${todos[i].description}</p>
        </li>`;

    }
}

renderTodoList();

function onTodoSubmit(form) {
    // good way of taking values from HtmlForm;
    let formData = new FormData(form);
    todos.push({
        title: formData.get('todo-title'),
        description: formData.get('todo-description'),
    })
    renderTodoList();
}