const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');


todoButton.addEventListener('click',addTodo);


todoList.addEventListener('click', deleteCheck)


function addTodo(e){
    e.preventDefault()
//making new div
    let newDive=document.createElement('div');
    newDive.classList.add('todo');
    // //making the li
    let newLi=document.createElement('li')
    newLi.innerText=todoInput.value
    todoInput.value=''
    newLi.classList.add('newitem')
    newDive.appendChild(newLi)

    //making the complete btn
    let comPletedButton=document.createElement('button');
    comPletedButton.innerHTML='<i class="fa-solid fa-check"></i>'
    comPletedButton.classList.add('check')
    newDive.appendChild(comPletedButton)

    //making the trash btn

    let trash=document.createElement('trash-button');
    trash.innerHTML='<i class="fa-solid fa-trash"></i>'
    trash.classList.add('trash')
    newDive.appendChild(trash)
   

    //append the newDiv to the big div

    todoList.appendChild(newDive)

    
}


function deleteCheck(event) {
    let item=event.target
    if(item.classList[0]==='trash'){
     const todo=item.parentElement;
     todo.remove()
     
    }
     console.log(event.target)


     if(item.classList[0]==='check'){
        const todo=item.parentElement;
        todo.classList.toggle('check1')
     }






  
     
 }






