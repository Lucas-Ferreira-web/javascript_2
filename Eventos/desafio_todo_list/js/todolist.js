; (function () {
    "use strict"

    //ARMAZENA O DOM EM VARIAVEIS
    const itemInput = document.querySelector("#item-input")
    const todoAddForm = document.querySelector("#todo-add")
    const ul = document.querySelector("#todo-list")
    //const lis = ul.getElementsByTagName("li")

    //estrutura de dados
    let arrTasks = [
        {
            name: "task1",
            createAt: Date.now(),
            completed: false
        }
    ]

    //funções
    function limpar(item) {
        item.value = ""
    }

    function addEventLi(li) {
        li.addEventListener("click", function () {
            console.log(this)
        })
    }

    function addTask(task) {
        const li = document.createElement("li")
        li.className = "todo-item"
        const p = document.createElement("p")
        p.className = "task-name"
        p.textContent = task
        li.appendChild(p)
        ul.appendChild(li)

        addEventLi(li)

    }

    //codigo
    todoAddForm.addEventListener("submit", function (e) {
        e.preventDefault()
        console.log(itemInput.value)
        // ul.innerHTML += `
        //     <li class="todo-item">
        //             <p class="task-name">${itemInput.value}</p>
        //     </li>
        // `
        addTask(itemInput.value)
        limpar(itemInput)
        itemInput.focus()
    });

    arrTasks.forEach(task => {

    });
})()