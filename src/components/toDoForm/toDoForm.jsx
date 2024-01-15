import { useState, useEffect } from 'react';
import { postToDoList } from '../../../server/todoApi/todoApi';

function CollectTodoItem(props){
    const [todoNote, setTodoNote] = useState();
    const [todoPriority, setTodoPriority] = useState();

    function handleTodoRequest(){
        const postToDo = postToDoList();
        setTodoNote(document.querySelector('.todo_Note').value);
        setTodoPriority(document.getElementById('todo_Priority').value);

        postToDo({
            note: todoNote,
            priority: todoPriority,
        })
        .then((response) => {
            props.todoRefreshCallback(response.data)
        })
        .catch((error) => {
            console.error(error);
            res.sendStatus(500);
        })
    };

    return (
        <div className='todoCollection'>
            <h2>Your Task Here</h2>
            <input className='todo_Note' type='text' placeholder='Enter note' required/>
            <select id='todo_Priority' value={todoPriority} onChange={(e) => setTodoPriority(e.target.value)}>
                <option value='Urgent'>Urgent</option>
                <option value='pretty_Important'>Pretty Important</option>
                <option value='Eventually'>Eventually</option>
                <option value='probably_Never' selected>Probably Never</option>
            </select>
            <button type='submit' onClick={handleTodoRequest}>Send It</button>
        </div>
    );

}

export default CollectTodoItem;