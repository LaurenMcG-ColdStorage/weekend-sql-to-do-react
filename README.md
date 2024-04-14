# Project Name

To Do List Project


## Description

This project is a basic to do list application. It's written to practice making applications that are able to utilize the Create, Read, Update, and Delete development method. This application is written with Javascript, HTML, CSS, NodeJS, and Express.

This application is able to:
- Store to do tasks in a database
- Retrieve the tasks from the database
- Add new tasks to the database
- Mark tasks as being complete
- Delete tasks

With these requirements in mind, we needed to take things a little further and utilize the following ideas:
- Completed tasks should have styling that makes it easy to distinguish from incomplete tasks
- The complete and delete functions should be tied to buttons
- There should be a component that allows the user to add new tasks
- All changes to the database should refresh the to do list
- Deletion should be observed in both the database AND frontend

Additional styling considerations:
- As little default HTML styling as possible

This particular solution is a simple, one page app. 

I have built a form component with an input box for tasks details, and a priority dropdown selector. This allows a user to add new 'to do' tasks easily.

All tasks are sorted by priority within the app. The list component updates on any change to database information. The list displays as a column of boxes within a container. Each box contains the task description, priority, Complete button, and Delete button.

Clicking complete will change the color styling of a task to green and strike through the text. Tasks MAY BE "un-completed", if desired or needed.

The Delete button will remove an entry from the database, and refresh the page.

Page styling is built to be distinct from default HTML.
