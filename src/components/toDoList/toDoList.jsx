import { useState, useEffect } from 'react';
import { getToDoList } from '../../../server/todoApi/todoApi';

function BuildTodoList(){
    const [todoList, setTodoList] = useState([]);
    
    function refreshPage(){
        const getTodo = getToDoList();
        getTodo
        .then((response) => {
            console.log(response);
            setTodoList(response.data)
        })
        .catch((error) => {
            console.error(error);
            res.sendStatus(500);
        })
    }
    
    
    useEffect(() => {
        console.log('useEffect start');
        refreshPage()
   }, []);
    
    return (
        <div>
            <table>
                <thead>
                    <th>What Needs Done?</th>
                    <th>When Is It Due?</th>
                </thead>
                <tbody>
                    {todoList.map(listData => {
                        return (
                            <tr key={listData.id}>
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