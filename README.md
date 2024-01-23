# Project Name

To Do List Project


## Description

This project is a basic to do list application. The purpose is to provide an opportunity to practice making applications that are able to utilize the Create, Read, Update, and Delete development method.

With this application, we needed to be able to:
- Store to do tasks on in a database
- Retrieve the to do tasks from the database
- Add new to do tasks to the database
- Mark tasks as being complete
- Delete tasks

With these requirements in mind, we further needed to utilize the following ideas:
- Distinct styling changes to completed tasks
- The complete and delete functions should be tied to buttons
- Some sort of front end component that allows the user to add tasks
- All changes to the database should refresh the to do list
- Deletion should be observed in both the database AND frontend

Additional styling considerations:
- As little default HTML styling as possible

This particular solution to a to do list application is a simple, one page app. I have built a form component with an input box for a tasks details, and a priority dropdown selector.

All tasks are sorted by priority within the app. The list component updates on any change to database information.

The list displays as a column of boxes within a grid container. Each box contains the task description, priority, Complete button, and Delete button.

Clicking complete will change the color styling of a task to green and strike through the text. Tasks MAY BE "un-completed", if desired or needed.

The Delete button will remove an entry from the database, and refresh the page.

Page styling is built to be easier on the eyes, though success may be subjective to the user.
