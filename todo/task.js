const taskInput = document.getElementById('task__input');
const tasksList = document.querySelector('.tasks__list');
const tasksAdd = document.querySelector('.tasks__add');

taskInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && taskInput.value.trim() !== '') {
        tasksList.insertAdjacentHTML('beforeEnd', `
            <div class="task">
                <div class="task__title">
                    ${taskInput.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `);
        taskInput.value = '';
    }
});

tasksAdd.addEventListener('click', function (e) {
    e.preventDefault();;
    if (taskInput.value.trim() === '') {
        return;
    }
    tasksList.insertAdjacentHTML('beforeEnd', `
            <div class="task">
                <div class="task__title">
                    ${taskInput.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `);
    taskInput.value = '';
});

tasksList.addEventListener('click', function (e) {
    const task = e.target;
    if (task.classList.contains('task__remove')) {
        const taskItem = task.closest('.task');
        taskItem.remove();
    }
});

