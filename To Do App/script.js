const search = document.querySelector('.search-form');
const cancel = document.querySelectorAll('img');
const addForm  = document.querySelector('.newform');
const list = document.querySelector('.lists');

addForm.addEventListener('submit', e => {
 
    e.preventDefault();
   const todo = addForm.add.value.trim();

   if(todo.length){
  
    generateTemplate(todo);
   }
});

const generateTemplate = () => {
   const todo = addForm.add.value.trim();
    const html = `
    <div class="task">
    <li>${todo}</li>
    <img src="/To Do App/delete icon.png" >
    </div>
   `;
 
    list.innerHTML += html; 


}
