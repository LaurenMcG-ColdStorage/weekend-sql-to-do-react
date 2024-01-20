import { useState, useEffect } from 'react';
import CollectTodoItem from '../toDoForm/toDoForm';
import BuildTodoList from '../toDoList/toDoList';
//import UpdateTodo from '../ToDoUpdate/ToDoUpdate';
//import DeleteTodo from '../TodoDelete/TodoDelete';
import { getToDoList } from '../../../server/todoApi/todoApi';
import './App.css';
import Grid from '@mui/material/Grid';
  
function App (){
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
  };

  useEffect(() => {
    refreshPage()
  }, [])

  return (
    <div>
      <h1>TO DO APP</h1>
      <CollectTodoItem CollectTodoItemCallback={refreshPage}/>
      <BuildTodoList todoList={todoList} 
                     RefreshTodoCallback={refreshPage}/>
    </div>
  )
};
export default App;
