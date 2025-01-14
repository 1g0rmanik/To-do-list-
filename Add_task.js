const container = document.getElementById('container');

// Add new task
function Add() {
    const currentCount = container.children.length;
    if (currentCount >= 7) {
        alert("You can't add more than 7 tasks!");
        return; // Exit from function
    }

    const text = document.getElementById('text').value.trim(); // Get a text
    if (text === '') {
        alert("You must add text for your task!");
        return;
    }

    // Create a new element of task
    const createdElement = document.createElement('div');
    createdElement.className = 'box';

    // Create a checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            createdElement.classList.add('completed');
        } else {
            createdElement.classList.remove('completed');
        }
    });
    // Add a text
    const textSpan = document.createElement('span');
    textSpan.style.marginLeft = '10px';
    textSpan.innerText = text;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btnr';
    deleteButton.onclick = function () {
        container.removeChild(createdElement);
    };

    // Add elements to container of task
    createdElement.appendChild(checkbox);
    createdElement.appendChild(textSpan);
    createdElement.appendChild(deleteButton);

    // Add task to container
    container.appendChild(createdElement);

    // Clear the input field
    document.getElementById('text').value = '';
}

// Delete all tasks
function AllRemove() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}