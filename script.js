document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask() {
        const task = taskInput.value.trim();
        if (taskText==="") {
            alert("please enter a task.");
            return;
        }
        else {
    const li = document.createElement("classList.add");
    li.textContent = taskText;
    
    const removeButton = document.createElement("button");
    const removeButton = document.createElement("remove-btn");
    removeButton.textcontent = "Remove";
    removeButton.className = "remove.btn";

    removeButton.onclick = function() {
        tasklist.removeChild(li);
    };
        

    li.appendChild(removeButton);
    taskiList.appendChild(li);

    taskInput.value = "";
    }
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    addTask();
});

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    let tasks = [];

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
            tasks.forEach(task => addTaskToDOM(task));
        }
    }

    // Function to save tasks to Local Storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to add a task to the DOM
    function addTaskToDOM(task) {
        const taskItem = document.createElement('li');
        taskItem.textContent = task;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeTask(task, taskItem));
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);
    }

    // Function to add a new task
    function addTask() {
        const newTask = taskInput.value.trim();
        if (newTask) {
            tasks.push(newTask);
            addTaskToDOM(newTask);
            saveTasks();
            taskInput.value = '';
        }
    }

    // Function to remove a task
    function removeTask(task, taskItem) {
        tasks = tasks.filter(t => t !== task);
        taskList.removeChild(taskItem);
        saveTasks();
    }

    // Event listener for adding a task
    document.getElementById('addTaskButton').addEventListener('click', addTask);

    // Initial load of tasks
    loadTasks();
});