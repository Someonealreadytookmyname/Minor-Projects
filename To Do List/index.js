document.addEventListener("DOMContentLoaded", function() {
    const addBtn = document.querySelector('.add');
    const removeBtn = document.querySelector('.remove');
    const taskList = document.querySelector('.List');

    // Function to add a new task
    function addTask() {
        const taskName = prompt("Enter the task name:");
        if (taskName) {
            const newTask = document.createElement('div');
            newTask.classList.add('task_bar');
            newTask.innerHTML = `
                <div class="task">${taskName}</div>
                <div class="difficulty">Medium</div>
                <div class="priority">Normal</div>
            `;
            taskList.appendChild(newTask);
        }
    }

    // Function to remove the last task
    function removeTask() {
        const tasks = taskList.querySelectorAll('.task_bar');
        if (tasks.length > 1) {
            taskList.removeChild(tasks[tasks.length - 1]);
        } else {
            alert("Cannot remove all tasks!");
        }
    }

    // Event listeners for add and remove buttons
    addBtn.addEventListener('click', addTask);
    removeBtn.addEventListener('click', removeTask);
});
