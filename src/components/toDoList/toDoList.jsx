import { useState, useEffect } from 'react';
import { getToDoList } from '../../../server/todoApi/todoApi';

function BuildTodoList(){
    const [todoList, setTodoList] = useState();
    
    useEffect(() => {
        console.log('useEffect start');
    
        const todoCall = getToDoList();
        todoCall
        .then((response) => {
          setTodoList(response.data)
        })
        .catch((error) => {
          console.error(error);
          res.sendStatus(500);
        })
      }, []);
    
    return (
        <section>
            <table>
                <thead>
                    <th>What Needs Done?</th>
                    <th>How Important Is It?</th>
                </thead>
                <tbody>
                    {todoList.map(listData => {
                        return (
                            <tr key={listData.id}>
                                <td>{listData.note}</td>
                                <td>{listData.priority}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    );
};

export default BuildTodoList;