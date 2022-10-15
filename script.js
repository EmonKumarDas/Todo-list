document.getElementById("add-todo").addEventListener("click", () => {
    let getTodo = JSON.parse(localStorage.getItem("todo-list"));
    const inputtext = document.getElementById("input-todo");
    let inputValue = inputtext.value;


    if (!getTodo) {
        const list = [
            {
                todo: inputValue,
            }
        ];
        localStorage.setItem("todo-list", JSON.stringify(list));
    }
    else {
        const list = [
            ...getTodo,
            {
                todo: inputValue,
            }
        ];
        localStorage.setItem("todo-list", JSON.stringify(list));
    }
    inputtext.value = "";
    getTodoList()

});

const getTodoList = () => {
    const TodoList = JSON.parse(localStorage.getItem("todo-list"));
    let ulvalue = document.getElementById("todo-list");
    ulvalue.innerText = "";
    TodoList.forEach(elements => {
        let li = document.createElement("li");
        li.classList = ("bg-red-600 p-2 rounded mt-2 w-full");
        li.innerText = elements.todo;
        ulvalue.appendChild(li);
    });
}
getTodoList();

let ClearData = () => {
    JSON.parse(localStorage.removeItem("todo-list"));
    getTodoList();
}

