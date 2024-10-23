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

    function generationLiTask(obj) {
        const li = document.createElement("li")
        li.className = "todo-item"
        const p = document.createElement("p")
        p.className = "task-name"
        p.textContent = obj.name
        li.appendChild(p)
        addEventLi(li)
        return li
    }

    function renderTasks() {
        ul.innerHTML = ""
        arrTasks.forEach(task => {
            ul.appendChild(generationLiTask(task))
        });
    }

    function addTask(task) {
        arrTasks.push({
            name: task,
            createAt: Date.now(),
            completed: false
        })
    }

    //codigo
    todoAddForm.addEventListener("submit", function (e) {
        e.preventDefault()
        console.log(itemInput.value)
        addTask(itemInput.value)
        renderTasks()
        limpar(itemInput)
        itemInput.focus()
    });

    renderTasks()

})()