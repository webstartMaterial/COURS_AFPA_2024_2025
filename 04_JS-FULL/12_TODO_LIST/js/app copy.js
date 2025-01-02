const BTN_TOGGLE_FORM = document.querySelector(".toggleForm");
const TODO_FORM = document.querySelector(".todo-form");
const COUNT = document.querySelector("#count");
const CLEAR_ALL = document.querySelector(".clear-all");
const TODO_LIST = document.querySelector(".todo-list");
const REMIND_ALL = document.querySelector(".reminder-all");

// permet de créer un todo
function createTodo() {

    TODO_FORM.addEventListener("submit", function (e) {

        e.preventDefault();

        // récupérer sous format json les éléments dans le localstorage
        // avec la notation todos
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        let inputTextDodo = document.getElementById('task').value;
        let inputDateDoto = document.getElementById('due-date').value;
        let inputReminder = document.getElementById('reminder').checked;

        // création du nouveau todo
        const newTodo = {
            id: Math.floor(Math.random() * 1000000) + 1,
            name: inputTextDodo,
            date: inputDateDoto,
            reminder: inputReminder
        };

        // j'ajoute le nouvel élément à la liste de todos
        todos.push(newTodo);
        // je mets à jour le localStorage avec ma nouvelle liste
        localStorage.setItem('todos', JSON.stringify(todos));

        // je réinitialise le formulaire
        TODO_FORM.reset();

        handleAddTodoToList(newTodo);

    });

}

function handleAddTodoToList(newTodo) {

    // je créer le li avec mes deux spans
    // <li class="todo-item reminder" id="1">
    //     <span>Faire les courses - 15/11/2024</span>
    //     <span class="delete-btn">✖</span>
    // </li>

    // ici je créer mon li
    let liTodo = document.createElement('li');
    liTodo.className = 'todo-item';
    if (newTodo.reminder) {
        liTodo.classList.add("reminder");
    }
    liTodo.id = newTodo.id;

    // ici je créer le span qui contient mon texte
    let spanText = document.createElement('span')
    spanText.innerHTML = `${newTodo.name} — ${newTodo.date}`;
    liTodo.append(spanText);

    // ici je créer le span qui contient la croix rouge
    let spanBtn = document.createElement('span');
    spanBtn.innerHTML = "✖";
    spanBtn.className = "delete-btn";
    liTodo.append(spanBtn);

    TODO_LIST.append(liTodo);

    getTotalTodos();
    deleteTodo();
}

// supprimer un todo
function deleteTodo() {

    let listDeleteBtn = document.querySelectorAll(".delete-btn");

    listDeleteBtn.forEach(function (deleteBtn, index) {
        deleteBtn.addEventListener("click", function () {
            this.parentElement.remove(); // supprimer le li du bouton sur lequel j'ai cliqué
            getTotalTodos();

            handleDeleteTodo(this.parentElement.id);

        });
    });


}

function handleDeleteTodo(id) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    let listTodosUpdated = todos.filter(function (todo) {
        return todo.id != id;
    });

    localStorage.setItem('todos', JSON.stringify(listTodosUpdated));

    getTotalTodos();

}

// récupérer le compteur de todo
function getTotalTodos() {

    // let nbrTodos = document.querySelectorAll(".todo-item").length;
    let listTodos = JSON.parse(localStorage.getItem('todos')) || [];
    let nbrTodos = listTodos.length;
    COUNT.innerHTML = nbrTodos;

}

// Ajouter/supprimer un rappel sur un todo
function toggleReminder() {

    // let listTodos = document.querySelectorAll(".todo-item");
    let listTodos = JSON.parse(localStorage.getItem('todos')) || [];
    console.log(listTodos);
    // if (listTodos.length > 0) {
    //     listTodos.forEach(function(todo) {
    //         todo.addEventListener("dblclick", function () {
    //             todo.classList.toggle("reminder");
    //             handleToggleRemindedr();
    //         });
    //     });
    // }
}

// Afficher/faire disparaitre le formulaire
function toggleShowForm() {

    BTN_TOGGLE_FORM.addEventListener("click", function () {

        TODO_FORM.classList.toggle("hide");

        if (TODO_FORM.classList.contains("hide")) {
            // chager de couleur le bouton
            // changer le texte
            this.classList.toggle("bg-green");
            this.innerHTML = "Afficher";
        } else {
            this.classList.toggle("bg-green");
            this.innerHTML = "Cacher";
        }

    });

}

function deleteAllTodos() {

    CLEAR_ALL.addEventListener("click", function () {
        TODO_LIST.innerHTML = "";
        // je vide le localstorage
        localStorage.removeItem('todos');
        getTotalTodos();
    });
}

function filterTodos() {

    REMIND_ALL.addEventListener("click", function() {
        TODO_LIST.classList.toggle("filtered");
        let filtered = TODO_LIST.classList.contains("filtered");
        let listFiltered;
        
        if(filtered) {
            let listTodos = JSON.parse(localStorage.getItem('todos')) || [];
        
            listFiltered = listTodos.filter(function (todo) {
                return todo.reminder == true;
            });

        } else {
            listFiltered = JSON.parse(localStorage.getItem('todos'));
        }

        handleFilterButtonChanged(filtered);

    
        
        TODO_LIST.innerHTML = "";

        listFiltered.forEach(function(todo) {
            handleAddTodoToList(todo);
        })
    });


}

function handleFilterButtonChanged(filtered) {

    if(filtered) {
        REMIND_ALL.classList.remove("bg-green");
        REMIND_ALL.classList.add("bg-blue");
        REMIND_ALL.innerHTML = "Tous";
    } else {
        REMIND_ALL.classList.remove("bg-blue");
        REMIND_ALL.classList.add("bg-green");
        REMIND_ALL.innerHTML = "Par rappel";
    }

}

function loadTodos() {
    let listTodos = JSON.parse(localStorage.getItem('todos')) || [];

    // Effacez le contenu existant de TODO_LIST avant d'ajouter de nouveaux éléments
    TODO_LIST.innerHTML = "";

    // Parcours de la liste pour créer les éléments
    listTodos.forEach(function (todo) {
        // ici je crée mon li
        let liTodo = document.createElement('li');
        liTodo.className = 'todo-item';
        if (todo.reminder) {
            liTodo.classList.add("reminder");
        }
        liTodo.id = todo.id;

        // ici je crée le span qui contient mon texte
        let spanText = document.createElement('span');
        spanText.innerHTML = `${todo.name} — ${todo.date}`;
        liTodo.append(spanText);

        // ici je crée le span qui contient la croix rouge
        let spanBtn = document.createElement('span');
        spanBtn.innerHTML = "✖";
        spanBtn.className = "delete-btn";
        liTodo.append(spanBtn);

        // Ajout du li à la liste
        TODO_LIST.appendChild(liTodo);
    });
}


filterTodos();
loadTodos();
createTodo();
toggleShowForm();
toggleReminder();
getTotalTodos();
deleteTodo();
deleteAllTodos();