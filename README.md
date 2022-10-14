# Weekend Sql To Do List

_Duration: 3 Days_

## Description

For this project, the goal was to create an app that would allow someone to add, update, and delete tasks from a database. It would also render those items to the DOM.

The app works by taking in a task name in the input text box, sending that information to the server, and from there the database. The server then gets the information from the database, and sends it back to the client. That information is then rendered to the DOM. There are also two buttons in the app. The status button tells if the task is completed or not, showing as "Complete" with the text strikethrough if done, and showing as "Incomplete" if not. That status information is sent when the button is clicked, from the client to the database itself, and is updated there. The other button is the delete button. When clicked, the task disappears from the DOM and the database altogether.

## Technologies

- JQuery
- Node
- Express
- SQL