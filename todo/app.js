// selectors
const todoBtn = document.querySelector('.todo-button')
const todoInput = document.querySelector('.todo-input')
const todolist = document.querySelector('.todo-list')
// event liseners
todoBtn.addEventListener("click", addTask)
todolist.addEventListener("click", checkOrDelete)
// functions
function addTask(e){
    e.preventDefault(); // to prevent the form 
    // create li
    const todoli = document.createElement("li")
    todoli.classList.add("todo")
    // create div
    const tododiv = document.createElement("div")
    tododiv.classList.add("todo-item")
    // add input value to div
    tododiv.innerText = todoInput.value
    // create button complete
    const completeBtn = document.createElement("button")
    completeBtn.classList.add("complete-btn")
    completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    
    // create trash button
    const trashBtn = document.createElement("button")
    trashBtn.classList.add("trash-btn")
    trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'

    // add div + button 1 + button 2 => li
    todoli.appendChild(tododiv)
    todoli.appendChild(completeBtn)
    todoli.appendChild(trashBtn)

    // add li ti ul
    todolist.appendChild(todoli)

    // remove input value
    todoInput.value = "";

}

function addTask(e){
    e.preventDefault(); // to prevent the form 
    // create li
    const todoli = document.createElement("li")
    todoli.classList.add("todo")
    // create div
    const tododiv = document.createElement("div")
    tododiv.classList.add("todo-item")
    // add input value to div
    tododiv.innerText = todoInput.value
    // create button complete
    const completeBtn = document.createElement("button")
    completeBtn.classList.add("complete-btn")
    completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    
    // create trash button
    const trashBtn = document.createElement("button")
    trashBtn.classList.add("trash-btn")
    trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'

    // add div + button 1 + button 2 => li
    todoli.appendChild(tododiv)
    todoli.appendChild(completeBtn)
    todoli.appendChild(trashBtn)

    // add li ti ul
    todolist.appendChild(todoli)

    // remove input value
    todoInput.value = "";




} 
    function checkOrDelete(e){
        const item = e.target
        if(item.classList[0] === 'complete-btn'){
         const todo = item.parentElement
         todo.classList.toggle("completed")
        }
        if(item.classList[0] === 'trash-btn'){
        const item = e.target    
        
        const todo = item.parentElement 
            todo.classList.toggle("fall")
            todo.addEventListener("transitionend", () => {
                todo.remove()
            })
        }
    }