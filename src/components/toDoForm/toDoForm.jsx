import { useState } from 'react';
import { postToDoList } from '../../../server/todoApi/todoApi';

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
            <h2>Your Task Here</h2>
            <input className='todo_Note' type='text' placeholder='Enter note' onChange={(e) => setTodoNote(e.target.value)} required/>
            <select id='todo_Priority' defaultValue={'Eventually'} value={todoPriority} onChange={(e) => setTodoPriority(e.target.value)} required>
                <option value='Urgent'>Urgent</option>
                <option value='Pretty_Important'>Pretty Important</option>
                <option value='Eventually'>Eventually</option>
                <option value='Probably_Never'>Probably Never</option>
            </select>
            <button type='submit' onClick={handleTodoRequest}>Send It</button>
        </div>
    );

}

export default CollectTodoItem;