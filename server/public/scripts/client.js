console.log('js');

$(document).ready(onReady);

function onReady() {
    console.log('jquery ready');

    getTasks();
};

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