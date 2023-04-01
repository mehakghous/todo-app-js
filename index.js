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
// var li = document.createElement("li")
function renderTodoList() {
    for(var i = 0; i<todos.length; i++){
        todoList.innerHTML += `
        <li>
            <h1>${todos[i].title}</h1>
            <p>${todos[i].description}</p>
        </li>`;

    }
}
renderTodoList();