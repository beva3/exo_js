class TodoList {
    constructor() {
        this.tasks = [
            "Task 1",
            "Task 2",
            "Task 3"
        ];
        this.content = document.querySelector('.list')
        console.log(this.content);
        
    }

    add(){
        console.log('Adding task');
        let input_task = document.getElementById('input-task');
        let add_btn = document.getElementById('add-btn');
        add_btn.addEventListener('click', () => {
            let task = input_task.value.trim();
            this.tasks.push(task);
            this.print()
            input_task.value = '';
        });
        
        
    }
    row(task){
        return `<p>${task}</p>`
    }
    print(){
        this.content.innerHTML = ""
        if(this.tasks.length > 0){
            this.tasks.forEach(task => {
                console.log(task);
                this.content.innerHTML += this.row(task);  // Add each task to the list element in the HTML document.
            });
        }else{
            console.log("No tasks to print.");
        }
    }
    execute(){
        this.add();
        this.print();
    }
}

let myTodoList = new TodoList();
myTodoList.execute();