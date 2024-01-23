import { useState, useEffect } from 'react';
import CollectTodoItem from '../toDoForm/toDoForm';
import BuildTodoList from '../toDoList/toDoList';
import Header from '../Header/Header';
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
    <div className='App'>
      <Header />
      <CollectTodoItem CollectTodoItemCallback={refreshPage}/>
      <BuildTodoList todoList={todoList} 
                     RefreshTodoCallback={refreshPage}/>
    </div>
  )
};
export default App;
