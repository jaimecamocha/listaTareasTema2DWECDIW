document.getElementById('agregarTarea').addEventListener('click', function() {
    const taskText = document.getElementById('inputTarea').value;
    if (taskText.trim() !== '') {
        const taskList = document.getElementById('listaTarea');
        const listItem = document.createElement('li');
        listItem.innerHTML = `<input type="checkbox"> ${taskText}`;
        taskList.appendChild(listItem);
        document.getElementById('inputTarea').value = '';

        document.getElementById('limpiarTarea').style.display = 'block';

        const checkbox = listItem.querySelector('input[type="checkbox"]');
        
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                listItem.classList.add('completed');
            } else {
                listItem.classList.remove('completed');
            }
        });
    }
});

document.getElementById('limpiarTarea').addEventListener('click', function() {
    const taskList = document.getElementById('listaTarea');
    const tasks = taskList.getElementsByTagName('li');
    for (let i = tasks.length - 1; i >= 0; i--) {
        const task = tasks[i];
        const checkbox = task.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            taskList.removeChild(task);
        }
    }

    if (taskList.children.length === 0) {
        document.getElementById('limpiarTarea').style.display = 'none';
    }
});
