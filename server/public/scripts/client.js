console.log('js');

$(document).ready(onReady);

function onReady() {
    console.log('jquery ready');

    $('#addButton').on('click', handleSubmit);

    getTasks();

    $('#taskList').on('click', '.completeBtn', markComplete);
};

function handleSubmit() {
    console.log('submit button clicked');
    let task = {};
    task.name = $('#taskIn').val();
    addTask(task);
};

function addTask(newTask) {
    $.ajax({
        type: "POST",
        url: '/todo',
        data: newTask
    })
        .then(function(response) {
            console.log('response from server', response);
            getTasks();
        })
        .catch(function(error) {
            console.log('error in POST', error);
        })
}

function getTasks() {
    console.log('in getTasks');

    $.ajax({
        method: 'GET',
        url: '/todo'
    })
        .then(function (response) {
            console.log('GET /todo response', response);
            renderTasks(response);
        });
}

function renderTasks(tasks) {
    $('#taskList').empty();

    for (let item of tasks) {

        $('#taskList').append(`
        <tr>
            <td>${item.taskname}</td>
            <td>
            <button class="completeBtn" data-id=${item.id}>Complete Task</button>            
            </td>
           
        </tr>
        `);
    }
}

function markComplete() {
    let taskId = $(this).data('id');

    $.ajax({
        method: 'PUT',
        url: `/todo/${taskId}`,
    })
        .then(function (response) {
            console.log('the task is updated');
            getTasks();
        })
        .catch((error) => {
            console.log('error updating tasks', error);
        })
};

{/* <td>
<button class="deleteBtn" data-id=${task.id}>Delete</button>           
</td> */}