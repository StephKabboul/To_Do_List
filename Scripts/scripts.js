document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const task = document.getElementById('task').value;
    const person = document.getElementById('person').value;
    
    console.log('Task:', task);
    console.log('Person:', person);

    addTaskToPending(task, person);
    
    document.getElementById('taskForm').reset();
}) 

function addTaskToPending(task, person) {
    const pendingTasks = document.getElementById('pendingTasks');
    
    const listItem = document.createElement('li');
    listItem.textContent = `${task} (Assigned to: ${person})`;
    console.log('Adding to pending:', listItem.textContent);
    
    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.addEventListener('click', function() {
        moveToCompleted(listItem, task, person);
    });
    
    listItem.appendChild(doneButton);
    pendingTasks.appendChild(listItem);
    console.log('Task added to pending list');
}

function moveToCompleted(listItem, task, person) {
    const completedTasks = document.getElementById('completedTasks');}