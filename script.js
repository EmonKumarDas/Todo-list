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
    } else {
        const list = [
            ...getTodo,
            {
                todo: inputValue,
            }
        ];
        localStorage.setItem("todo-list", JSON.stringify(list));
    }
    inputtext.value = "";
    getTodoList();
});

const deleteTodo = (index) => {
    let getTodo = JSON.parse(localStorage.getItem("todo-list"));
    getTodo.splice(index, 1);
    localStorage.setItem("todo-list", JSON.stringify(getTodo));
    getTodoList();
};

const editTodo = (index) => {
    let getTodo = JSON.parse(localStorage.getItem("todo-list"));
    const updatedTodo = prompt("Edit your task:", getTodo[index].todo);
    if (updatedTodo !== null) {
        getTodo[index].todo = updatedTodo;
        localStorage.setItem("todo-list", JSON.stringify(getTodo));
        getTodoList();
    }
};

const getTodoList = () => {
    const TodoList = JSON.parse(localStorage.getItem("todo-list"));
    let ulvalue = document.getElementById("todo-list");
    ulvalue.innerHTML = "";

    if (TodoList) {
        TodoList.forEach((element, index) => {
            let li = document.createElement("li");
            li.classList = "bg-red-600 p-2 rounded mt-2 w-full";

            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList = "text-white bg-red-600 w-20 h-8 rounded mr-2";
            deleteButton.addEventListener("click", () => deleteTodo(index));

            let editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.classList = "text-white bg-blue-600 w-20 h-8 rounded";
            editButton.addEventListener("click", () => editTodo(index));

            li.appendChild(document.createTextNode(element.todo));
            li.appendChild(deleteButton);
            li.appendChild(editButton);
            ulvalue.appendChild(li);
        });
    }
};

const ClearData = () => {
    localStorage.removeItem("todo-list");
    getTodoList();
};

getTodoList();
