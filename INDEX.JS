document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskText = document.getElementById('new-task').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;
    const category = document.getElementById('category').value;

    if (taskText.trim() === '') return;

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskText} (Due: ${dueDate}, Priority: ${priority}, Category: ${category})</span>
        <div>
            <button class="complete-task">Complete</button>
            <button class="delete-task">Delete</button>
        </div>
    `;

    document.getElementById('tasks').appendChild(taskItem);

    taskItem.querySelector('.complete-task').addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    taskItem.querySelector('.delete-task').addEventListener('click', function() {
        taskItem.remove();
    });

    document.getElementById('new-task').value = '';
    document.getElementById('due-date').value = '';
    document.getElementById('priority').value = 'low';
    document.getElementById('category').value = 'work';
}