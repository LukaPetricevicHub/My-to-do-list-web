// Save tasks 
function saveTasks() {
    const taskList = document.getElementById("taskList");
    localStorage.setItem("tasks", taskList.innerHTML);
}

// Retrieve tasks 
function loadTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = localStorage.getItem("tasks") || "";
}

// Call loadTasks() 
document.addEventListener("DOMContentLoaded", loadTasks);

// Update saveTasks()
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        ${taskInput.value}
        <select onchange="updatePriority(this)">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        <input type="date" onchange="updateDueDate(this)">
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";

    saveTasks();
}

function completeTask(button) {
    const li = button.parentNode;
    li.classList.toggle("completed");

    saveTasks();
}

function deleteTask(button) {
    const li = button.parentNode;
    const taskList = document.getElementById("taskList");
    taskList.removeChild(li);

    saveTasks();
}

// Update function
function updatePriority(select) {
    const li = select.parentNode;
    li.setAttribute("data-priority", select.value);
    saveTasks();
}

function updateDueDate(input) {
    const li = input.parentNode;
    li.setAttribute("data-due-date", input.value);
    saveTasks();
}
