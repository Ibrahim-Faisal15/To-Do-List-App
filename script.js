// Define variables
let tasktext;
let task_input = document.querySelector(".input");
let container = document.querySelector(".container");

// Function to create a new task
function createTask(textContent) {
  // Create task elements
  let task = document.createElement("div");
  task.id = "task";
  let text = document.createElement("h2");
  text.className = "task_desc";
  text.textContent = textContent;
  let tick_button = document.createElement("button");
  tick_button.className = "done";
  tick_button.innerHTML = "&#10003;";
  let trash_can = document.createElement("button");
  trash_can.classList = "delete";
  trash_can.innerHTML = "&#128465;";
  let buttons = document.createElement("div");
  buttons.classList = "buttons";

  // Build task structure
  task.appendChild(text);
  buttons.appendChild(tick_button);
  buttons.appendChild(trash_can);
  task.appendChild(buttons);

  // Append task to the container
  container.appendChild(task);

  // Clear the input field after creating the task
  task_input.value = "";
}

// Event listener for adding a new task
let enter = document.querySelector(".btn");
enter.addEventListener("click", () => {
  let textContent = task_input.value.trim();
  if (textContent !== "") {
    createTask(textContent);
  }
});

// Event listener for deleting a task
container.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    let taskToRemove = event.target.closest("#task");
    if (taskToRemove) {
      taskToRemove.remove();
    }
  }
});

// Event listener for marking a task as done (line-through)
container.addEventListener("click", (event) => {
  if (event.target.classList.contains("done")) {
    let parentTask = event.target.closest("#task");
    if (parentTask) {
      let taskDescElement = parentTask.querySelector(".task_desc");
      taskDescElement.style.textDecoration = "line-through";
    }
  }
});
