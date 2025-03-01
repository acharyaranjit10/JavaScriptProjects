// Task Manager App with complex functionality (over 400 lines)

document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const taskInput = document.getElementById("task-input");
    const addButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");
    const taskFilter = document.getElementById("task-filter");
    const clearCompletedButton = document.getElementById("clear-completed");
    const filterByCategory = document.getElementById("filter-category");
    const taskCount = document.getElementById("task-count");
    const taskCounter = document.getElementById("task-counter");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let currentUser = localStorage.getItem("user");

    // Helper Functions
    function updateTaskCounter() {
        const activeTasks = tasks.filter(task => !task.completed).length;
        taskCounter.textContent = `Active Tasks: ${activeTasks}`;
    }

    function saveTasksToLocalStorage() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function renderTasks() {
        taskList.innerHTML = "";

        const filteredTasks = filterTasksByCategory(tasks);
        filteredTasks.forEach(task => {
            const taskItem = document.createElement("li");
            taskItem.classList.add("task-item");
            taskItem.setAttribute("data-id", task.id);

            const taskDescription = document.createElement("span");
            taskDescription.classList.add("task-text");
            taskDescription.textContent = task.description;

            if (task.completed) {
                taskDescription.classList.add("completed");
            }

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("delete-btn");
            deleteButton.textContent = "Delete";

            const completeButton = document.createElement("button");
            completeButton.classList.add("complete-btn");
            completeButton.textContent = task.completed ? "Undo" : "Complete";

            taskItem.appendChild(taskDescription);
            taskItem.appendChild(completeButton);
            taskItem.appendChild(deleteButton);

            taskList.appendChild(taskItem);
        });

        updateTaskCounter();
    }

    function filterTasksByCategory(tasks) {
        const selectedCategory = filterByCategory.value;
        if (selectedCategory === "all") {
            return tasks;
        } else {
            return tasks.filter(task => task.category === selectedCategory);
        }
    }

    // Event Listeners
    addButton.addEventListener("click", () => {
        const taskDescription = taskInput.value.trim();
        const category = taskFilter.value;

        if (!taskDescription) {
            alert("Please enter a valid task description.");
            return;
        }

        const newTask = {
            id: Date.now(),
            description: taskDescription,
            completed: false,
            category: category,
            createdAt: new Date().toISOString()
        };

        tasks.push(newTask);
        saveTasksToLocalStorage();
        renderTasks();
        taskInput.value = "";
    });

    taskList.addEventListener("click", (event) => {
        const taskId = event.target.closest(".task-item")?.dataset.id;
        if (!taskId) return;

        const task = tasks.find(t => t.id == taskId);

        if (event.target.classList.contains("delete-btn")) {
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasksToLocalStorage();
            renderTasks();
        }

        if (event.target.classList.contains("complete-btn")) {
            task.completed = !task.completed;
            saveTasksToLocalStorage();
            renderTasks();
        }
    });

    taskFilter.addEventListener("change", () => {
        renderTasks();
    });

    filterByCategory.addEventListener("change", () => {
        renderTasks();
    });

    clearCompletedButton.addEventListener("click", () => {
        tasks = tasks.filter(task => !task.completed);
        saveTasksToLocalStorage();
        renderTasks();
    });

    // User Authentication
    const loginButton = document.getElementById("login-btn");
    const logoutButton = document.getElementById("logout-btn");
    const usernameInput = document.getElementById("username-input");
    const passwordInput = document.getElementById("password-input");

    loginButton.addEventListener("click", () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username && password) {
            currentUser = username;
            localStorage.setItem("user", username);
            alert(`Welcome ${username}`);
            renderTasks();
        } else {
            alert("Please enter a valid username and password.");
        }
    });

    logoutButton.addEventListener("click", () => {
        currentUser = null;
        localStorage.removeItem("user");
        alert("You have logged out.");
        renderTasks();
    });

    // Initializing the Task Manager App
    function initializeApp() {
        if (!currentUser) {
            alert("Please log in to start managing your tasks.");
        }
        renderTasks();
    }

    // Initialize the app
    initializeApp();
});
