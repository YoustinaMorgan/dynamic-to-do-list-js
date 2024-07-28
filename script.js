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
    const li = document.createElementNS('li');
    li.textContent = taslText;

    const removeButton = document.createElement('button');
    removeButton.textcontent = "Remove";
    removeButton.className = 'remove.btn';

    removeButton.onclick = function() {
        tasklist.removeChild(li);
    };

    li.appendChild(removeButton);
    taskiList.appendChild(li);

    taskInput.value = "";
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    addTask();
});