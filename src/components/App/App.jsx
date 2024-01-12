import {useState, useEffect} from 'react';
import { getToDoList } from '../../todoApi/todoApi'

function App () {
  const [toDoList, setToDoList] = useState();
  
  useEffect(() => {
    console.log('useEffect start');

    const todoCall = getToDoList();
    todoCall
    .then((response) => {
      setToDoList(response.data)
    })
    .catch((error) => {
      console.error(error);
      resizeBy.sendStatus(500);
    })
  })
  return (
    <div>
      <h1>TO DO APP</h1>
    </div>
  );

}

export default App
