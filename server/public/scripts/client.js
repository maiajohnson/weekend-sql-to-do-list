console.log('js');

$(document).ready(onReady);

function onReady() {
    console.log('jquery ready');

    $('#addButton').on('click', handleSubmit);

    getTasks();
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
        })
}