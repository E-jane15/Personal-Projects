const search = document.querySelector('.search');
const addForm  = document.querySelector('.newform');
const list = document.querySelector('.lists');

//add todos
addForm.addEventListener('submit', e => {
 
    e.preventDefault();
   const todo = addForm.add.value.trim();

   if(todo.length){
  
    generateTemplate(todo);
    addForm.reset();
   }
});

//delete todos
list.addEventListener('click', e =>{
  if(e.target.classList.contains('cancel')){
    e.target.parentElement.remove();  
  }
});


const generateTemplate = () => {
   const todo = addForm.add.value.trim();
    const html = `  
    <div class="task">
    <li>${todo}</li>
    <img src="/To Do App/delete icon.png" class="cancel" >
    </div>
   `;
 
    list.innerHTML += html; 
}


//keyup event
search.addEventListener('keyup', () => {
  const term = search.value.trim();
});