import { useState, useEffect } from 'react';
import { postToDoList } from '../../../server/todoApi/todoApi';

function CollectTodoItem(){
    const [todoObject, setTodoObject] = useState();

    function handleTodoRequest(){
        const postToDo = postToDoList();
    };

    return (
        <div className='todoColletion'>
            <h2>Your Task Here</h2>
            <input className='todo_Note' type='text' placeholder='Enter note' required/>
            <select className='todo_Priority'>
                <option value='Urgent'>Urgent</option>
                <option value='pretty_Important'>Pretty Important</option>
                <option value='Eventually'>Eventually</option>
                <option value='probably_Never'>Probably Never</option>
            </select>
            <button type='submit'>Send It</button>
        </div>
    );

}

export default CollectTodoItem;