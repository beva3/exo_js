class TOdoList{
    constructor(){
        this.content = document.getElementsByClassName('list');
        this.tasks = [];
    }

    addTask(){
        const btnAdd = document.querySelector('button'); // Select the add button
        const input = document.getElementById('input'); // Select the input field

        // Add event listener to the button
        btnAdd.addEventListener('click', () => {
            const task = input.value.trim(); // Get the task from input
            alert(task);
            if (task) { // If the task is not empty
                this.tasks.push(task); // Add task to the tasks array
                input.value = ''; // Clear the input field
            }
        });
    }
    printTask(){
        let h1 =[]
        for (let i=0; i<this.tasks.length; i++){
            h1[i] = document.createElement('h1');
            h1[i].textContent = this.tasks[i];
            this.content[0].appendChild(h1[i]);  // append to list element 0 (first list) in the HTML document  // addTask method is called in a loop, hence tasks are added one by one to the list element 0 in the HTML document.  // This will print tasks one by one in the list element 0 in the HTML document.  // As the loop runs, it appends each task to the list element 0, thus creating a new task on each iteration.  // The tasks are printed in the order they were added to the TOdoList object.  // Note: In a real-world application, you would want to display the tasks in a more user-friendly way, like displaying them in a list or a table.  // However, in this simple example, we're just printing
        }
    }
}

t = new TOdoList();

// tasks = [
//     "Task 1",
//     "Task 2",
//     "Task 3",
//     "Task 4",
//     "Task 5"  // Add more tasks as needed  // Note: In a real-world application, you would add tasks dynamically, perhaps from a database or a user input field.  // In this example, we're just adding tasks in an array for simplicity.  // However, in a real-world application, you would add tasks to the array using the addTask method, and then call the printTask method to display them.  // The
// ];
// tasks.forEach(task => t.addTask(task));
t.addTask()
t.printTask()