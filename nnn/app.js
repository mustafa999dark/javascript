const todoContainer = document.getElementById(`todoContainer`);

fetch(`https://jsonplaceholder.typicode.com/todos`)
.then(response => response.json())
.then(data=>{

    const first10=data.slice(0,10);

    first10.forEach(item =>{
        const li = document.createElement(`li`);
        li.className = `todo-item`;
   
    
    const checkbox = document.createElement(`input`);
    checkbox.type= `checkbox`;
    checkbox.checked = item.completed;

    const text = document.createElement(`span`);
    text.textContent=item.title;
    if(item.completed){
        text.classList.add(`completed`);
    }
    checkbox.addEventListener(`click` , function(){

        text.classList.toggle(`completed`);
    });

li.appendChild(checkbox);
li.appendChild(text);
todoContainer.appendChild(li);
  });
 })

 .catch(error =>{
    console.log(`Error:`, error);
  todoContainer.innerHTML = '<li>Could not load TODOs. Please try again.</li>';
 });

