function addTask() {
    // Get the input value
    const taskText = document.querySelector('.m').value;

    // Create a new task container div
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('addedTasks');
    taskDiv.style.marginTop = '25px';

    // Create label, checkbox, and buttons
    const label = document.createElement('label');
    label.classList.add('l');
    label.textContent = taskText;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    const upButton = document.createElement('button');
    upButton.classList.add('up');
    upButton.textContent = '☝️';
    upButton.onclick = function() {
        moveUp(taskDiv);
    };

    const downButton = document.createElement('button');
    downButton.classList.add('down');
    downButton.textContent = '👇';
    downButton.onclick = function() {
        moveDown(taskDiv);
    };

    const binButton = document.createElement('button');
    binButton.classList.add('bin');
    binButton.onclick = function() {
        eraseTask(taskDiv);
    };

    // Append the label, checkbox, and buttons to the taskDiv
    taskDiv.appendChild(label);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(upButton);
    taskDiv.appendChild(downButton);
    taskDiv.appendChild(binButton);

    // Append the taskDiv to the container
    document.querySelector('.container').appendChild(taskDiv);

    // Clear the input field after adding the task
    document.querySelector('.m').value = '';
}

function moveUp(taskDiv) {
    const prevTask = taskDiv.previousElementSibling;
    if (prevTask && prevTask.classList.contains('addedTasks')) {
        taskDiv.parentNode.insertBefore(taskDiv, prevTask);
    }
}

function moveDown(taskDiv) {
    const nextTask = taskDiv.nextElementSibling;
    if (nextTask && nextTask.classList.contains('addedTasks')) {
        taskDiv.parentNode.insertBefore(nextTask, taskDiv);
    }
}

function eraseTask(taskDiv) {
    taskDiv.parentNode.removeChild(taskDiv);
}
