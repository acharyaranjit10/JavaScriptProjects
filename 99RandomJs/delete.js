// Quote Generator in Local Storage
const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Get busy living or get busy dying. – Stephen King",
    "You miss 100% of the shots you don't take. – Wayne Gretzky",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    "The journey of a thousand miles begins with one step. – Lao Tzu",
    "In three words I can sum up everything I've learned about life: It goes on. – Robert Frost",
    "To be great is to be misunderstood. – Ralph Waldo Emerson",
    "Life is either a daring adventure or nothing at all. – Helen Keller",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson"
];

// Function to generate a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to update the displayed quote
function updateQuote() {
    const quoteElement = document.getElementById("quote");
    const newQuote = getRandomQuote();

    // Set the quote in local storage to remember it
    localStorage.setItem("lastQuote", newQuote);

    quoteElement.textContent = newQuote;
}

// Function to load the last shown quote from local storage
function loadLastQuote() {
    const lastQuote = localStorage.getItem("lastQuote");
    if (lastQuote) {
        document.getElementById("quote").textContent = lastQuote;
    } else {
        updateQuote();
    }
}

// Add event listener to the "New Quote" button
document.getElementById("new-quote-button").addEventListener("click", updateQuote);

// Load the last quote or generate a new one on page load
window.onload = loadLastQuote;
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
