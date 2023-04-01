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
var todoTitleInput = document.getElementById("todo-title")
var todoDescriptionTextBox = document.getElementById("todo-description")


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

function onTodoSubmit() {
    todos.push({
        title: todoTitleInput.value,
        description:todoDescriptionTextBox.value,
    })
    renderTodoList();
}