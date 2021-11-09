


const form = document.querySelector('#new-task');
const input = document.querySelector('.new-task-inp');
const dateInp = document.querySelector('.new-task-date');
const tasksArr = document.querySelector('#tasks');

window.addEventListener('load', ()=>{    

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        const text = input.value;
        const date = dateInp.value;
        
        showData(text, date);

    })

})


function showData(taskVal, date){

    const taskEl = document.createElement('div');
    taskEl.classList.add('task');

    const taskElContent = document.createElement('div');
    taskElContent.classList.add('content');

    taskEl.appendChild(taskElContent);

    const taskText = document.createElement('input');
    taskText.classList.add('text');
    taskText.type = 'text';
    taskText.value = taskVal;
    taskText.setAttribute('readonly', 'readonly');

    taskElContent.appendChild(taskText);

    const taskDate = document.createElement('input');
    taskDate.classList.add('date');
    taskDate.type = 'date';
    taskDate.value = date;
    taskDate.setAttribute('readonly', 'readonly');

    taskElContent.appendChild(taskDate);

    const taskElActions = document.createElement('div');
    taskElActions.classList.add('actions');

    const taskEdit = document.createElement('button');
    taskEdit.classList.add('edit');
    taskEdit.innerText = 'Edytuj';

    const taskDelete = document.createElement('button');
    taskDelete.classList.add('delete');
    taskDelete.innerText = 'Usuń';

    taskElActions.appendChild(taskEdit);
    taskElActions.appendChild(taskDelete);

    taskEl.appendChild(taskElActions);

    tasksArr.appendChild(taskEl);

    input.value = '';

    taskEdit.addEventListener('click', (e) =>{
        if (taskEdit.innerText.toLowerCase() == "edytuj"){
            taskEdit.innerText = "Zapisz";
            taskText.removeAttribute("readonly");
            taskText.focus();
            taskDate.removeAttribute("readonly");

        }
        else {
            taskEdit.innerText = "Edytuj";
            taskText.setAttribute("readonly", "readonly");
            taskDate.setAttribute('readonly', 'readonly');
        }
    })

    taskDelete.addEventListener('click', (e) => {
        tasksArr.removeChild(taskEl);
    })
}

