document.addEventListener("DOMContentLoaded", function() {
    const addEmptyTaskBtn = document.getElementById("addEmptyTaskBtn");
    const taskList = document.querySelector(".List");

    // Function to add an empty task
    function addEmptyTask() {
        const newTask = document.createElement("div");
        newTask.classList.add("task_bar");
        newTask.innerHTML = `
            <input type="text" class="in_task" placeholder="Enter task name (optional)">
            <div class="DandP">
                <select class="dynamic_difficulty">
                    <option value="Easy" class="Low">Easy</option>
                    <option value="Medium" class="Medium">Medium</option>
                    <option value="Hard" class="High">Hard</option>
                </select>
                <select class="dynamic_priority">
                    <option value="Low" class="Low">Low</option>
                    <option value="Medium" class="Medium">Medium</option>
                    <option value="High"  class="High">High</option>
                </select>
            </div>
            <div class="remove">
                <button class="removeTaskBtn"><i class="fas fa-trash-alt"></i></button>
            </div>
        `;
        taskList.appendChild(newTask);

        // Focus on the task name input for user convenience
        const taskNameInput = newTask.querySelector(".in_task");
        taskNameInput.focus();

        // Add event listener to remove button
        const removeTaskBtn = newTask.querySelector(".removeTaskBtn");
        removeTaskBtn.addEventListener("click", function() {
            taskList.removeChild(newTask);
        });

        // Add event listener to task name input for editing
        taskNameInput.addEventListener("blur", function() {
            if (!taskNameInput.value.trim()) {
                // If task name is empty, remove the placeholder
                taskNameInput.removeAttribute("placeholder");
            } else {
                // If task name is provided, make it readonly
                taskNameInput.setAttribute("readonly", true);
            }
        });
    }

    // Event listener for add empty task button
    addEmptyTaskBtn.addEventListener("click", addEmptyTask);
});
