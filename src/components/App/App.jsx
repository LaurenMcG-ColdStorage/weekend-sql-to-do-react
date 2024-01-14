import {useState, useEffect} from 'react';
import { getToDoList } from '../../../server/todoApi/todoApi'
import CollectTodoItem from '../toDoForm/toDoForm';
import BuildTodoList from '../toDoList/toDoList';

function App () {

  return (
    <div>
      <h1>TO DO APP</h1>
      <CollectTodoItem />
      <BuildTodoList />
    </div>
  );

}

export default App
