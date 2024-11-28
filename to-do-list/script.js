class TOdoList {
    constructor() {
        this.content = document.querySelector('.list'); // Select the list container
        this.tasks = []; // Array to store tasks
    }

    addTask() {
        const btnAdd = document.querySelector('button'); // Select the add button
        const input = document.getElementById('input'); // Select the input field

        // Add event listener to the button
        btnAdd.addEventListener('click', () => {
            const task = input.value.trim(); // Get the task from input and trim whitespace
            if (task) { // If the task is not empty
                this.tasks.push(task); // Add task to the tasks array
                this.renderTasks(); // Update the displayed tasks
                input.value = ''; // Clear the input field
            } else {
                alert("Please enter a task.");
            }
        });
    }

    renderTasks() {
        // Clear the current content
        this.content.innerHTML = '';

        // Loop through tasks and display each one
        this.tasks.forEach((task) => {
            const taskElement = document.createElement('h1');
            taskElement.textContent = task;
            this.content.appendChild(taskElement);
        });
    }
}

// Create an instance of the class and initialize it
const todoList = new TOdoList();
todoList.addTask();
