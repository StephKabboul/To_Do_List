document.getElementById("taskForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const task = document.getElementById("task").value;
    const person = document.getElementById("person").value;
    const dueDate = document.getElementById("dueDate").value;

    addTaskToPending(task, person, dueDate);
    document.getElementById("taskForm").reset();
  });

function addTaskToPending(task, person, dueDate) {
  const pendingTasksList = document.getElementById("PendingTasks");
  const listItem = document.createElement("li");
  const currentDate = new Date();
  const taskDueDate = new Date(dueDate);

  let taskContent = `
      <div>Task: ${task}</div>
      <div>Assigned to: ${person}</div>
      <div>Due: ${dueDate}</div>
    `;

  if (taskDueDate < currentDate) {
    listItem.classList.add("expired");
    taskContent += `<div class="expired-label">Task Past Due</div>`;
  }
  taskContent += `<button class="done-button" onclick="markTaskAsDone(this)">Done</button>`;

  listItem.innerHTML = taskContent;
  pendingTasksList.appendChild(listItem);
}

function markTaskAsDone(button) {
  const listItem = button.parentElement;
  const completedTasksList = document.getElementById("CompletedTasks");
  completedTasksList.appendChild(listItem);
  button.remove();
}

