import { useState, useEffect } from 'react';
import { getToDoList } from '../../../server/todoApi/todoApi';
import CollectTodoItem from '../toDoForm/toDoForm';
import './toDoList.css';

function BuildTodoList(){
    const [todoList, setTodoList] = useState([]);
    
    function refreshPage(){
        getToDoList()
        .then((response) => {
            //console.log(response);
            setTodoList(response.data)
        })
        .catch((error) => {
            console.error(error);
        })
    }
    
    
    useEffect(() => {
        console.log('useEffect start');
        refreshPage()
   }, []);
    
    return (
        <div>
            <table className='TodoFormat'>
                <thead>
                    <tr>
                        <th>What Needs Done?</th>
                        <th>When Is It Due?</th>
                    </tr>
                </thead>
                <tbody>
                    {todoList.map(listData => {
                        return (
                            <tr key={listData.id} className='TodoItem'>
                                <td>{listData.note}</td>
                                <td>{listData.priority}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default BuildTodoList;