const overlay = document.querySelector('#overlay');
const taskForm = document.querySelector('#task-form');
const addTaskBtn = document.querySelector('#add-task');
const closeTaskBtn = document.querySelector('#close-task-creation');

const Name = document.querySelector('#name');
const Description = document.querySelector('#description');

const study = document.querySelector('#study-list');
const work = document.querySelector('#work-list');
const personal = document.querySelector('#personal-list');
const home = document.querySelector('#home-list');

// Task creation modal and its buttons.

addTaskBtn.addEventListener('click', function () {
    overlay.classList.add('active');
    taskForm.classList.add('active');
});

closeTaskBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
    taskForm.classList.remove('active');
    Name.value = '';
    Description.value = '';
    taskInput.style.border = 'none';
});

window.onclick = (event) => {
    if (event.target === overlay) {
        overlay.classList.remove('active');
        taskForm.classList.remove('active');
    };
};

// Delete task buttons.

study.addEventListener('click', (event) => {
    const Btn = event.target;
    const li = Btn.parentNode;
    const taskList = li.parentNode;

    if (Btn.className === 'delete-task') {
        study.removeChild(li);
    }
});

work.addEventListener('click', (event) => {
    const Btn = event.target;
    const li = Btn.parentNode;
    const taskList = li.parentNode;

    if (Btn.className === 'delete-task') {
        work.removeChild(li);
    }
});

personal.addEventListener('click', (event) => {
    const Btn = event.target;
    const li = Btn.parentNode;
    const taskList = li.parentNode;

    if (Btn.className === 'delete-task') {
        personal.removeChild(li);
    }
});

home.addEventListener('click', (event) => {
    const Btn = event.target;
    const li = Btn.parentNode;
    const taskList = li.parentNode;

    if (Btn.className === 'delete-task') {
        home.removeChild(li);
    }
});

// Create main tasks.

const createTaskBtn = document.querySelector('#create-task');
const taskInput = document.querySelector('#name');
const select = document.querySelector('#select')

createTaskBtn.addEventListener('click', () => {
    if (taskInput.value === '') {
        taskInput.style.border = '2px solid red';
        taskInput.style.borderRadius = '10px';
        taskInput.addEventListener('focus', () => {
            taskInput.style.border = 'none';
        })
    } else if (select.value === 'study') {
        study.innerHTML += `
    <li class="task">
        <div class="main-task-content">
            <input type="checkbox">
            <span class="checkmark"></span>
            <p class="task-name">${Name.value}</p>
            <p class="description">${Description.value}</p>
        </div>
        <button class="delete-task" title="Apagar tarefa">&times;</button>
    </li>
    `;
        Name.value = '';
        Description.value = '';
        taskInput.style.border = 'none';
        overlay.classList.remove('active');
        taskForm.classList.remove('active');

    } else if (select.value === 'work') {
        work.innerHTML += `
    <li class="task">
        <div class="main-task-content">
            <input type="checkbox">
            <span class="checkmark"></span>
            <p class="task-name">${Name.value}</p>
            <p class="description">${Description.value}</p>
        </div>
        <button class="delete-task" title="Apagar tarefa">&times;</button>
    </li>
    `;
        Name.value = '';
        Description.value = '';
        taskInput.style.border = 'none';
        overlay.classList.remove('active');
        taskForm.classList.remove('active');

    } else if (select.value === 'personal') {
        personal.innerHTML += `
    <li class="task">
        <div class="main-task-content">
            <input type="checkbox">
            <span class="checkmark"></span>
            <p class="task-name">${Name.value}</p>
            <p class="description">${Description.value}</p>
        </div>
        <button class="delete-task" title="Apagar tarefa">&times;</button>
    </li>
    `;
        Name.value = '';
        Description.value = '';
        taskInput.style.border = 'none';
        overlay.classList.remove('active');
        taskForm.classList.remove('active');

    } else if (select.value === 'home') {
        home.innerHTML += `
    <li class="task">
        <div class="main-task-content">
            <input type="checkbox">
            <span class="checkmark"></span>
            <p class="task-name">${Name.value}</p>
            <p class="description">${Description.value}</p>
        </div>
        <button class="delete-task" title="Apagar tarefa">&times;</button>
    </li>
    `;
        Name.value = '';
        Description.value = '';
        taskInput.style.border = 'none';
        overlay.classList.remove('active');
        taskForm.classList.remove('active');
    }
});

// Change list.

const changeList = document.querySelector('#change-list');
const taskList = document.querySelector('#task-list');
const main = document.querySelector('main');
const lists = document.querySelectorAll('.list');

changeList.addEventListener('click', () => {
    taskList.classList.toggle('active');
    main.classList.toggle('active');
    lists.forEach(list => {
        list.classList.toggle('active');
    });
})

// Change theme.

const theme = document.querySelector('#change-theme');
const root = document.querySelector(':root');
const tasks = document.querySelectorAll('.task');

theme.addEventListener('click', () => {
    root.classList.toggle('active');
    tasks.forEach(task => {
        task.classList.toggle('active');
    });

    if (theme.src.match('dark-theme')) {
        theme.src = 'Images/light-theme.png';
    } else {
        theme.src = 'Images/dark-theme.png';
    }
});
