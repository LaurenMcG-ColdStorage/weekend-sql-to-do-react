import { useState } from 'react';
import { postToDoList } from '../../../server/todoApi/todoApi';
import './toDoForm.css';

function CollectTodoItem({CollectTodoItemCallback}){
    const [todoNote, setTodoNote] = useState();
    const [todoPriority, setTodoPriority] = useState();
    
    function handleTodoRequest(){
        console.log(todoNote);
        console.log(todoPriority);

        postToDoList({
            note: todoNote,
            priority: todoPriority
        })
        .then((response) => {
            setTodoNote('');
            setTodoPriority();
            CollectTodoItemCallback();
        })
        .catch((error) => {
            console.error(error);
        })
    };

    return (
        <div className='todoCollection'>
            <h2>Something Need Doing?</h2>
            <label for='note'>What is it?</label> 
            <input name='note' className='todo_Note' type='text' placeholder='Enter note' onChange={(e) => setTodoNote(e.target.value)} required/><br />
            <label for='priority'>When does it need done?</label>
            <select name='priority' className='todo_Priority' defaultValue={'Eventually'} value={todoPriority} onChange={(e) => setTodoPriority(e.target.value)} required>
                <option value='Urgent'>Urgent</option>
                <option value='Pretty Important'>Pretty Important</option>
                <option value='Eventually'>Eventually</option>
                <option value='Appoximately Never'>Probably Never</option>
            </select>
            <button type='submit' onClick={handleTodoRequest}>Send It</button>
        </div>
    );

}

export default CollectTodoItem;