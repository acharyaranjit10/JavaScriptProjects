// To-Do List App
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");
    const clearAllButton = document.getElementById("clear-all");

    // Load tasks from local storage
    loadTasks();

    // Event listener to add a new task
    addTaskButton.addEventListener("click", function () {
        const task = taskInput.value.trim();
        if (task) {
            addTask(task);
            taskInput.value = "";
        }
    });

    // Event listener to clear all tasks
    clearAllButton.addEventListener("click", function () {
        clearAllTasks();
    });

    // Function to load tasks from local storage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(function (task) {
            createTaskElement(task);
        });
    }

    // Function to add a task to the list
    function addTask(task) {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        createTaskElement(task);
    }

    // Function to create a task list item
    function createTaskElement(task) {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");

        const taskText = document.createElement("span");
        taskText.classList.add("task-text");
        taskText.textContent = task;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-task");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            deleteTask(taskItem, task);
        });

        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    }

    // Function to delete a task from the list and local storage
    function deleteTask(taskItem, task) {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const updatedTasks = tasks.filter(t => t !== task);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        taskItem.remove();
    }

    // Function to clear all tasks
    function clearAllTasks() {
        localStorage.removeItem("tasks");
        taskList.innerHTML = "";
    }
});
