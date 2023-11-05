const newTaskInput = document.getElementById('new-task');
const pendingTasksList = document.getElementById('pending-tasks');
const completedTasksList = document.getElementById('completed-tasks');

function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const task = document.createElement('li');
    task.innerHTML = `
        <span>${taskText}</span>
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    pendingTasksList.appendChild(task);
    newTaskInput.value = '';
}

function completeTask(button) {
    const task = button.parentElement;
    const taskText = task.querySelector('span');
    taskText.classList.add('completed');
    button.disabled = true;
    button.previousElementSibling.disabled = true;

    completedTasksList.appendChild(task);
}

function editTask(button) {
    const task = button.parentElement;
    const taskText = task.querySelector('span');
    const newText = prompt('Edit the task:', taskText.textContent);
    if (newText !== null) {
        taskText.textContent = newText;
    }
}

function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
}
