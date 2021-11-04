//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


//Event Listeners
todoButton.addEventListener("click", (event) => {
    event.preventDefault();
    const newDiv = document.createElement("div")
    newDiv.classList.add("new-div")
    //put newDiv inside todoList
    todoList.appendChild(newDiv);
    //create new li inside new div
    const li = document.createElement("li")
    li.classList.add("new-li")
    li.textContent = todoInput.value;   
    newDiv.appendChild(li);
    //empty todoInput value
    todoInput.value = "";
    //create new trash button inside new div
    const trashButton = document.createElement("button")
    trashButton.classList.add("trash-button")
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    newDiv.appendChild(trashButton);
    
    
    // li.addEventListener("click", (event) => {
    //     event.preventDefault();
    //     event.target.style.textDecoration = "line-through";
    // }, false);
    const hide = (event) => {
        event.target.classList.toggle('checked');
    }
    li.addEventListener('click', hide, false);

    trashButton.addEventListener("click", (event) => {
        event.preventDefault();
        todoList.removeChild(newDiv);
    }) 
    
});






