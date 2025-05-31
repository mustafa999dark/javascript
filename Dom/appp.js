 const taskInput = document.getElementById('taskInput');
        const addBtn = document.getElementById('addBtn');
        const taskList = document.getElementById('taskList');

        // Add task function
        function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText === '') return;

            // Create new task item
            const li = document.createElement('li');
            
            // Task text
            const span = document.createElement('span');
            span.textContent = taskText;
            
            // Done button
            const doneBtn = document.createElement('button');
            doneBtn.textContent = '✔';
            doneBtn.onclick = function() {
                span.classList.toggle('completed');
            };
            
            // Delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '🗑️';
            deleteBtn.onclick = function() {
                li.remove();
            };
            
            // Put everything together
            li.appendChild(span);
            li.appendChild(doneBtn);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            
            // Clear input
            taskInput.value = '';
        }

        // Event listeners
        addBtn.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') addTask();
        });