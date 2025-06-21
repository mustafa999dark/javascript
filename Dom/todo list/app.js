 // DOM elements
    const addForm = document.querySelector('.add-todo-form');
    const todoInput = document.querySelector('.todo-input');
    const searchInput = document.querySelector('.search-box');
    const todoList = document.querySelector('.todo-list');
    const submitBtn = document.querySelector('.submit-btn');

    let currentEditIndex = null;

    // Add new todo
    addForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const todoText = todoInput.value.trim();
      
      if (todoText) {
        if (currentEditIndex !== null) {
          // Editing existing todo
          const todoItems = todoList.children;
          todoItems[currentEditIndex].querySelector('.todo-text').textContent = todoText;
          submitBtn.textContent = 'Add Task';
          currentEditIndex = null;
        } else {
          // Adding new todo
          const todoItem = document.createElement('li');
          todoItem.className = 'todo-item';
          todoItem.innerHTML = `
            <span class="todo-text">${todoText}</span>
            <div class="actions">
              <button class="edit-btn"><i class="fas fa-edit"></i></button>
              <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
            </div>
          `;
          todoList.appendChild(todoItem);
        }
        
        todoInput.value = '';
      }
    });

    // Handle delete and edit
    todoList.addEventListener('click', function(e) {
      const target = e.target.closest('button');
      if (!target) return;
      
      const todoItem = target.closest('.todo-item');
      
      if (target.classList.contains('delete-btn')) {
        todoItem.remove();
      } 
      else if (target.classList.contains('edit-btn')) {
        const todoText = todoItem.querySelector('.todo-text').textContent;
        todoInput.value = todoText;
        todoInput.focus();
        submitBtn.textContent = 'Update Task';
        
        // Find the index of the item we're editing
        const todoItems = todoList.children;
        currentEditIndex = Array.from(todoItems).indexOf(todoItem);
      }
    });

    // Search functionality
    searchInput.addEventListener('input', function() {
      const searchTerm = searchInput.value.trim().toLowerCase();
      const todoItems = todoList.children;
      
      Array.from(todoItems).forEach(item => {
        const text = item.querySelector('.todo-text').textContent.toLowerCase();
        if (text.includes(searchTerm)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });